// JavaScript class on 30/01/2024 by Chinedu Ugbo. 

// first class exercise

function addElementInPairsRespectively(number) {
    const result = [];
  
    for (let index = 0; index < number.length; index += 2) {
      const sum = number[index] + (number [index + 1]||0);
      result.push(sum);
    }
  
    return result;
  }
  
  
  const number = [4,5,6,7,8];
  const outputArray = addElementInPairsRespectively(number);
  console.log(outputArray); 
  
  


  function arr (){
  // declearative function  
  }

  let newArray = function (){
    //performing function
  }

  const myArr = () =>{
    // arrow function.. is like lambda it help us write simplier code 
  }

 

  // example of arrow function
  const myArray = (x,y) => {
    const sum = (x+y);
    console.log(sum);
  }
 
  

  console.log(u(9,2))

  // function as an argument is also called a call back method

  // example

  let birthYear = [2000,1972,1992,2007]
  let currentYear = 2024

  const getResultArray =(arr, number)=>{
    const result = [];

    for(let birthYear of birthYears){
        let value = number(birthYear)
        return result.push(value)
    }

    const calculateAge = (birthYear)=>{
        let age = currentYear - birthYear
        return age;
    }

  }

  let ages = getResultArray(birthYear,calculateAge)
  console.log(ages)


function questions(roles){
    switch (roles){
        case "Manager":
            return  function(roles){

            `Hi ${roles} what is the core value of the company `
            }
            break;
        case "Native" :
            return  `Hi  ${roles} what is your best programming Language ? `;        
            break;  
            case "elders" :
                return `Hi ${elders} Do you have a job ?`;
        default:
            break;
    }

}
let answer = questions("Manager")
console.log(answer);
console.log(answer(`Manager`));

//Assignment

var obj = [["x"]["x"]["0"]
           ["0"][" "]["x"] 
           ["x"]["0"]["0"]
]
 console.log(obj)



