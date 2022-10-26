// Start with a variable for the original story with Adjectives, Nouns, and Protagonist name as place-holders for user input
// Captured userInputs can be used to replace words in the original story with template literals
// ${userInputs[x]} .. where X is the index of the user input
// Increment X by 1 for each new word/phrase

let numberOfQuestions = 15;

let questionCounter = 0

let questionArray = [
    "Enter an adjective",
    "Enter a nationality",
    "Enter a person",
    "Enter a noun",
    "Enter and adjective",
    "Enter a noun",
    "Enter an adjective",
    "Enter an adjective",
    "Enter a plural noun",
    "Enter a noun",
    "Enter a number",
    "Enter a plural shape",
    "Enter a food",
    "Enter a food",
    "Enter a number"
];

for (let i = numberOfQuestions; i >= 0; i--) {
    // console.log(i);
    prompt(questionArray[questionCounter] + ` .. (${numberOfQuestions} questions left)`);
    questionCounter++;
};

let userInputs = [];

let originalStory = `Pizza was invented by a ${userInputs[0]} ${userInputs[1]} chef named ${userInputs[2]}.
To make pizza, you need to take a lump of ${userInputs[3]} and make a thin, round ${userInputs[4]} ${userInputs[5]}.
Then you cover it with ${userInputs[6]} sauce, ${userInputs[7]} cheese, and fresh chopped ${userInputs[8]}. 
Next you have to bake it in a very hot ${userInputs[9]}. When it is done, cut it into ${userInputs[10]} ${userInputs[11]}.
Some kids like ${userInputs[12]} pizza the best, but my favorite is the ${userInputs[13]} pizza.
If I could, I would eat pizza ${userInputs[14]} times a day!`

console.log(originalStory);




/* Reference chart for question types
Question 1: adjective               Question 8: adjective
Question 2: nationality             Question 9: plural noun
Question 3: person                  Question 10: noun
Question 4: noun                    Question 11: number
Question 5: adjective               Question 12: shapes
Question 6: noun                    Question 13: food
Question 7: adjective               Question 14: food
                                    Question 15: number
*/
// let originalStory = "";