function alertName() {
    alert("Ghullam Mustafa")
}

function alertNumber() {
    alert(1234567890)
}

function variableNames() {
    document.getElementById('output').innerHTML = "<ul><li>A variable name can't contain any spaces.</li><li>A variable name can contain only Letters, dollar sign,and underscores.</li><li>Though a variable name can't be any javascript's keywords.For example, userAlert and myVar are legal.</li><li>Capital Letters are fine, but be careful.Variable names arecase sesitive. A raso is not a Rose.If you assign the string Floribundas to the variable rose,and then ask  javascript for the value assigend to <span style{color= pink;}> Rose </span>, you'll come up empty</li></ul>"
}



function cammelCase() {
    document.getElementById('output').innerHTML= "<h3>Example</h3><ul><li>user</li><li>userResponse</li><li>userResponseTime</li><li>userResponseTimeLimit</li></ul>"
}