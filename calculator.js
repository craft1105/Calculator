let iputbox = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = '';
buttons.forEach(element => {
    element.addEventListener('click', (b) => {
        if (b.target.innerText == '=') {
            string = String(eval(string))
            iputbox.value = string;
        }


        else if (b.target.innerText == 'AC') {
            string=''
            iputbox.value = string;
        }
        else if(b.target.innerText == 'DEL'){
            
            string = string.substring(0, string.length - 1)
            iputbox.value=string;
        }
    
        else {
            string += b.target.innerText
            iputbox.value = string
        }
    })
})