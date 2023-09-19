const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

// Print values of person using Object.keys

const keys = Object.keys(person);

// keys.forEach(function (key) {
//   const value = person[key];
//   console.log(`${key}: ${value}`);
// });

for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  const value = person[key];
  console.log(`${key}: ${value}`);
}
