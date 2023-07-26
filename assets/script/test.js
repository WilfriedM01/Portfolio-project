let empty = {}; //empty object

let person = {
  FirstName: "Wilfried",
  LastName: "Muyisa",
};

console.log(person.FirstName + " " + person.LastName);
console.log(person["FirstName"] + " " + person["LastName"]);

for (const names in person) {
  console.log(names + ":" + person[names]);
}
