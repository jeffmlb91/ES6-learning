
const myObject = {
    name: "Frederick",
};
console.log(myObject);

// Object Litteral
const newObject = new Object();
newObject['1'] = "Amanda"; // defining the key [] and assigning a value 
newObject['2'] = 3;
newObject['0'] = "Hello"
newObject['-1'] = "Hey"
//console.log(newObject); // Return { '0': 'Hello', '1': 'Amanda', '2': 3, '-1': 'Hey' } Taking Key Value pairs

const thirdObject = {
    1: "John",
    2: "Bob",
    3: "Amy",
    4: "Eric"
}

thirdObject['5'] = "Paul";
thirdObject['1'] = "Sebastien"; // Key 1 value has been replaced by new value;
thirdObject['New Key'] = "Private Key";
console.log(thirdObject); 
