const bugerButton = document.querySelector('.burger-button')
const span = document.querySelectorAll('.burger-button span');

const tlMenu = gsap.timeline();
tlMenu.to('header nav ul',{duration:.5,x:-170})
.to('.burger-button span:nth-child(1)',{duration:.3,rotate:'40deg',y:9},'-=.5')
.to('.burger-button span:nth-child(3)',{duration:.3,rotate:'-40deg',y:-9},'-=.5')
.to('.burger-button span:nth-child(2)',{duration:.3,opacity:0},'-=.5')
.reversed(true)



function animMenu(){
    tlMenu.reversed(!tlMenu.reversed());
}

bugerButton.addEventListener('click',()=>{
    animMenu();
    for(i=0;i<span.length;i++){
        if(i === 0 ){
            gsap.to
        }
    }
})


