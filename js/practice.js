const numbers = [10, 2, 8, 30, 70, 50, 4];

numbers.sort((a, b) => {
  return b - a;
});

const people = [
    { name: "Dannie" },
    { name: "Messi" },
    { name: "Alex" },
    { name: "Brian" }
];

console.log(people)

people.sort((a, b) => {
  return "Dannie".localeCompare("Brian");
});

console.log(people)