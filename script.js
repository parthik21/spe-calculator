let screen = document.getElementById('screen')
buttons = document.querySelectorAll('button')
let screenValue = '';

for (item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log('Button ',buttonText);

        if (buttonText == 'sr'){
            buttonText = ' sqrt ';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'x!'){
            buttonText = '!';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'ln'){
            buttonText = 'ln(';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == '^'){
            buttonText = '**';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}