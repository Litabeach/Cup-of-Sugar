gsap.to(".pContent", {
    yPercent: -100,
    ease: "none",
    scrollTrigger: {
      trigger: ".pSection",
      scrub: true
    }, 
  });
  
  gsap.to(".pImage", {
    yPercent: 50,
    ease: "none",
    scrollTrigger: {
      trigger: ".pSection",
      scrub: true
    }, 
  });