

let box1 = {

    country: "Nigeria",
    population: 300000,
    temp: 28,
    currency: "naira"

}

  let box2 = {
    f: "Ghana",
    population: 300000,
    temp: 28,
    currency: "cidis"
}

let box3 = { 
    country: "cotonu ",
    population: 90000,
    temp: 29,
    currency: "france"
}
let user4 = {
    country: "Cameroon ",
    population: 90000,
    temp: 29,
    currency: "cidis"
}
let user5 = {
    country: "Niger ",
    population: 90000,
    temp: 28,
    currency: "$"
}
let user6 = {
    country: "Rewanda ",
    population: 90000,
    temp: 24,
    currency: "rad"
}
let user7 = {
    country: "Egypt ",
    population: 90000,
    temp: 22,
    currency: "$"
}
let user8 = {
    country: "Madagascar",
    population: 90000,
    temp: 18,
    currency: "$"
}
let user9 = {
    country: "zamziba ",
    population: 90000,
    temp: 10,
    currency: "$"
}

let box = [[null,box1,box2,box3], [user4,user5,user6,null],[user7, null, user8, user9]]

let sum = 0;
for (let index = 0; index < box.length; index++) {
    for (let index2 = 0; index2 < box[index].length; index2++) {
        if(box [index][index2] != null) sum += box[index][index2]["population"];
        
    }

    
}
console.log("The sum of the population is :" + sum)