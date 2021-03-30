const text = document.querySelector(".hero-title");
const sub = document.querySelector(".hero-sub");

const tl = gsap.timeline({
    defaults: { ease: "none", transformOrigin: "50% 50%" },
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });
  
  gsap.utils.toArray("img").forEach((layer) => {
    const depth = layer.dataset.depth;
    const movement = -(layer.offsetHeight * depth);
    tl.to(layer, { y: -movement }, 0);
  });
  
  tl.to(
    text,
    {
      y: -text.offsetHeight * text.dataset.depth,
      autoAlpha: 0,
      scale: 1.08,
      duration: 0.2
    },
    0
  )
    .to(
      sub,
      {
        y: -sub.offsetHeight * sub.dataset.depth,
        autoAlpha: 0,
        scale: 1.05,
        duration: 0.2
      },
      0.06
    )
    .to(nav, { y: "-100%", duration: 0.16 }, 0)
    .to(
      icon,
      { y: -icon.offsetHeight * icon.dataset.depth, autoAlpha: 0, duration: 0.2 },
      0
    );