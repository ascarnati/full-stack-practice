
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

    orderSection.classList.remove('hidden')
    orderItemsContainer.innerHTML = `<p>Item added to order!</p>`
    console.log('Clicked element:', e.target.dataset.add)
}

function addItemToOrder(itemId) {
    const menuItem = order.findIndex(function(item){
        return item.id === itemId
    })
    console.log(order)
}

// Initial render
function render(){
    menuItemsEl.innerHTML = getMenuHtml()
}

// Event Listeners
menuItemsEl.addEventListener('click', handleMenuClick)

// Call initial render
render(console.log("App is running"))