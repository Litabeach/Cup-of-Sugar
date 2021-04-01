gsap.to(".pContent", {
    yPercent: -100,
    ease: "none",
    scrollTrigger: {
      trigger: ".pSection",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true
    }, 
  });
  
  gsap.to(".pImage", {
    yPercent: 50,
    ease: "none",
    scrollTrigger: {
      trigger: ".pSection",
      // start: "top bottom", // the default values
      // end: "bottom top",
      scrub: true
    }, 
  });