exports.createScript = (url, funName) => {
    return `function ${funName}() {
            fetch("${url}")
                .then((response) => {
                    return response.json()
                })
                .then((body) => {
                    let script = document.createElement("script");
                    script.setAttribute("type", "text/javascript");
                    script.innerText = body.script;
                    document.getElementsByTagName("head")[0].appendChild(script);
                    document.getElementById('game').innerHTML = body.html;
                })
                .catch((e) => {console.log('errror'); throw e;})
        }
        `
}

exports.makeButton = (text, funName) => {
    return `<button type="button" class="btn btn-primary btn-lg" onclick="${funName}()">${text}</button>`
}