const fs = require('fs');

let itemList = {'items': []}

classes = {
    'type': ['pants', 'skirt', 'tshirt'],
    'size': ['large', 'small'],
    'color': ['blue', 'pink', 'yellow'],
    'sex': ['male', 'female']
};

for (let type of classes['type']){
    for (let size of classes['size']){
        for (let color of classes['color']){
            for (let sex of classes['sex']){
                itemList.items.push({
                    'type': type, 
                    'size': size,
                    'color': color,
                    'sex': sex,
                    'image': `/img/${color}_${type.slice(0, 1)}`
                });
            }
        }
    }
}

const itemListJSON = JSON.stringify(itemList, null, '\t');
fs.writeFileSync('items.json', itemListJSON);