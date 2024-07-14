let tableContainer = document.getElementById('my-table');


let studentsTable = document.createElement('table');
tableContainer.append(studentsTable);

// let thead = document.createElement('thead');
// studentsTable.append(thead);
let thead = studentsTable.createTHead();

// let tableRow = document.createElement('tr');
// thead.append(tableRow);
let tableRow = thead.insertRow();


// let th1 = document.createElement('th');
// th1.innerText = 'Name';
// tableRow.append(th1);
// let th2 = document.createElement('th');
// th2.innerText = 'Age';
// tableRow.append(th2);
// let th3 = document.createElement('th');
// th3.innerText = 'City';
// tableRow.append(th3);
let theadingArray = ["Id", "Name", "Grade", "College", "City"];

for(let t of theadingArray){
    let th = document.createElement('th');
    th.innerText = t;
    tableRow.append(th);
}


// let tbody = document.createElement('tbody');
// studentsTable.append(tbody);
let tbody = studentsTable.createTBody();


function addRow(studentsDetail){
    let newRow = tbody.insertRow();

    for(let t of studentsDetail){
         let newCell = newRow.insertCell();
          newCell.innerText = t;
    }

}




// addRow(["1", "John", "A", "MIT", "Boston"]);
// addRow(["2", "Jane", "B", "Harvard", "Cambridge"]);
// addRow(["3", "Jack", "C", "Stanford", "Palo Alto"]);

let studentsArray = [
   {id: 1, name: "John", grade: "A", college: "MIT", city: "Boston"},
    {id: 2, name: "Jane", grade: "B", college: "Harvard", city: "Cambridge"},
    {id: 3, name: "Jack", grade: "C", college: "Stanford", city: "Palo Alto"},
    {id: 4, name: "Jill", grade: "D", college: "Yale", city: "New Haven"}
]


for(let data of studentsArray){
    addRow(Object.values(data)); // ["1", "John", "A", "MIT", "Boston"]
}


// let obj = {name: "John", age: 25, city: "Boston"};
// console.log(obj.keys()) // 