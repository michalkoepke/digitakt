var rule = CSSRulePlugin.getRule("span:after");
gsap.registerPlugin(ScrollTrigger);
// gsap.defaults({ ease: "none" });

// gsap.from('.anim1', {opacity: 0, duration: 1, y: -50, ease: "bounce.out", stagger: 0.5});
// gsap.from('img', {duration:1, y:200, opacity: 0, delay: 0.4, ease: "bounce.out"});
// gsap.to(rule, {cssRule: {scaleY: 0}, duration: 1});
// gsap.fromTo('.rightBox',  {backgroundPosition: '50% 100%', opacity: 0}, {backgroundPosition: '0% 0%', opacity: 1, ease: "bounce.out", duration:1, delay: 0.3});

// timeline way:

//! strart animation

var tl = gsap.timeline({ defaults: { duration: 1, ease: "power1.inOut" } });

tl.from(".anim1", { opacity: 0, y: -50, stagger: 0.5 })
  .to(rule, { duration: 1.2, cssRule: { scaleY: 0 } }, "-=2.2")

  .fromTo(
    ".rightBox",
    { backgroundPosition: "50% -100%", opacity: 0 },
    { backgroundPosition: "0% 0%", opacity: 1, delay: 0.2 },
    "-=1"
  );
// // .from("img", { y: 200, opacity: 0, delay: 0.4 }, "-=1.5");

// document.getElementById("cta").addEventListener("click", () => {
//   tl.reversed() ? tl.play() : tl.reverse();
// });

// default dla scrolla

ScrollTrigger.defaults({
  toggleActions: "restart pause pause pause",
  // scroller: "body",
});

//KARTY

const cards = document.querySelectorAll(".mask__cards__card");

cards.forEach((card) => {
  gsap.fromTo(
    card.children,
    { y: "+=100", opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.3,
      duration: 0.3,
      // rotation: 360,
      scrollTrigger: {
        trigger: "#sekcja3",
        start: "top 20%",
        // end: "bottom 100%",
        end: "center, -10%",
        markers: true,
        scrub: true,
      },
    }
  );
});

// ZDJECIA SAMPLERA W SEKCJI 1 I 2

gsap.fromTo(
  ".grid1__left",
  {
    y: "-=250",
    opacity: 0,
  },

  {
    y: 0,
    opacity: 1,

    duration: 0.8,
    ease: "Power4 easeOut",
    scrollTrigger: {
      trigger: ".grid1__left__wrapper",
      start: "top 120%",
      end: "bottom 100%",
      scrub: true,
      // markers: true,
    },
  }
);

gsap.fromTo(
  ".grid2__right",
  {
    y: "-=250",
    opacity: 0,
  },

  {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: "Power4 easeOut",
    scrollTrigger: {
      trigger: ".grid2__right__wrapper",
      start: "top 120%",
      end: "bottom 100%",
      scrub: true,
      // markers: true,
    },
  }
);

// TEKSTY W SEKCJACH 1 i 2

gsap.fromTo(
  ".grid1__right__box",
  {
    y: "+=250",
    opacity: 0,
  },

  {
    y: 0,
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".grid1__right",
      start: "top 120%",
      end: "bottom 80%",
      scrub: true,
      // markers: true,
    },
  }
);

gsap.fromTo(
  ".grid2__left__box",
  {
    y: "+=250",
    opacity: 0,
  },

  {
    y: 0,
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".grid2__left",
      start: "top 120%",
      end: "bottom 80%",
      scrub: true,
      // markers: true,
    },
  }
);

//sekcja 3 TYTUL

gsap.fromTo(
  ".maintitle",

  {
    x: "+=150",
    opacity: 0,
  },

  {
    x: 0,
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
      trigger: "#sekcja3",
      start: "top 80%",
      // end: "bottom 120%",
      end: "center 120%",
      scrub: true,
      // markers: true,
    },
  }
);

gsap.fromTo(
  ".subtitle",

  {
    x: "-=150",
    opacity: 0,
  },

  {
    x: 0,
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
      trigger: "#sekcja3",
      start: "top 80%",
      // end: "bottom 120%",
      end: "center 120%",
      scrub: true,
      // markers: true,
    },
  }
);

//sekcja 4

gsap.fromTo(
  ".section4__maintitle",

  {
    opacity: 0,
    x: "+=150",

    scaleX: 2,
    scaleY: 2,
  },

  {
    opacity: 1,

    scaleX: 1,
    scaleY: 1,

    x: 0,

    scrollTrigger: {
      trigger: ".grid4__left",
      start: "top 70%",
      end: "center 80%",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".section4__desc",

  {
    opacity: 0,

    scaleX: 0.1,
    scaleY: 0.1,
  },

  {
    opacity: 1,

    scaleX: 1,
    scaleY: 1,

    scrollTrigger: {
      trigger: ".grid4__left",
      start: "top 80%",
      end: "center 80%",
      scrub: true,
    },
  }
);

//sekcja 4 obrazki po prawej

gsap.fromTo(
  ".grid4__right__image",

  {
    opacity: 0,
    x: "+=150",
  },

  {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: ".grid4__right",
      start: "top 80%",
      end: "center 60%",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".grid4__right__image2",

  {
    opacity: 0,
    x: "-=150",
  },

  {
    opacity: 1,
    x: -50,

    scrollTrigger: {
      trigger: ".grid4__right",
      start: "top 80%",
      end: "center 60%",
      scrub: true,
    },
  }
);

//sekcja 5

const grid5header = document.querySelectorAll(".grid5__header");

console.log("header: ", grid5header);

grid5header.forEach((element) => {
  gsap.fromTo(
    element.children,
    { y: "-=100", opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.3,
      duration: 1,
      // rotation: 360,
      scrollTrigger: {
        trigger: ".grid5__left",
        start: "top 80%",
        end: "bottom 120%",
        // markers: true,
        scrub: true,
      },
    }
  );
});

const items = document.querySelectorAll(".grid5__item");

// console.log("items", items);

items.forEach((element) => {
  gsap.fromTo(
    element.children,
    { y: "+=100", opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 1,
      duration: 1,
      // rotation: 360,
      scrollTrigger: {
        trigger: ".grid5__left",
        start: "top 80%",
        end: "bottom 120%",
        // markers: true,
        scrub: true,
      },
    }
  );
});

gsap.fromTo(
  ".grid5__right__formBox",

  {
    scaleX: 0.1,
    scaleY: 0.1,
    opacity: 0,
  },

  {
    scaleX: 1,
    scaleY: 1,
    opacity: 1,

    scrollTrigger: {
      trigger: ".grid5__right",
      start: "top 80%",
      end: "bottom 120%",
      // markers: true,
      scrub: true,
    },
  }
);

// gsap.fromTo(
//   ".mask__title__box",
//   {
//     opacity: 0,
//   },

//   {
//     // y: "-=50%",
//     opacity: 1,
//     duration: 0.5,
//     scrollTrigger: {
//       trigger: "#sekcja3",
//       start: "top 40%",
//       end: "bottom 80%",
//       scrub: true,
//       // markers: true,
//     },
//   }
// );

//kwadraty;

gsap.to(".square", {
  scrollTrigger: "#sekcja2",
  duration: 1,
  x: 1000,
  rotation: 360,
});
gsap.to(".square2", {
  scrollTrigger: "#sekcja3",
  duration: 1,
  x: 1000,
  rotation: 360,
});
