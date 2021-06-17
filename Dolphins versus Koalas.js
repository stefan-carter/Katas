/*Coding Challange 3

1. Calculate the average score for each team, using the test data below.

2. Compare the team's average scores to determine the winner of the competition, print the winner to the cosole. Don't forgot that there could be a draw, so test for that as well.


TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110.

*/

const dolphinsScore = (96 + 108 + 89) / 3
console.log(dolphinsScore)

const koalasScore = (88 + 91 + 110) / 3
console.log(koalasScore)

if (koalasScore === dolphinsScore) {
    console.log("It's a draw!");
} else if (koalasScore > dolphinsScore) {
    console.log('Koalas win!')
} else (dolphinsScore > koalasScore); {
    console.log("Dolphins win!")
}


if (koalasScore === dolphinsScore) {
    console.log("It's a draw!");
} else if (koalasScore > dolphinsScore) {
    console.log('Koalas win!')
} else if (dolphinsScore > koalasScore); {
    console.log("Dolphins win!")