const student = [
    {id : 10, name: 'Runa laila'},
    {id : 20, name: 'Omar sunny'},
    {id : 30, name: 'Eliyas kobra'},
    {id : 40, name: 'Bapparaj'},
]


//manual way for practising
const output = [];
for(let i = 0 ; i < student.length ; i++){
    var names = student[i];
    output.push(names.name);
}
console.log(output);

//Now apply the smart way

const sName = student.map(s => s.name);
console.log(sName);

const sFirstName = student.map(s => s.name.split(' ')[0])
console.log(sFirstName);


const sId = student.map( s => s.id)
console.log(sId);

sSpecificId = student.filter(s => s.id>20)
console.log(sSpecificId);

sFind = student.find(s => s.id>30)
console.log(sFind);