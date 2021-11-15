//Get elements by id
let display = document.getElementById('display');

//convert HTMLCollection to an array using Array from()
let buttons = Array.from(document.getElementsByClassName('button'));
// console.log(buttons)

//map through our array and add an event listner
buttons.map(button => {button.addEventListener('click',(e) => {
    // console.log('Clicked!', e.target, e.target.innerText)
    //use a switch case for various conditions
    switch(e.target.innerText){
        case 'C': 
        display.innerText = '';
        break;

        case 'DEL': 
        display.innerText = display.innerText.slice(0, -1);
        break;

        case '=':
            try {
                display.innerText = eval(display.innerText);
            } catch{
                display.innerText = 'Invalid Expression!'
            }
            
            break;
        default: 
        display.innerText += e.target.innerText;
    }
})}) 



