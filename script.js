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

function sumTwo() {
    document.getElementById('orignalstatements').innerHTML= "<p>let num1=10;</p><p>let num2 = 5;</p><p>Let sum = num1 + num2</p>"
 let num1=10
    let num2 = 5
    var add = num1 + num2
    document.getElementById('output').innerHTML=add
}





function sub() {
    document.getElementById('orignalstatements').innerHTML= "<p>let num1=10;</p><p>let num2 = 5;</p><p>Let sum = num1 - num2</p>"
  let num1=10
    let num2 = 5
    var subtract = num1 - num2
    document.getElementById('output').innerHTML=subtract
}




function multiply() {
    document.getElementById('orignalstatements').innerHTML= "<p>let num1=10;</p><p>let num2 = 5;</p><p>Let sum = num1 x num2</p>"
    let num1=10
    let num2 = 5
    var multiply = num1 * num2
    document.getElementById('output').innerHTML=multiply
}


function devide() {
    document.getElementById('orignalstatements').innerHTML= "<p>let num1=10;</p><p>let num2 = 5;</p><p>Let sum = num1 / num2</p>"
let num1=10
    let num2 = 5
    var devide = num1 / num2
    document.getElementById('output').innerHTML=devide
}





function someNumbers() {
    document.getElementById('orignalstatements').innerHTML="36/6*3;"
    var someNumbers = 36/6*3
    document.getElementById('output').innerHTML=someNumbers
}

document.getElementById('clear').onclick =function () {
    document.getElementById('orignalstatements').innerHTML=''
}

document.getElementById('clean').onclick =function () {
    document.getElementById('output').innerHTML=''
}