var tl = gsap.timeline();

tl.to("body", { opacity: 1 });
tl.from("header", { y: -50, opacity: 0 }, 0);
tl.from(".social-links", { y: 50, opacity: 0 }, ">");
tl.from(".projects", { opacity: 0 }, ">");
tl.from("footer", { y: 50, opacity: 0 }, 0);

tl.duration(1.5);