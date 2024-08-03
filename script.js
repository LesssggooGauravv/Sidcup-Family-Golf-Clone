var crsr = document.querySelector("#cursor")
var crsrBlur = document.querySelector("#cursor-blur")


document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + 2 +"px"
    crsr.style.top = dets.y + 2 +"px"
    crsrBlur.style.left = dets.x - 250 + "px"
    crsrBlur.style.top = dets.y - 250 + "px"
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale = 4
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale = 1
        crsr.style.border = "0 solid #95c11e" 
        crsr.style.backgroundColor = "#95c11e"
    })
})

gsap.to("#nav", {
    backgroundColor: "black",
    duration: 0.5,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start: "top -10%",
        end:"top -11%",
        scrub: 1
    }
})

gsap.to("#main", {
    backgroundColor: "black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub: 1
    }
})

gsap.from("#about-us img,#about-us-in", {
    y:50,
    opacity:0,
    duration: 1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller: "body",
        // markers:true,
        start:"top 60%",
        end: "top 58%",
        scrub: 1
    }
})

gsap.from(".card", {
    scale: 0.8,
    opacity:0,
    duration: 1,
    // stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller: "body",
        // markers:true,
        start:"top 70%",
        end: "top 65%",
        scrub: 1
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 3
    }
})

gsap.from("page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start: "top 75%",
        end: "top 60%",
        scrub: 3
    }
})

document.getElementById("scroll-but").addEventListener("click", e => {
    e.preventDefault();
    let myelemtopoffset = document.getElementById("page2").offsetTop;
    let navHeight = document.getElementById("nav").offsetHeight;
    window.scroll({top: myelemtopoffset - navHeight, left: 0, behavior: 'smooth'})
})
