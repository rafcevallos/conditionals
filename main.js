const lastName = "Cevallos";
if (lastName.length >= 7) {
    console.log("I can't pronounce this last name.");

} else {
    console.log("The last name " + lastName);
}

// Friday, April 6.  Iterate through the following array of objects and if the gender is "F", console log the name.


const students = [
    {
      name: "Cashew",
      gender: "F"
    },
    {
      name: "Rachael",
      gender: "F"
    },
    {
      name: "Joshua",
      gender: "M"
    },
    {
      name: "Daniel",
      gender: "M"
    },
    {
      name: "Jacob",
      gender: "M"
    },
    {
      name: "Paul",
      gender: "M"
    },
    {
      name: "Meghan",
      gender: "F"
    },
    {
      name: "Hayley",
      gender: "F"
    },
    {
      name: "Deanna",
      gender: "F"
    },
    {
      name: "Kyle",
      gender: "M"
    }
  ]
  
  for (let i = 0; i < students.length; i++) {
      if(students[i].gender === "F") {
          console.log("The name is ", students[i].name);
      }
  }