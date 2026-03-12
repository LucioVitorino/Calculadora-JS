function insert(element) {
    document.querySelector('.result').innerHTML += element;
}

function clean() {
    document.querySelector('.result').innerHTML = ' ';
}

function correction(){
    let result = document.querySelector('.result').innerHTML;
    document.querySelector('.result').innerHTML = result.substring(0, result.length - 1);
}

function equal() {
    let result = document.querySelector('.result').innerHTML;
    if(result)
        document.querySelector('.result').innerHTML = eval(result);
}