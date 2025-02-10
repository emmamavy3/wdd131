//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>` //the html string made from step
}
const stepsHtml = steps.map(listTemplate)// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = // set the innerHTML

