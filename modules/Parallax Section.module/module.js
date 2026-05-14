gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.parallSec').forEach(section => {
  const bg = section.querySelector('.parallbg');
  const person = section.querySelector('.parallbgPerson');

  gsap.to(bg, {
    y: -120, 
    ease: "power1.out",
    scrollTrigger: {
      trigger: section,
      start: "top bottom-=250", 
      end: "bottom top",
      scrub: 0.8, 
    }
  });

  gsap.to(person, {
    y: -120, 
    ease: "power1.out",
    scrollTrigger: {
      trigger: section,
      start: "top bottom-=250",
      end: "bottom top",
      scrub: 0.8,
    }
  });
});