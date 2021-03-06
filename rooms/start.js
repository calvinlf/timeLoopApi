const button = require('../util/button')
const url = require('../setup').url

exports.basic = (user) => {return {
    html: `<div class="centered">
            <div class="text-center text-primary">
                <p></p>
                <img src="img/corridor.jpg" class="w-50" alt="corridor" class="rounded">
                <p></p>
                <p> You find yourself in a a steel utilitarian corridor.</p>
                ${button.makeButton('Go Forward','fun1')}
                <p class="spaced"></p>
            </div>
        </div>`,
    script: button.createScript(url +'branch?user=' + user, 'fun1')
}}

exports.restart = (user) => { return {
    html: `<div class="centered">
    <div class="text-center text-primary">
        <p></p>
        <img src="img/corridor.jpg" class="w-50" alt="corridor" class="rounded">
        <p></p>
        <p> You suddenly come to. You are back in the corridor where you started. But how?? *kSHkkK* Suddenly a sharp static noise
            interrupts your thoughts. "What was that!?", you say. A flat, electronic voice says, *this is a test- you have been wiped to avoid information loss
            if you are captured- complete your mission and retrieve the device* You have no idea where the voice came from, but are determined to find out.
        </p>
        ${button.makeButton('Go Forward','fun1')}
        <p class="spaced"></p>
    </div>
</div>`,
    script: button.createScript(url +'branch?user=' + user, 'fun1')
}}

exports.counter = (user, times) => { return {
    html: `<div class="centered">
            <div class="text-center text-primary">
                <p></p>
                <img src="img/corridor.jpg" class="w-50" alt="corridor" class="rounded">
                <p></p>
                <p> You find yourself in a a steel utilitarian corridor. You have been here ${times} times</p>
                ${button.makeButton('Go Forward', 'fun1')}
                <p class="spaced"></p>
            </div>
        </div>`,
    script: button.createScript(url +'branch?user=' + user, 'fun1')
    }
}



