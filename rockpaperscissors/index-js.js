const rockid= document.getElementById("rock");
const paperid= document.getElementById("paper");
const scissorsid=document.getElementById("scissors");
var userScoreSpan= document.getElementById("user-score");
var compScoreSpan= document.getElementById("comp-score");
var scoreBoard= document.getElementById("mainboard");
var userdiv= document.getElementsByClassName("user-img");
var compdiv= document.getElementsByClassName("comp-img");
let userScore=0; let compScore=0;
var head= document.querySelector("header");
var btn= document.querySelector("button");


rockid.addEventListener("click",()=>{

 /*   document.getElementById("h1-tag").classList.add("hide-tag");
  setTimeout(function(){
    document.getElementById("h1-tag").classList.remove("hide-tag");
  },2000); 
  */
  
    updateScore("r");
})

paperid.addEventListener("click",()=>{
    updateScore("p");
})

scissorsid.addEventListener("click",()=>{
    updateScore("s");
})

function updateScore(choice){
    var a=["r","p","s"];
    var compChoice= a[Math.floor(Math.random()*3)];
    //  setInterval(
    //     changeptag(choice, compChoice)
    //  ,2000);
     //scoreBoard.innerText='Lets play Rock Paper Scissors';
    var combination=choice+compChoice;
var usc=0, csc=0;
    switch(combination){
        case "rs":
        case "sp":
        case "pr":
            usc++;
            break;
            
        case "sr":
        case "ps":
        case "rp":
            csc++;
            break;
    }

    // console.log("Your choice  "+choice);
    // console.log("Computer choice  "+compChoice);

    changeScoreCard(usc, csc);

}

function changeScoreCard(uScore, cScore){
    if(uScore>cScore)
    {   
        declareWinner("u");
        userScore++;
        head.classList.add("userwon");
            userdiv[0].classList.add("winner");
            setTimeout(function(){
                userdiv[0].classList.remove("winner");
                head.classList.remove("userwon");
            },500)
    }
    else if(cScore>uScore){
        declareWinner("c");
        compScore++;
        head.classList.add("compwon");
        compdiv[0].classList.add("winner");
        setTimeout(() => {
            compdiv[0].classList.remove("winner");
            head.classList.remove("compwon");
        }, 500);
    }
    else{
        declareWinner("d");
    }
    
    userScoreSpan.innerText=userScore;
    compScoreSpan.innerText=compScore;
    // console.log(uScore);
    // console.log(cScore);
}


function declareWinner(choice){

    var contentoftext='Lets play Rock Paper Scissors';
    if(choice==="u"){
        scoreBoard.innerText='You Win';
    setTimeout(() => {
       scoreBoard.innerText=contentoftext;
    }, 500);
   
    }
    else if(choice==="c"){
        scoreBoard.innerText='You Lost this round';
         setTimeout(() => {
            scoreBoard.innerText=contentoftext;
        }, 500);
        
    }
    else{
        scoreBoard.innerText='Its a draw';
         setTimeout(() => {
            scoreBoard.innerText=contentoftext;
        }, 500);
        
    }

  
}

btn.addEventListener("click",()=>{
userScore=0; compScore=0;

    userScoreSpan.innerText=userScore;
    compScoreSpan.innerText=compScore;
})