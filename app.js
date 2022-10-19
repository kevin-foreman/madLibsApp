// Start with a variable for the original story with Adjectives, Nouns, and Protagonist name as place-holders for user input
// Captured userInputs can be used to replace words in the original story with template literals
// ${userInputs[x]} .. where X is the index of the user input
// Increment X by 1 for each new word/phrase

const userInputs = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6", "Question 7", "Question 8", "Question 9", "Question 10", "Question 11", "Question 12"];

const originalStory = `Pizza was invented by a 'adjective' ${userInputs[0]} 'nationality' ${userInputs[1]} chef named 'person' ${userInputs[2]}.
To make pizza, you need to take a lump of 'noun' ${userInputs[3]} and make a thin, round 'adjective' ${userInputs[4]} 'noun' ${userInputs[5]}.
Then you cover it with 'adjective' ${userInputs[6]} sauce, 'adjective' ${userInputs[7]} cheese, and fresh chopped 'plural noun' ${userInputs[8]}. 
Next you have to bake it in a very hot 'noun' ${userInputs[9]}. When it is done, cut it into 'number' ${userInputs[10]} 'shapes' ${userInputs[11]}.
Some kids like 'food' ${userInputs[12]} pizza the best, but my favorite is the 'food' ${userInputs[13]} pizza.
If I could, I would eat pizza 'number' ${userInputs[13]} times a day!`

const numberOfQuestions = 12;


console.log(originalStory);




/*
Question 1: adjective               Question 8: adjective
Question 2: nationality             Question 9: plural noun
Question 3: person                  Question 10: noun
Question 4: noun                    Question 11: number
Question 5: adjective               Question 12: shapes
Question 6: noun                    Question 13: food
Question 7: adjective
*/
// const originalStory = "";