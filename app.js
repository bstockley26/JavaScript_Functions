console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    
      
        if (count>0){
            let num= count %2;
            if(num >0){
                console.log(`${count} is odd`)
            }
            else if (num ===0){
                console.log(`${count} is even`)
            }
        }
        else if (count<0){
            console.log(`${count} is a negative number`)
        }
}
 var number =prompt("Give us a number!");
printOdds(number);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
let name= prompt("What is your name?")
let numAge= prompt("What is your age?")

checkAge(name,numAge)
function checkAge(userName, age){
    if (!userName|| !age ){
        console.log("Please enter name and age!")
    }
    else {
        if (age<16){
        console.log(`Sorry ${userName}, you need to wait until you're 16!`)
        }
        else if (age >=17){
        console.log(`Congrats ${userName} you are able to drive!`)
        }
    }

}

// function whichQuandrant(coordx,coordy){
//     if (coordx===0 && coordy ===0){
//         console.log(`(${coordx},${coordy})is at the origin`)
//     }
//     else if (coordx ===0){
//         console.log(`(${coordx},${coordy})is on the y axis`)
//     }
//     else if (coordy ===0){
//         console.log(`(${coordx},${coordy}) is on the x axis`)
//     }
//     else if (coordx >0 && coordy >0){
//         console.log (`(${coordx},${coordy}) is in Quadrant 1`)
//     }
//     else if (coordx <0 && coordy >0){
//         console.log(`(${coordx},${coordy}) is in Quadrant 2`)
       
//     }
//     else if (coordx>0 && coordy <0){
//         console.log(`(${coordx},${coordy})is in Quadrant 4`)
//     }
//     else if (coordx <0 && coordy <0){
//         console.log(`(${coordx},${coordy}) is in Quadrant 3`)
        
//     }
// }
// let newCoordX= prompt("What is your X coordinate?")
// let newCoordY= prompt("What is your Y coordinate?")
// whichQuandrant(newCoordX,newCoordY)
