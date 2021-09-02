// String
let stringVariable = 'Roger Rocks'

// Int / number
let numberVariable = 8

// Boolean
let booleanVariable = true



function getUserName() {
    let userName = prompt('Please Enter your Name');

    if(userName.toLowerCase() == 'roger') {
        document.write('Welcome Dark Lord ' + userName);
    }
    else {
        document.write('<h2>' + userName + '</h2>')
    }
    
}

function dealinAbsolutes() {
    let userAnswer = prompt('Do you deal in absolutes?');

    if(userAnswer.toLowerCase() == 'no') {
        let url = "https://starwarsblog.starwars.com/wp-content/uploads/2019/04/claudia-master-tall-v2.jpg"
        document.write('<img src="' + url + '">')
    }
    else {
        let url = "https://cdn.vox-cdn.com/thumbor/4NeV5hN3hsEwOLwgRWUmNeQwaVg=/0x0:1280x720/920x613/filters:focal(538x258:742x462):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67764969/raypark.0.jpg"
        document.write('<img src="' + url + '">')
    }
}

function lightsaberColor(){
    userAnswer = prompt('Blue or Red?');

if(userAnswer.toLowerCase() == 'blue') {
    let url = "https://mcdn.wallpapersafari.com/medium/10/39/TwfsOy.jpg"
    document.write('<img src="' + url + '">')
}
else {
    let url = "https://tvovermind.com/wp-content/uploads/2018/09/like-blood-from-a-stone-750x422.jpg"
    document.write('<img src="' + url + '">')
}

}


function userGuessingGame(){
    let correctAnswer = 10
    let wannaPlay = prompt('Do you want to rate Roger as a Coding teacher? (Yes or No)');
    console.log(wannaPlay)
    while (wannaPlay.toLowerCase() == 'yes'){
        let numberOfAttempts = 3;
        for (let i = 1; i <= numberOfAttempts; i++){
            let userAnswer = prompt("Rate Roger's teaching by picking a number between 1 and 10");
            console.log(i)
            if (userAnswer == correctAnswer){
                alert ('You got it right! Roger would be proud!');
                break;
            }
            else {
                if(userAnswer < correctAnswer){
                    alert('Your answer is too low. Try Again! You have ' + (numberOfAttempts -i) + ' attempts left');
                } else if (userAnswer > correctAnswer){
                    alert('Your answer is too high. Try Again! You have ' + (numberOfAttempts -i) + ' attempts left');
                }
            }
        }
        wannaPlay = prompt('Do you want to rate Roger as a Coding teacher? (Yes or No)');
    }
}

