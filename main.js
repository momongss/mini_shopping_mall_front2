'use strict';

// Fetch the items from the JSON file
function loaditems(){
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}

function displayItems(items){
    const container = document.querySelector('.items');
    
    container.innerHTML = items.map(item => createHTMLElement(item)).join('');
}

function createHTMLElement(item){
    return `<li class="item">
                <img src="${item.imgPath}" alt="${item.type}" class="thumbnail">
                <span class="item_descriptions">${item.sex}, ${item.size}</span>
            </li>`;
}

// main
loaditems()
    .then(items => {
        displayItems(items);
        // setEventListeners(items);
    })
    .catch(console.log);