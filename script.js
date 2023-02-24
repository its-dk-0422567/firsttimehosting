let progressLine = document.getElementById('progress-line');
let circles = document.getElementsByClassName('circle');

let buttons = document.getElementsByClassName('btn');

let steps = circles.length;
let step = 1;

let prev = buttons[0];
let next = buttons[1];


prev.addEventListener('click',function(){

    step--;
    
    updateLine();
})


next.addEventListener('click',function (){
    
    step++;
    
    updateLine();
})


function updateLine(){
        
    // circles.forEach( element,idx => {
    //     if( idx < step){
    //         element.classList.add('active');
    //     }
    //     else{
    //         element.classList.remove('active');
            
    //     }
    // });

    // circles.forEach( function(circle, idx){
    [...circles].forEach( function(circle, idx){
        if(idx < step) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    


    progressLine.style.width = (step -1 )/(steps -1)*100 + '%';
 
    if( step == 1){
        prev.setAttribute('disabled','')
    }
    else if( step == 4 ){
        next.setAttribute('disabled','');
    }
    else {
        next.removeAttribute('disabled');
        prev.removeAttribute('disabled');
    }

   
}