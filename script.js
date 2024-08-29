const moves = document.getElementById("moves-count");
const timevalue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".controls-container"); 
let cards;
let interval;
let firstcard = false;
let secondcard = false;

const items = [
    { name: "bee", image: "./bee.png" },
    { name: "crocodile", image: "./crocodile.jpeg" },
    { name: "macaw", image: "./macaw.jpeg" },
    { name: "gorilla", image: "./gorilla.jpeg" },
    { name: "tiger", image: "./tiger.png" },
    { name: "monkey", image: "./monkey.jpeg" },
    { name: "chameleon", image: "./chameleon.jpeg" },
    { name: "piranha", image: "./piranha.jpeg" },
    { name: "anaconda", image: "./anaconda.jpeg" },
    { name: "sloth", image: "./sloth.png" },
    { name: "cockatoo", image: "./cockatoo.jpeg" },
    { name: "toucan", image: "./toucan.jpeg" }
];

let seconds = 0,
    minutes = 0;

let movescount = 0,
    wincount = 0;

const timeGenerator = () => {
    seconds += 1;

    if (seconds >= 60) {
        minutes += 1;
        seconds = 0;
    }
 
    let secondsvalue = seconds < 10 ? `0${seconds}` : seconds;
    let minutesvalue = minutes < 10 ? `0${minutes}` : minutes;
    timevalue.innerHTML = `<span>Time :</span> ${minutesvalue}:${secondsvalue}`;
};


const movesCounter = () => {
    movescount += 1;
    moves.innerHTML = `<span>Moves:</span> ${movescount}`;
};


const GenerateRandom = (size = 4) => {
  
    let tempArray = [...items];
    
    let cardvalues = [];
    
    size = (size * size) / 2;
    
    for (let i = 0; i < size; i++) {
        const randomIndex = Math.floor(Math.random() * tempArray.length);
        cardvalues.push(tempArray[randomIndex]);
        
        tempArray.splice(randomIndex, 1);
    }
    return cardvalues;
};

const matrixGenerator = (cardvalues, size = 4) => {
    gameContainer.innerHTML = "";
    cardvalues = [...cardvalues, ...cardvalues];
    
    cardvalues.sort(() => Math.random() - 0.5);
    for (let i = 0; i < size * size; i++) {
       
        gameContainer.innerHTML += `
        <div class="card-container" data-card-value="${cardvalues[i].name}">
            <div class="card-before">?</div>
            <div class="card-after">
                <img src="${cardvalues[i].image}" class="image"/>
            </div>
        </div>
        `;
    }
  
    gameContainer.style.gridTemplateColumns = `repeat(${size}, auto)`;


    cards = document.querySelectorAll(".card-container");
    cards.forEach((card) => {
        card.addEventListener("click", () => {
           
            if (!card.classList.contains("matched")) {
               
                card.classList.add("flipped");
                
                if (!firstcard) {
                 
                    firstcard = card;
                   
                    firstcardvalue = card.getAttribute("data-card-value");
                } else {
                   
                    movesCounter();
                    
                    secondcard = card;
                    let secondCardValue = card.getAttribute("data-card-value");
                    if (firstcardvalue == secondCardValue) {
                        
                        firstcard.classList.add("matched");
                        secondcard.classList.add("matched");
                      
                        firstcard = false;
                        
                        wincount += 1;
                      
                        if (wincount == Math.floor(cardvalues.length / 2)) {
                            result.innerHTML = `<h2>You won</h2>
                            <h4>Moves: ${movescount}</h4>`;
                            stopGame();
                        }
                    } else {
                       
                        let [tempFirst, tempSecond] = [firstcard, secondcard];
                        firstcard = false;
                        secondcard = false;
                        setTimeout(() => {
                            tempFirst.classList.remove("flipped");
                            tempSecond.classList.remove("flipped");
                        }, 900);
                    }
                }
            }
        });
    });
};

// Start game
startButton.addEventListener("click", () => {
    movescount = 0;
    seconds = 0;
    minutes = 0; 
  
    controls.classList.add("hide");
    stopButton.classList.remove("hide");
    startButton.classList.add("hide");
 
    interval = setInterval(timeGenerator, 1000);
  
    moves.innerHTML = `<span>Moves:</span> ${movescount}`;
    initializer();
});


stopButton.addEventListener("click", () => {
    stopGame();
});

const stopGame = () => {
    controls.classList.remove("hide");
    stopButton.classList.add("hide");
    startButton.classList.remove("hide");
    clearInterval(interval);
};


const initializer = () => {
    result.innerText = ""; 
    wincount = 0;
    let cardvalues = GenerateRandom();
    console.log(cardvalues);
    matrixGenerator(cardvalues);
};
