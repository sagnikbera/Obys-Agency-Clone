function loadingAnimation(){
    var tl = gsap.timeline();

tl.from(".line h1",{
    y:150,
    stagger:0.25,
    duration:0.8,
    delay:0.5,
})



tl.from("#line1P1" ,{
    opacity:0,
    onStart: function(){
        var h5timer = document.querySelector("#line1P1 h5");
        var grow = 0;
        setInterval(function(){
            if(grow<100){
                grow++;
                h5timer.innerHTML = grow;
            }else{
                h5timer.innerHTML=grow;
            }
    
        },30)
    }
})

tl.to(".line h2",{
    animationName: "lineAnim",
    opacity:1,
})

tl.to("#loader",{
    opacity:0,
    duration:0.4,
    // delay:4,
    delay:0,
})  

tl.from("#page1",{
    delay:0.2,
    y:1200,
    opacity:0,
    duration:0.5,
    ease:Power4,
})

tl.to("#loader",{
    display:"none",
})

tl.from("#nav",{
    opacity:0
})

// tl.from("#hero1 h1,#hero2 h1,#hero3 h1,#hero4 h1,",{
//     y:120,
//     stagger:0.2,
// })

tl.from("#hero1 h1,#hero2 h1,#hero3 h1,#hero4 h1",{
    y:120,
    stagger:0.2,
})



}

function mouseCrusor(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
             left:dets.x,
             top:dets.y,
             duration: 1,
             ease:"black.out(1.7)",
            // https://gsap.com/docs/v3/Eases/
        })
    })

    Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, { 
        // ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
}






//function run
loadingAnimation();
mouseCrusor();
