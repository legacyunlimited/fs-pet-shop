let fs = require("fs");
let option = process.argv[2];
let petIndex = process.argv[3];
// if (petIndex) console.log(petIndex);

switch (option) {
  case "read":
    fs.readFile("pets.json", "utf-8", (error, data) => {
      let pets = JSON.parse(data);
      if (petIndex > pets.length - 1) console.error("pet index out of range");
      else if (petIndex) console.log(pets[petIndex]);
      else console.log(pets);
    });
    break;
  case "create":
    fs.readFile("pets.json", "utf-8", (error, data) => {
      let pets = JSON.parse(data);
      let age = parseInt(process.argv[3]);
      let kind = process.argv[4];
      let name = process.argv[5];

      if (age && kind && name) {
        let newPet = { age: age, kind: kind, name: name };
        console.log(newPet);
      } else {
        console.log("Usage: node pets.js create AGE KIND NAME");
      }
    });
    break;
  case "update":
    fs.readFile("pets.json", "utf-8", (error, data) => {
      let age = parseInt(process.argv[3]);

    console.log("you selected update");
    break;
  case "destroy":
    console.log("you selected destroy");
    break;
  default:
    console.error("Usage: node pets.js [read | create | update | destroy]");
    process.exit[1];
}
