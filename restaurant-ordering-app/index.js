
console.log('JS file is running')

// Imports
import { menuArray } from './data.js'

// DOM Elements
const menuItemsEl = document.getElementById('menu-container')
const orderSection = document.getElementById('order-section')
const orderItemsContainer = document.getElementById('order-items-container')

// State Variables
let order = []

// Function to generate menu HTML
function getMenuHtml(){
    
    let menuHtml = ''

    menuArray.forEach(function(menuItem){
        menuHtml += `
            <div class="menu-item">
                <div class="menu-item-inner">
                    <img class="menu-item-image" src="${menuItem.image}" alt="${menuItem.name}">
                    <div class="menu-copy">
                        <p class="menu-item-name">${menuItem.name}</p>
                        <p class="menu-item-ingredients">${menuItem.ingredients.join(', ')}</p>
                        <p class="menu-item-price">${menuItem.price}</p>
                    </div>
                    <button class="menu-item-btn" data-add="${menuItem.id}">+</button>
                </div>
                <hr class="menu-divider">
            </div>
        `
    })    
    
    return menuHtml
}

// Function to handle menu clicks
function handleMenuClick(e) {
    if (!e.target.dataset.add) return
    console.log('add clicked:', e.target.dataset.add)

    const itemId = Number(e.target.dataset.add)

    const clickedItem = menuArray.find(function(item){
        return item.id === itemId
    })
    console.log('clicked item:', clickedItem)

    const existingIndex = order.findIndex(function(orderItem){
        return orderItem.item.id === itemId
    })

    if (existingIndex !== -1) {
        order[existingIndex].qty += 1
        renderOrder()
    } else {
        order.push({item: clickedItem, qty: 1})
    }

    orderSection.classList.remove('hidden')
    renderOrder()

    console.log('Order:', order)

}

// Function to handle order removal
function handleOrderClick(e) {
    if (!e.target.dataset.remove) return

    const itemId = Number(e.target.dataset.remove)

    const itemIndex = order.findIndex(function(orderItem){
        return orderItem.item.id === itemId
    })

    if (itemIndex === -1) return

    order[itemIndex].qty -= 1

    if (order[itemIndex].qty > 1) {
        order[itemIndex].qty -= 1
    } else {
        order.splice(itemIndex, 1)
    }

    renderOrder()
    console.log('order after removal:', order)

}


// Renders order items
function renderOrder() {
    let orderHtml = ''

    order.forEach(function(orderItem) {
        orderHtml += 
        `<div class="order-item">
            <span class="order-item-name">${orderItem.item.name}</span>
            <span class="order-item-qty">x${orderItem.qty}</span>
            <button class="remove-item-btn" data-remove="${orderItem.item.id}">-</button>
        </div>`

    })
    orderItemsContainer.innerHTML = orderHtml
}

// Initial render
function render(){
    menuItemsEl.innerHTML = getMenuHtml()
    // console.log("App is running")
}

// Event Listeners
menuItemsEl.addEventListener('click', handleMenuClick)
orderItemsContainer.addEventListener('click', handleOrderClick)

// Call initial render
render()