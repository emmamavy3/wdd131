// Task 1
//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`; //the html string made from step
}
const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
// document.querySelector("#myList").innerHTML = stepsHtml.join(""); // set the innerHTML
// Task 2
const grades = ["A", "B", "A"];
function convertGrade(grade) {
  let point = 0;
  if (grade === "A") {
    point = 4;
  } else if (grade === "B") {
    point = 3;
  }
  return point;
}
const gpaPoints = grades.map(convertGrade);
console.log("gpa points: " + gpaPoints);
// Task 3
const pointTotal = gpaPoints.reduce((total, item) => {
  return total + item;
}, 0);
const GPA = pointTotal / gpaPoints.length;
console.log(GPA.toFixed(1));
// Task 4
const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];
const fruitsSix = fruits.filter(function (fruit) {
  return fruit.length < 6;
});
console.log(fruitsSix);
// Task 5
const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
let index = numbers.indexOf(luckyNumber);
console.log(index);
