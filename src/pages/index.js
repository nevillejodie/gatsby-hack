import React from "react"

const mouseImg =
"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3o7ugEEQUgtDkt9mxE3u6wKcHLbDwHE1y_KmDxKrbAcxQzu6j&usqp=CAU"

const pigletImg = "https://clipartmag.com/images/cute-pig-face-1.jpg"

const horseImg =
"https://lh3.googleusercontent.com/proxy/M5Z5MAF3CQLXTvdq_NCLEe7V8YmHi3MtQHSOIKIAzg_2eCNRBWYy8ejj5QdpWHWSUPEdKh6qhMXc7imv2AgUnHw"


const pastaAmount = 500; //in grams 
const noMealsPerWeek = 2;
const lengthOfQuarantineInWeeks = 3; //in weeks
const mealSize = { mouse: 57,
    piglet: 85,
    horse: 115 }

    function pastaPerc(animal){
        return Math.floor((pastaAmount / (noMealsPerWeek * mealSize[animal] * lengthOfQuarantineInWeeks)) * 100) + "%";
    }

export default () => {return <div>Hello world! 
<img src={mouseImg}/> 
<img src={pigletImg}/>
<img src={horseImg}/>{pastaPerc("mouse")}</div>}



// TO DO 
// a pasta counter 
// how much pasta IN GRAMS you have in a slider 
// how many meals of pasta you eat per week in a slider 
// 3 buttons: I eat a mouse, piglet, horse amount of pasta per serving
// calculates pasta amount
// const = length of the qurantine (time) 
// print how much of the qurantine you have pasta for in % 
// render a component with % of pasta 


// mouse = 57grams
// piglet = 85grams
// horse = 115grams 

// amount of pasta they have / (no of meals * size of portion in 1 week * length of quarantine) * 100 

// gives you percent 

