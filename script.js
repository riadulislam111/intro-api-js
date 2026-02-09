const person = {
    name: 'selim',
    fruit: 'dalim',
    friends: ["alim", "kolim", "lamim"],
    isRich: false,
    money: 34000
};

console.log(person, typeof person)

//JSON -> JS object with Notation
//JSON.stringify
//JSON.parse -> object

const personJSON = JSON.stringify(person);
console.log(personJSON, typeof personJSON);

const parseJSON = JSON.parse(personJSON);
console.log(parseJSON);