const NO_STRING = 'no';
const YES_STRING = 'yes';

function getUserName() {
    let userName = prompt('Please Enter your Name');

    let text;

    if (userName.toLowerCase() === 'roger') {
        text = `Welcome Dark Lord ${userName}`;
    } else {
        text = `<h2>${userName}</h2>`
    }

    writeContentToDocument(text)
}


function dealInAbsolutes() {
    let userAnswer = prompt('Do you deal in absolutes?');

    let url;
    let alt;

    if (userAnswer.toLowerCase() === NO_STRING) {
        url = "https://starwarsblog.starwars.com/wp-content/uploads/2019/04/claudia-master-tall-v2.jpg";
        alt = "Image of Jedi Claudia";
    } else {
        url = "https://cdn.vox-cdn.com/thumbor/4NeV5hN3hsEwOLwgRWUmNeQwaVg=/0x0:1280x720/920x613/filters:focal(538x258:742x462):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67764969/raypark.0.jpg";
        alt = "Image of Darth Maul";
    }

    writeImageToDocument(url, alt)
}


function lightsaberColor() {
    let userAnswer = prompt('Blue or Red?');

    let url, alt;

    if (userAnswer.toLowerCase() === 'blue') {
        url = "https://mcdn.wallpapersafari.com/medium/10/39/TwfsOy.jpg";
        alt = "Blue Lightsaber";
    } else {
        url = "https://tvovermind.com/wp-content/uploads/2018/09/like-blood-from-a-stone-750x422.jpg";
        alt = "Red Lightsaber";
    }

    writeImageToDocument(url, alt);
}

function writeImageToDocument(imgUrl, imgAlt) {
    let tag = `<img src="{imgUrl}" alt="{imgAlt}" />`;

    writeContentToDocument(tag);
}

function writeContentToDocument(content) {
    document.write(content);
}


function userGuessingGame() {
    let correctAnswer = 10
    let wannaPlay = prompt('Do you want to rate Roger as a Coding teacher? (Yes or No)');

    console.log(wannaPlay)

    while (wannaPlay.toLowerCase() === YES_STRING) {
        let numberOfAttempts = 3;

        for (let i = 1; i <= numberOfAttempts; i++) {
            let userAnswer = prompt("Rate Roger's teaching by picking a number between 1 and 10");
            let userValue = parseInt(userAnswer);
            if (userValue !== userValue) {
                alert('Invalid value, please try again!');
                i--;
                continue;
            }

            console.log(i)

            if (userValue === correctAnswer) {
                alert('You got it right! Roger would be proud!');
                break;
            } else if (userAnswer < correctAnswer) {
                alert('Your answer is too low. Try Again! You have ' + (numberOfAttempts - i) + ' attempts left');
            } else {
                alert('Your answer is too high. Try Again! You have ' + (numberOfAttempts - i) + ' attempts left');
            }
        }
    }
}

