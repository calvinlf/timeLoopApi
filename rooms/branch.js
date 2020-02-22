const button = require('../util/button')
const url = require('../setup').url

exports.basic = (user) => { return {
    html: `<div class="centered">
    <div class="text-center text-primary">
        <p></p>
        <img src="img/split.jpg" class="w-50" alt="split" class="rounded">
        <p></p>
        <p> The path splits in front of you.
        </p>
        ${button.makeButton('Go Left','fun3')}
        ${button.makeButton('Go Right','fun2')}
        <p class="spaced"></p>
    </div>
</div>`,
    script: button.createScript(url +'right1?user=' + user, 'fun2') +
        button.createScript(url +'left1?user=' + user, 'fun3')
}}