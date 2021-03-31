gsap.set(".content", { autoAlpha: 0 });

var headlines = gsap.utils.toArray(".text");

var totalDuration = 1000;
var singleDuration = totalDuration / headlines.length;

headlines.forEach((elem, i) => {
  const smallTimeline = gsap.timeline();

  const content = document.querySelector(".content-wrap");
  const relevantContent = content.querySelector("span.content-" + i);

  ScrollTrigger.create({
    trigger: "body",

    start: "top -=" + singleDuration * i,
    end: "+=" + singleDuration,

    //markers: true,

    animation: smallTimeline,
    toggleActions: "play reverse play reverse",
  });

  smallTimeline
    //.to(elem,{ duration: 0.25, fontSize: "40px", color: "orange"}, 0)
    .to(elem, { duration: 0.25, color: "orange" }, 0)
    .set(relevantContent, { autoAlpha: 1 }, 0);
});

// Everything below this line is not important for your case ---------------------------

const lineTimeline = gsap.timeline();

ScrollTrigger.create({
  trigger: ".pin-up",
  start: "top top",
  end: "+=" + totalDuration,
  //markers: true,
  pin: true,
  scrub: true,
  animation: lineTimeline,
});

lineTimeline
  .to(".sideline", { duration: 1 }, 0)
  .to(".sideline", { duration: 0.9, scaleY: 1, ease: "none" }, 0);

var showYowza = gsap.timeline();
showYowza.to(".below span", { autoAlpha: 1, y: 0 });

ScrollTrigger.create({
  trigger: ".below",
  start: "top center",

  endTrigger: ".footer",
  end: "bottom bottom",

  //scrub: 1,

  //markers: true,
  animation: showYowza,

  toggleActions: "none play none reverse",
  //toggleActions: "play reverse play reverse"
});
