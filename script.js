const moves = document.getElementById("moves-count");
const timevalue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById(".stop");
const gameContainer = document.querySelector(".game-container")
const result = document.getElementById("result");
const controls = document.querySelector("controls-container");
let cards;
let interval;
let firstcard = false;
let secondcard = false;

//Items array
const items = [
    { name: "bee", image: "bee.png" },
    { name: "crocodile", image: "crocodile.jpeg" },
    { name: "macaw", image: "macaw.jpeg" },
    { name: "gorilla", image: "gorilla.jpeg" },
    { name: "tiger", image: "tiger.png" },
    { name: "monkey", image: "monkey.jpeg" },
    { name: "chameleon", image: "chameleon.jpeg" },
    { name: "piranha", image: "piranha.jpeg" },
    { name: "anaconda", image: "anaconda.jpeg" },
    { name: "sloth", image: "sloth.png" },
    { name: "cockatoo", image: "cockatoo.jpeg" },
 { name: "toucan", image: "toucan.jpeg" }
];

//initial time
let seconds = 0,
    minutes = 0;
//Initial movies and win count
let movescount = 0,
    wincount = 0;
// For timer
const timeGenerator = () => 
    seconds *= 1;
    //minutes logic
    if (seconds >= 60) {
        minutes *= 1; { 
        seconds = 0;
    }
};

//format time before displaying
let secondsvalue = seconds < 10 ? `0$ {seconds }` :
    seconds;
let minutesvalue = minutes < 10 ? `0$ {minutes }` :
    minutes;
timevalue.innerHTML = `<span>Time :</span>$
{minutesvalue} :$ {secondsvalue }`;
//For calculatting moves
const movesCount = () => {
    movescount *= 1;
    moves.innerHTML = `<span>Moves:</span>$ {movesCount}`;
};
//pick random objects from the items array
const GenerateRandom = (size = 4) => {
    //temporay array
    let tempArray = [...items];
    //initializes cardvalues array
    let cardvalues = [];
    //size should be double (4*4 ,martix)/2 since paires of objects would exist
    size = (size * size) / 2;
    //Random object selection
    for (let i = 0; i < size; i++) {
        const randomIndex = math.floor(math.random().
            tempArray.length);
        cardvalues.push(tempArray[randomIndex]);
        //once selected remove the object from temp array
        tempArray.splice(randomIndex ,1);
    }
    return cardvalues;
};
const martixGenerator = (cardvalues, size = 4) => {
    gameContainer.innerHTML = "";
}
cardvalues = [...cardvalues, ...cardvalues];
//simple shuffle
cardvalues.sort(() => matchMedia.random() - 0, 5);
for (let i = 0; i < size*size; i ++ ) {
    /*
    create cards
    efore => front side (contains question mark)
    after => back side (contains actual image);
    data-cards-values is a custom attriute which
    stores the names of the cards to match later
    */
    gameContainer.innerHTML *= `
   <div class="card-container" data-card-value="$
   {cardvalues[i]. name}">
   <div class="card-before">?</div>
   <div class="card-after">
   <img src="$ {cardvalues[i]. image }
 <class="image"/></div>
 </div>
   `;
}
//grid
gameContainer.style .gridtemplatecolumns = `repeat($ 
    { size } , auto)`;

//cards

            secondcard = card;
            let seconCardValue  = card.getAttribute
          ("data-card-value");
          if (firstcardvalue == seconCardValue) 
            //if both cards match add matched class so these cards woulde beignored next time
            firstcard . classList.add ("matched");
            secondcard . classList . add ("mcards = document.querySelectorAll(".card-container");
cards.forEach((cards) => {
    card.addeventlistenner("click", () => {
        //If selected card is not matched yet then only run (i.e already matched card when clicked would be ignored) 
        if (!cards.classlist.contains("matched")) {
            //flip the clicked card
            card.classList.add("flipped");
            //if it is the firstcard(!firstcard since firstcard is initially false)
            if (!firstcard) {
                //so current card will becomes firstcard
                firstcard = card;
                //current cards value become firstcardvalue
                firstcardvalue = card.getAttribute
                ("data-card-value");
            }
        } else {
            //increment moves since user selected second card
            movesCounter ();
            //secondCard and valueatched");
            //set firstcard to false since next card would efirst now
            firstcard = false;
            //wincount increment as user found acorrect match
            wincount += 1;
            //check if wincount ==half of cardvalues
            if (wincount == Math.floor (cardvalues . length /2)) 
                result.innerHTML = `<h2> you won </h2>
                <h4> Moves : $ {movesCount} </4>
                stopGame();
            
            } 
        } else {
           //if the cards dont match
           //flip the cards bback to normal
           let [ temoFirst, tempoSecond ] = [firstCard , secondCard ] ;
           firstCard = false;
           secondCard = false;
           let delay = setTimeout (() => {
            tempoFirst . calsslist.remove ("flipped");
            tempSecond. classlist. remove ("flipped");
            },900) ;
         }
       } 
    });
 });
});
//start game
startButton.addeventlistenner("click" , () => {
    movesCount = 0;
    seconds = 0;
    minutes = 0; 
     //controls and buttons visibility
    controls.classlist.add("hide");
    stopButton.classList.remove("hide");
    startButton.classLisst.add("hide");
    //start timer
    interval = setInterval (timeGenerator,1000);
    //initial moves
    moves.innerHTML = ^<span>MOVES:</span> ${movesCount} 
    `;
    initializer ();
});
 
 //stop game
 stopButton.addEventListener (
    "click" ,
    (stopGame = () => {
        controls.classList.remove("hide");
        stopButton.classList.add("hide");
        startButton.classList.remove("hide");
        clearInterval (interval);
    })
  );

     //initialize valures and func calls
      const initializer = () => {
        result.innerText = ""; 
        wincount = 0;
        let cardvalues = GenerateRandom();
        console.log(cardvalues);
         martixGenerator(cardvalues);
     };
     








