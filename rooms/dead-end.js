const button = require('../util/button')
const url = require('../setup').url

exports.basic = (user) => { return {
    html: `<div class="centered">
    <div class="text-center text-primary">
        <p></p>
        <img src="img/attack.jpg" class="w-50" alt="corridor" class="rounded">
        <p></p>
        <p> As you turn a corner you see a guard in dark clothes. Before you can act he pulls out a small pistol. You hear
            no bang--only a click--as he shoots you. It hits you painfully in the chest. You slowly feel you life fading away as you are dragged
            down a corridor. You hear the guard mutter, "5-4-3-7". As he pulls you through the door you feel your life slipping away...
        </p>
        ${button.makeButton('Continue...','fun6')}
        <p class="spaced"></p>
    </div>`,
    script: button.createScript(url +'start?user=' + user, 'fun6')
}}