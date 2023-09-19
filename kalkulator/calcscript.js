function addToDisplay(value)
{
    document.getElementById('display').value += value;
}

function clean()
{
    document.getElementById('display').value = ' ';
    document.getElementById('result').value = ' '; 
}

function back()
{
    let result = document.getElementById('display').value;
    document.getElementById('display').value = result.substring(0, result.length-1);
}

function calc()
{
    let result = eval(document.getElementById('display').value);
    document.getElementById('result').value = result;
}