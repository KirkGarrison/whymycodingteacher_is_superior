let userAnswer = prompt('Blue or Red?');

if(userAnswer.toLowerCase() == 'blue') {
    let url = "https://mcdn.wallpapersafari.com/medium/10/39/TwfsOy.jpg"
    document.write('<img src="' + url + '">')
}
else {
    let url = "https://tvovermind.com/wp-content/uploads/2018/09/like-blood-from-a-stone-750x422.jpg"
    document.write('<img src="' + url + '">')
}