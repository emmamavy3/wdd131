
import recipes from "./recipes.mjs";

console.log(recipes);

function getRandomIndex(maxNum)
{
    return Math.floor(Math.random() * maxNum);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}

console.log(getRandomListEntry(recipes));