const button = require('../util/button')

exports.basic = (user) => { return {
    html: `<div class="centered">
    <div class="text-center text-primary">
    <p></p>
    <img src="img/monster.jpg" class="w-50" alt="monster" class="rounded">
    <p></p>
    <p> You win!! For now...
</p>
<a href="about.html" class="btn-lg btn-primary" role="button">Finish</a>
    <p class="spaced"></p>
    </div>
    </div>`,
    script: ""
}}