let userAnswer = prompt('Do you deal in absolutes?');

if(userAnswer.toLowerCase() == 'no') {
    let url = "https://starwarsblog.starwars.com/wp-content/uploads/2019/04/claudia-master-tall-v2.jpg"
    document.write('<img src="' + url + '">')
}
else {
    let url = "https://cdn.vox-cdn.com/thumbor/4NeV5hN3hsEwOLwgRWUmNeQwaVg=/0x0:1280x720/920x613/filters:focal(538x258:742x462):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67764969/raypark.0.jpg"
    document.write('<img src="' + url + '">')
}