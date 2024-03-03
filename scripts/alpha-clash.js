function play(){
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');

    const playGroundSection = document.getElementById('play-ground');
    playGroundSection.classList.remove('hidden');
    // console.log(playGroundSection.classList);
    continueGame();
}

function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    // console.log('Player Pressed', playerPressed)
    // console.log(event.key);
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // expected press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    console.log(expectedAlphabet, playerPressed);

    // checked matched or, not
    if(playerPressed === expectedAlphabet){
        console.log('You got a point.');
        // update score
        // 1. Get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);

        // 2. Increase the score by 1
        const newScore = currentScore + 1;

        // 3. Show the new score
        currentScoreElement.innerText = newScore;

        removeBackgroundColor(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('You Missed, You lost a life!');
        // 1. get the current life
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        console.log(currentLife);

        // reduce the life count 
        const newLife = currentLife - 1;

        // show the new life
        currentLifeElement.innerText = newLife;

        if(newLife === 0){
          gameOver();
        }
    }
}
// capture keyboard press
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame(){
    const alphabet = getARandomAlphabet();
    // console.log('Your random alphabet', alphabet);
    // show current alphabet
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    addBackgroundColor(alphabet);
}
 
// set alphabet background color

function addBackgroundColor(elementId){
   const element = document.getElementById(elementId);
   element.classList.add('bg-orange-400');
}

// Remove alphabet background color
function removeBackgroundColor(elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('bg-orange-400');
}

function getARandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
  

    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    return alphabet;
}

function gameOver(){
    // const homeSection = document.getElementById('home-screen');
    // homeSection.classList.add('hidden');

    const playGroundSection = document.getElementById('play-ground');
    playGroundSection.classList.add('hidden');

    const scoreSection = document.getElementById('final-score');
    scoreSection.classList.remove('hidden');

    // const lastScore = document.getElementById('current-score')

    // // const lastScoreElement = document.getElementById('last-score');
    // // lastScoreElement.innerText = lastScore;
    // lastScore = newScore;

      // Get the current score
      const currentScoreElement = document.getElementById('current-score');
      const currentScore = currentScoreElement.innerText;
  
      // Set the last score to be equal to the current score
      const lastScoreElement = document.getElementById('last-score');
      lastScoreElement.innerText = currentScore;

    //   currentScoreElement.innerText = '0';

}


function playAgain() {
    // Hide the final score section
    const scoreSection = document.getElementById('final-score');
    scoreSection.classList.add('hidden');

    // Show the play ground section
    const playGroundSection = document.getElementById('play-ground');
    playGroundSection.classList.remove('hidden');

    // Reset the current score to 0
    // const currentScoreElement = document.getElementById('current-score');
    // currentScoreElement.innerText = '0';
       // Set the last score to be equal to the current score
    const lastScoreElement = document.getElementById('last-score');
    lastScoreElement.innerText = currentScore;

    // Reset the life count to its initial value (e.g., 5)
    const currentLifeElement = document.getElementById('current-life');
    currentLifeElement.innerText = '5'; // Assuming the initial life count is 5

    // Remove any background color from the previous alphabet
    removeBackgroundColor(expectedAlphabet);

    // Start the game again
    continueGame();
}

// function handleGameFinish(event) {
//     if (event.key === 'Escape') {
//         gameOver();
//     }
// }

// document.addEventListener('keyup', handleGameFinish);


// function playAgain(){
//     const scoreSection = document.getElementById('final-score');
//     scoreSection.classList.add('hidden');
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
//     removeBackgroundColor(expectedAlphabet);
//     play();
    
//     // removeBackgroundColor(expectedAlphabet);
//     // continueGame();
// }