import { menuArray } from './data.js'
const menuItemsEl = document.getElementById('menu-container')

function getMenuHtml(){
    
    let menuHtml = ''

    menuArray.forEach(function(menuItem){
        menuHtml += `
            <div class="menu-item">
                <div class="menu-item-inner">
                    <span class="menu-emoji">${menuItem.emoji}</span>
                    <div class="menu-copy">
                        <p class="menu-item-name">${menuItem.name}</p>
                        <p class="menu-item-ingredients">${menuItem.ingredients.join(', ')}</p>
                        <p class="menu-item-price">${menuItem.price}</p>
                    </div>
                    <button class="menu-item-btn" data-add="${menuItem.id}">+</button>
                </div>
            </div>
        `
    })    
    
    return menuHtml
}

function render(){
    menuItemsEl.innerHTML = getMenuHtml()
}

render()