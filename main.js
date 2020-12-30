'use strict';

// Fetch the items from the JSON file
function loaditems(){
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}

// Display the items Screen
function displayItems(items){
    const container = document.querySelector('.items');
    container.innerHTML = items.map(item => createHTMLElement(item)).join(''); // CHECK
}

function createHTMLElement(item){
    return `<li class="item">
                <img src="${item.imgPath}" alt="${item.type}" class="thumbnail">
                <span class="item_descriptions">${item.sex}, ${item.size}</span>
            </li>`;
}

// Button click events
function onButtonClick(event, items){
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;

    const filtered = items.filter(item => item[key] === value);
    
    displayItems(filtered);
}

function setEventListeners(items){
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');

    logo.addEventListener('click', () => displayItems(items));
    buttons.addEventListener('click', event => onButtonClick(event, items));
}

// main
loaditems()
    .then(items => {
        displayItems(items);
        setEventListeners(items);
    })
    .catch(console.log);