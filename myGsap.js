var rule = CSSRulePlugin.getRule("span:after");
gsap.registerPlugin(ScrollTrigger);

//! strart animation

var tl = gsap.timeline({ defaults: { duration: 1, ease: "power1.inOut" } });

tl.from(".anim1", { opacity: 0, y: -50, stagger: 0.5 })
  .to(rule, { duration: 1.2, cssRule: { scaleY: 0 } }, "-=2.2")

  .fromTo(
    ".rightBox",
    { backgroundPosition: "50% -100%", opacity: 0 },
    { backgroundPosition: "0% 0%", opacity: 1, delay: 0.2 },
    "-=2"
  );

ScrollTrigger.defaults({
  toggleActions: "restart pause pause pause",
});

//cards

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

      scrollTrigger: {
        trigger: "#sekcja3",
        start: "top 20%",

        end: "center, 0%",

        scrub: true,
      },
    }
  );
});

// sampler photos secion 1 & 2

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
    },
  }
);

// text in sections 1 & 2

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
    },
  }
);

//section3 title

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

      end: "center 120%",
      scrub: true,
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

      end: "center 120%",
      scrub: true,
    },
  }
);

//section4

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

//section4 images in right box

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

//section 5

const grid5header = document.querySelectorAll(".grid5__header");

grid5header.forEach((element) => {
  gsap.fromTo(
    element.children,
    { y: "-=100", opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.3,
      duration: 1,

      scrollTrigger: {
        trigger: ".grid5__left",
        start: "top 80%",
        end: "bottom 120%",

        scrub: true,
      },
    }
  );
});

const items = document.querySelectorAll(".grid5__item");

items.forEach((element) => {
  gsap.fromTo(
    element.children,
    { y: "+=100", opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 1,
      duration: 1,

      scrollTrigger: {
        trigger: ".grid5__left",
        start: "top 80%",
        end: "bottom 120%",

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

      scrub: true,
    },
  }
);
