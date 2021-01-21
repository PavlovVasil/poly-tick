let columnNames = {
    id: "Id",
    updated: "Updated",
    biographyUrl: "Biography",
    cantonName: "Canton",
    council: "Council",
    factionName: "Faction",
    firstName: "First Name",
    lastName: "Last Name",
    homepage: "Homepage",
    number: "Number",
    partyName: "Party"
}

const handleSort = colName => {
    if (gridState[colName].sortDirection !== null) {
        data = data.reverse();
        gridState[colName].sortDirection = gridState[colName].sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        data = data.sort((a, b) => {
            if (colName === 'id') {
                return a.id - b.id;
            } else {
                // those are strings, comaparing them is a bit different
                if(a[colName] < b[colName]) { return -1; }
                if(a[colName] > b[colName]) { return 1; }
                return 0;
            }
        })
        gridState[colName].sortDirection = 'asc';
    } 
    destroyGrid();
    createGrid(data);
}
const destroyGrid = () => {
    document.getElementById('councillors').innerHTML = '';
}

const createGrid = data => {

let table = document.getElementById('councillors');
const columnKeys = Object.keys(columnNames);

// create headers
let header = document.createElement('tr');
columnKeys.forEach(key => {
    let columnHeader = document.createElement('th');
    if(key === 'id' || key === 'lastName' || key === 'firstName'){
        columnHeader.classList.add('cursor-pointer')
        columnHeader.addEventListener('click', () => handleSort(key))
    }
    columnHeader.innerHTML = columnNames[key];
    header.appendChild(columnHeader);
});
table.appendChild(header);

// create all rows
data.forEach(councillorItem => {
    let row = document.createElement('tr');
columnKeys.forEach(key => {
    let cell = document.createElement('td');
    debugger
    if(key === 'biographyUrl'){
        cell.innerHTML = `<a href=${councillorItem[key]}> Link </a>`;
    }else if (key === 'homepage') {
        cell.innerHTML = `<a href=${councillorItem[key]}>${councillorItem[key]}</a>`;
    } else {
        cell.innerHTML = councillorItem[key];
    }
    row.appendChild(cell)
})
    table.appendChild(row)
})
}



