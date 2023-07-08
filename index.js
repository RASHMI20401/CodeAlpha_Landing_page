var t = gsap.timeline();
t
    .from(".nav .logo" , {
        x:-40,
        duration:0.5,
    })
    .from(".nav .part2" , {
        x:720,
        duration:0.4,
    })
    .from(".container .img1",{
        opacity:0,
     
    })
    .to(".container .img1",{
        opacity:1,
        duration:0.1,
    })
    .from(".container .images .img2",{
        opacity:0,
       
    })
    .to(".container .images  .img2",{
        opacity:1,
        duration:0.1,
    })
    .from(".container .images .img3",{
        opacity:0,
       
    })
    .to(".container .images .img3",{
        opacity:1,
        duration:0.1,
    })
    .from(".container .txt", {
        y:-1000,
    })
    .from(".conatiner2 .learn",{
        scale:0.002,
    })
    .to(".conatiner2 .learn",{
       scale:1.1,
       duration:0.1,
    });


gsap.from(".container3 .heading",{
   opacity:0,
   duration:2,
    scrollTrigger:{
        trigger:".container3 .heading",
        scroll:"body",
        // markers:"true",
        start:"top 40%",
        end:"bottom 5px",
        scrub:"true"
    },
})
    gsap.from(".container3 .txt2" , {
        opacity:0,
        duration:2,
         scrollTrigger:{
             trigger:".container3 .txt2",
             scroll:"body",
            //  markers:"true",
             start:"top 40%",
             end:"bottom 1px",
            scrub:"true"             
         },
    })
    gsap.from(".container3 .about" , {
        opacity:0,
        
         scrollTrigger:{
             trigger:".container3 .about",
             scroll:"body",
            //  markers:"true",
             start:"top 40%",            
         },
    })

    gsap.from(".container4 .left" , {
        opacity:0,
        delay:0.5,
         scrollTrigger:{
             trigger:".container4 .left",
             scroll:"body",
            //  markers:"true",
             start:"top 40%",  
             end:"bottom 1px",
             scrub:"true",

         },
    })
    gsap.from(".container4 .right" , {
        opacity:0,
        delay:1,
         scrollTrigger:{
             trigger:".container4 .right",
             scroll:"body",
            //  markers:"true",
             start:"top 40%", 
                      
         },
    })

    gsap.from(".section" , {
        opacity:0,

         scrollTrigger:{
             trigger:".section",
             scroll:"body",
            //  markers:"true",
             start:"top 40%", 
            // scrub:"true"
         },
    })

    gsap.from("footer" , {
        opacity:0,
         scrollTrigger:{
             trigger:"footer",
             scroll:"body",
            //  markers:"true",
             start:"start 90%", 
            
         },
    })