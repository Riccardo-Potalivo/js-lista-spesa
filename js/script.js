
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

const listEl = document.getElementById('list');
for (i = 0; i < list.length; i++)
{
    const listItemEl = document.createElement('li');
    listItemEl.innerHTML = list[i];
    listEl.appendChild(listItemEl);
}