// Scroll
gsap.registerPlugin(ScrollTrigger);

// Parallax
gsap.to(".exceptional-img", {
    scrollTrigger: {
      trigger: ".exceptional-img",
      scrub: true,
      start: "top bottom",
      end: "top top"
    },
    y: -100,
});

gsap.to(".exceptional-title > div", {
    scrollTrigger: {
      trigger: ".exceptional-title > div",
      scrub: true,
      start: "top bottom",
      end: "top top"
    },
    y: -20,
});

gsap.to(".exceptional-title > img", {
    scrollTrigger: {
      trigger: ".exceptional-title > img",
      scrub: true,
      start: "top bottom",
      end: "top top"
    },
    y: -30,
});

gsap.to(".solution-arrow-horizontal", {
    scrollTrigger: {
      trigger: ".solution-arrow-horizontal",
      scrub: true,
      start: "top bottom",
      end: "top top"
    },
    x: 100,
});

gsap.to(".star-phone", {
    scrollTrigger: {
      trigger: ".star-phone",
      scrub: true,
      start: "top bottom",
      end: "top top"
    },
    rotate: 240,
});

gsap.from(".footer-image", {
    scrollTrigger: {
      trigger: "#footer",
      scrub: true,
      start: "top+50px bottom",
      end: "top top+300px"
    },
    scale: .3,
});

gsap.from(".footer-arrow", {
    scrollTrigger: {
        trigger: "#footer",
        scrub: true,
        start: "top+50px bottom",
        end: "top top+300px"
    },
    rotate: 90,
});


// Hero Animation
var hero = gsap.timeline();
var title = document.querySelectorAll('.hero-title');
gsap.fromTo(".logo", { y: -200, opacity: 0 }, { duration: 1, y: 0, opacity: 1 });
hero.fromTo(title[0], 
    { x: -50, z: 100, opacity: 0, rotationX: 100, rotationY: 100, transformStyle:"preserve-3d", perspective:800 }, 
    { duration: 1, x: 0, z: 0, opacity: 1, rotationX: 0, rotationY: 0 })
    .fromTo(".hero-line", { x: 80, opacity: 0 }, { duration: .5, x: 0, opacity: 1 }, "-=.5")
    .fromTo(title[1], 
        { x: -50, z: 100, opacity: 0, rotationX: -50, rotationZ: 5, transformStyle:"preserve-3d", perspective:800 }, 
        { duration: .8, x: 0, z: 0, opacity: 1, rotationX: 0, rotationZ: 0 }, 
        "-=.5")
        .fromTo(".hero-subtitle > div", 
        { x: 0, z: 0, opacity: 0, rotationX: 50, transformStyle:"preserve-3d", perspective: 90 }, 
        { duration: .8, x: 0, z: 0, opacity: 1, rotationX: 0 }, 
        "-=.5")
        .fromTo(".hero-subtitle > a", { y: 100, opacity: 0 }, { duration: .8, y: 0, opacity: 1}, "-=.8")
        .fromTo(".hero-img-1", { x: -50, opacity: 0 }, { duration: 2, x: 0, opacity: 1 }, "-=.5")
        .fromTo(".hero-img-2", { scale: 0, opacity: 0 }, { duration: 2, scale: 1, opacity: 1 }, "-=1.8")
        .fromTo(".hero-img-3", { y: 100, opacity: 0 }, { duration: 2, y: 0, opacity: 1 }, "-=1.9")
        .fromTo(".hero-star", { y: 100, opacity: 0 }, { duration: 1, y: 0, opacity: 1 }, "-=2");
  

// Requirement Animation
const requirementText = gsap.timeline({
    scrollTrigger: {
        trigger: ".exceptional-pattern",
        start: "top top",
        end: "bottom bottom",
    }
});
requirementText.fromTo(".requirements-image.image-1", { x: -200, opacity: 0 }, { duration: 1, x: 0, opacity: 1 }, "-=5")
                .fromTo(".requirements-arrow-horizontal", { x: 200, opacity: 0 }, { duration: 1, x: 0, opacity: 1 }, "-=.8")
                .fromTo(".gap-top", { height: 200, width: 2}, { duration: 1, height: 0, width: 0 }, "-=.8")
                .fromTo(".requirements-image.image-2", { y: 200, opacity: 0 }, { duration: 1, y: 0, opacity: 1 }, "-=.5")
                .fromTo(".requirements-star", { y: 200, opacity: 0 }, { duration: 1, y: 0, opacity: 1 }, "-=.5")
                .fromTo(".requirements-arrow", { scale: 0, opacity: 0 }, { duration: 1, scale: 1, opacity: 1 }, "-=1")
                .fromTo(".requirements-image.image-3", { y: 200, opacity: 0 }, { duration: 1, y: -100, opacity: 1 }, "-=.5")

const transitionFade = gsap.timeline({
    scrollTrigger: {
        trigger: ".requirements-wrap",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: ".requirements-sticky",
    }
});
transitionFade.fromTo(".requirements-box", {y: 900}, { duration: 1, y: 0, })
    .to(".gap-title-1", { width: 72, duration: 1 }, "-=1")
    .to(".gap-title-2", { width: 30, duration: 1 }, "-=1")
    .to(".gap-title-3", { width: 60, duration: 1 }, "-=1")
    // .to(".requirements-image.image-1", { x: 80, duration: 1 }, "-=1")
    // .to(".requirements-image.image-2", { y: -40, duration: 1 }, "-=1")
    // .to(".requirements-star", { y: -40, duration: 1 }, "-=1")
    // .to(".requirements-image.image-3", { y: -40, duration: 1 }, "-=1")
    // .to(".requirements-arrow", { y: 100, duration: 1 }, "-=1")
    // .to(".requirements-arrow-horizontal", { x: -50, duration: 1 }, "-=1")
    .to(".requirements-box", {rotation: -90, duration: .5})
    .to(".requirements-box", {height: "140vw", width: "120vh", duration: 1.2})
    .fromTo(".requirements-box-inner-light", {opacity: 0, scale: 0}, { opacity: 1, scale: 1, duration: .8 }, "-=1")
    .fromTo(".requirements-box-inner-dark", {opacity: 0, scale: 0}, { opacity: 1, scale: 1, duration: .8 }, "-=.8")
    .fromTo(".accomplish-title", {x: -500, opacity: 0}, { x: 0, opacity: 1, duration: .5 }, "-=.5")
    .fromTo(".accomplish-arrow", {x: -500, opacity: 0}, { x: 0, opacity: 1, duration: .5 }, "-=.5")
    .fromTo(".accomplish-arrow-horizontal", {y: -200, opacity: 0}, { y: 0, opacity: 1, duration: .5 }, "-=.5")
    .fromTo(".circular", {scale: 0, opacity: 0}, { scale: 1, opacity: 1, duration: 1 }, "-=.5")
    .to(".accomplish-title > .title-1", { x: 60, duration: 1 }, "-=.5")
    .to(".accomplish-title > .title-2", { x: 30, duration: 1 }, "-=1")
    .to(".accomplish-title > .title-3", { x: 40, duration: 1 }, "-=.5")
    .to(".accomplish-arrow", { y: 5, duration: 1 }, "-=1.5")
    .to(".accomplish-arrow-horizontal", { x: 100, duration: 1 }, "-=1.5");

const solutions = gsap.timeline({
    scrollTrigger: {
        trigger: "#solutions",
        start: "top +50%",
        end: "bottom +50%",
        scrub: true
    }
});
solutions.to(".solutions-image.image-1", { rotate: 5, duration: 1 }, "-=1")
        .to(".solutions-image.image-2", { rotate: -5, duration: 2 }, "+=1")
        .to(".solutions-image.image-3", { rotate: 5, duration: 2 }, "+=1.5")
        .to(".solutions-image.image-4", { rotate: -5, duration: 2 }, "+=1.5")
        .to(".solution-arrow-horizontal", { x: 50, duration: 2 });


const workflow = gsap.timeline({
    scrollTrigger: {
        trigger: ".workflow-container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        pin: ".workflow-sticky"
    }
});
workflow.fromTo(".workflow-content-train", {x: "200vw"}, { duration: 1, x: 0, }, "-=.5")


const partners = gsap.timeline({
    scrollTrigger: {
        trigger: ".partner-container",
        start: "top +80%",
        end: "bottom bottom",
        scrub: true
    }
    });
partners.to(".partners-phone", {y: 80, duration: .5, })
        .fromTo(".partners-logo-1", {x: -100}, { duration: 1, x: 115, transformStyle: "preserve-3d"})
        .fromTo(".partners-logo-2", {x: 100}, { duration: 1, x: -115, transformStyle: "preserve-3d"}, "-=1")