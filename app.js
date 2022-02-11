
const choice =document.querySelectorAll('.choice');
const choiceBlock = document.querySelector('.choice-block');
const secondScreen = document.querySelector('.second-screen');
const houseBlank = document.querySelector('#house-blank');
let randomNumber;
let houseChoice ;
let userChoice;
const playAgain = document.querySelector(".play-again");
let whatToDisplayElement;
let counter = 0;

const scorelabel = document.querySelector('.score');
scorelabel.innerHTML = counter;

choice.forEach(item => {
    item.addEventListener('click',() => {
        
        userChoice = item.dataset.attribute;
        choiceBlock.style.display = "none";
        secondScreen.style.display="flex";
        houseBlank.style.display="flex";
        
        document.querySelector(`#user-${userChoice}`).style.display="flex";
        

        randomNumber = Math.floor(Math.random()*3);
        houseChoice = ["paper", "hand", "scissor"][randomNumber];
                
        setTimeout(()=>{
            houseBlank.style.display="none";
            document.querySelector(`#house-${houseChoice}`).style.display="flex";
            console.log(document.querySelector(`#house-${userChoice}`).style.display);
            resultText(userChoice,houseChoice);
            playAgain.style.display = "block";
        }, 500);

        
    });
})        
        


function resultText (user,house){

    document.querySelector(".result-text").style.display = "flex";
    
    if (user === house) {
        document.querySelector(".result-text").innerHTML = "IT'S DRAW";
        return
    }

    if ((user === "paper" && house === "hand") || 
        (user==="hand" && house ==="scissor") || 
        (user==="scissor" && house === "paper" )) {
            document.querySelector(".result-text").innerHTML = "YOU WIN";
            counter = counter + 1;
            scorelabel.innerHTML = counter;
            document.querySelector('.circle-bg').style.display='flex';
            return;
    }

    document.querySelector(".result-text").innerHTML = "YOU LOSE";
    counter = counter - 1;
    scorelabel.innerHTML = counter;
    document.querySelector('.circle-bg2').style.display='flex'
    
}

playAgain.addEventListener('click',()=> {
    choiceBlock.style.display = "grid";
    secondScreen.style.display="none";
    houseBlank.style.display="none";
    document.querySelector(".result-text").style.display = "none";
    document.querySelector(`#user-${userChoice}`).style.display="none";
    document.querySelector(`#house-${houseChoice}`).style.display="none";
    playAgain.style.display = "none";
    document.querySelector('.circle-bg').style.display='none';
    document.querySelector('.circle-bg2').style.display='none';
})

document.querySelector(".rules").addEventListener('click',()=>{
    document.querySelector('#ruleScreen').style.display="flex";
})

document.querySelector('#closeBtn').addEventListener('click',()=>{
    document.querySelector('#ruleScreen').style.display="none";
})



   