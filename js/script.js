
let list = [];
let item = '';

while(item !== 'stop')
{
    item = prompt('aggiungi alla lista')
    item = item.trim();

    if(item !== 'stop')
    {
        console.log(item);
        list.push(item);
    }

    console.log(item);
}

console.log(list);
