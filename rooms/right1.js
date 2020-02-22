const button = require('../util/button')
const url = require('../setup').url

exports.basic = (user) => { return {
    html: `<div class="centered"><div class="text-center text-primary">
        <p></p>
        <img src="img/space.jpg" class="w-50" alt="space" class="rounded">
        <p></p>
        <p> As you walk down the corridor, you see a small porthole. As you peer through it you see space and in the distance--earth. It is like nothing
        you have ever seen you are sure. It dawns on you that going home, wherever that may be, might be incredibly difficult.
        </p>
        ${button.makeButton('Go Foward','fun4')}
        ${button.makeButton('Go Back','fun5')}
        <p class="spaced"></p>
    </div></div>`,
    script: button.createScript(url +'dead-end?user=' + user, 'fun4') +
        button.createScript(url +'branch?user=' + user, 'fun5')
}}
