let output = document.getElementById('output');
let add = document.getElementById('add');
let subtract = document.getElementById('subtract');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');
add.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    let secondinput = document.getElementById('secondinput').value;
    output.value = parseFloat(input)+parseFloat(secondinput);
})
subtract.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    let secondinput = document.getElementById('secondinput').value;
    output.value = input-secondinput;
})
multiply.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    let secondinput = document.getElementById('secondinput').value;
    output.value = input*secondinput;
})
divide.addEventListener('click', function(){
    let input = document.getElementById('input').value;
    let secondinput = document.getElementById('secondinput').value;
    output.value = input/secondinput;
})