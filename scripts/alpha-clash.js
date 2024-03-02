function play(){
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');

    const playGroundSection = document.getElementById('play-ground');
    playGroundSection.classList.remove('hidden');
    // console.log(playGroundSection.classList);
    continueGame();
}

function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet', alphabet);
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