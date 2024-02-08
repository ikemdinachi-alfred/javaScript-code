// Question 1
function studentScore(scores){
    const newScore = []
    for (let i = 0; i <scores.length ; i++) {
        if (scores[i] >= 70)
            newScore.push(scores[i])
    }
    return newScore;
}

const scores = [20,40,70,90,78,89,90,68,82]
console.log(studentScore(scores))

// Question 2
function examScore(examGrades){
    const addedExamScore = []
    for (let i = 0; i < examGrades.length; i++) {
    addedExamScore.push(examGrades[i] +5)

    }
    return addedExamScore
}
const score = [85,92,78,88,95]
//console.log(examScore(score))

// Question 3
function square(number){
    const square = []
    for (let i = 0; i < number.length; i++) {
        square.push(number[i] * number[i])
    }
    return square
}
const squares = [2,4,6,8,10]
console.log(square(squares))

// Question 4

const timing = ["9:00AM","11:00AM","1:00pPM","3:00PM","5:0PM"]
function studentPlanningSchedule(timeTable){
    return timeTable.includes("PM")
}
const PmTiming = timing.filter(studentPlanningSchedule)
//console.log(PmTiming)

// Question 5

const david =
    {   "groceries": 150,
        "dinning out": 100,
        "transportation": 50,
        "entertainment": 80,
    }
let sum = 0;
for (const davidKey in david) {
    sum += david[davidKey];
}
    console.log("The total sum of David expenses: "+sum)



