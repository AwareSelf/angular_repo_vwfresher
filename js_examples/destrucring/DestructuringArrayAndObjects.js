const arr = [1,2];

const [no1,no2] = arr;

console.log(no1);
console.log(no2);

const person = {
    myname:'namrata',
    myage:41
}

const {myname} = person;

console.log(myname);
//console.log(myage); --gives error


let func= ({age})=>{console.log(age)};
func({myname:'nisha',age:40});

//above is shortcut for below old way of writing code
func= (person)=>{console.log(person.age)};
func({myname:'nisha',age:40});

/* By destructuring, we simply pull out the age property and
store it in a variable/argument named age which we then
can use in the function body */

//using destructring while returning object and extracting particular properties
const func2 = ()=>{ 
                    return { myname:'nima',
                             myage:41, 
                             mygender:'female'
                            }; 
                   }

const {myage,mygender}  = func2();
console.log(myage+','+mygender);