/* object.defineProperty()
The Object.defineProperTy() method can also be used to add Getter and setters:
A counter Example
**/
// define object
const obj = {counter: 0}
Object.defineProperty(obj,"reset",{
    get: function (){
        this.counter = 0;
    }
});
Object.defineProperty(obj,"increment",{
   get: function () {
       this.counter++;
   }
});
Object.defineProperty(obj,"decrement",{
    get: function (){
        this.counter--
    }
})
Object.defineProperty(obj,"add",
    {
        set: function (value){
            this.counter+=value;
        }
    })
Object.defineProperty(obj,"subtract",
    {
        set: function (value){
            this.counter-=value;
        }
    });


// play with the counter:

obj.add =5;
obj.increment;
obj.subtract;


// constructor
function person(first,last,age,eye){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColour = eye;
}

const melody = new person("joy","Doe",50,"white")
const qudus = new person("qudus","Adeshino",25,"blue")

console.log(melody)
console.log(qudus)
console.log(melody.firstName)