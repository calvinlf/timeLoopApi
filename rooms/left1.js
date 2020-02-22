const button = require('../util/button')
const url = require('../setup').url

exports.basic = (user) => { return {
    html: `<div class="centered">
    <div class="text-center text-primary">
        <p></p>
        <p> You see more hallway in front of you. I appears that there is door blocking your way."
        </p>
        ${button.makeButton('Check Door','left1')}
        ${button.makeButton('Go Back','fun5')}
        <p class="spaced"></p>
    </div>
</div>`,
    script: button.createScript(url +'code?user=' + user, 'left1') +
        button.createScript(url +'branch?user=' + user, 'fun5')
}}