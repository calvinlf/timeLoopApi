const button = require('../util/button')
const url = require('../setup').url

exports.basic = (user) => { return {
    html: `<div class="centered">
    <div class="text-center text-primary">
        <p></p>
        <div class="grid">
            <div><button onclick="press('1')">1</button></div>
            <div><button onclick="press('2')">2</button></div>
            <div><button onclick="press('3')">3</button></div>
            <div><button onclick="press('4')">4</button></div>
            <div><button onclick="press('5')">5</button></div>
            <div><button onclick="press('6')">6</button></div>
            <div><button onclick="press('7')">7</button></div>
            <div><button onclick="press('8')">8</button></div>
            <div><button onclick="press('9')">9</button></div>
        </div>
        <button onclick="checkP()">Enter</button>
        <p></p>
        <p> It looks like will need to put in a code to continue.
        </p>
        ${button.makeButton('Go Back','code1')}

        <p class="spaced"></p>
    </div>
</div>`,
    script: button.createScript(url +'left1?user=' + user, 'code1') +
        button.createScript(url +'win?user=' + user, 'code2')
}}

