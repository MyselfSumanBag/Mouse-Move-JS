

let circle = document.querySelector("#circle");
let right = document.querySelectorAll('.rightmenu p')
let left = document.querySelectorAll('.leftmenu p')
let menu = document.querySelector('#main i')
let menubar = document.querySelector("#menubar")
let cross = document.querySelector('#cross')
// console.log(right)
// console.log(left)


window.addEventListener('mousemove',function(dets){
    gsap.to('#circle',{
        x:dets.clientX,
        y:dets.clientY,
        // duration:1,
        ease:Expo
    })
})
// window.addEventListener('touch',function(dets){
//     gsap.to('#circle',{
//         x:dets.clientX,
//         y:dets.clientY,
//         // duration:1,
//         ease:Expo
//     })
// })


// 
menu.addEventListener('click',()=>{
    menubar.style.visibility = "visible",
    menu.style.display = "none",
    cross.style.display = "block"
})
cross.addEventListener('click',()=>{
    menubar.style.visibility = "hidden",
    menu.style.display = "block",
    cross.style.display = "none"
})

right.forEach((elem)=>{
    elem.addEventListener('mousemove',(dets)=>{
        gsap.to("#circle",{
            scale:4
        })
        gsap.to(elem,{
            scale:2,
            color:"#fff"
        })
    })
    elem.addEventListener('mouseleave',(dets)=>{
            gsap.to("#circle",{
                scale:1
            })
            gsap.to(elem,{
                scale:1,
                color:"#000"
            })
        })
})
left.forEach((elem)=>{
    elem.addEventListener('mousemove',(dets)=>{
        gsap.to("#circle",{
            scale:4
        })
        gsap.to(elem,{
            scale:2,
            color:"#fff"
        })
    })
    elem.addEventListener('mouseleave',(dets)=>{
            gsap.to("#circle",{
                scale:1
            })
            gsap.to(elem,{
                scale:1,
                color:"#000"
            })
        })
})


