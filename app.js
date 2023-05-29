// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btn = document.querySelectorAll('.btn');


// use forEach to get the values of the buttons
btn.forEach(function(btn){
    btn.addEventListener('click', function(e){
        e.preventDefault(); // add event handler for click event
        const style = e.currentTarget.classList;

        if(style.contains('decrease')){
            count--;
        }else if (style.contains('increase')){
            count++;
        } else {
            count = 0;
        }
        value.textContent = count;
    })
})
