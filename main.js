gsap.registerPlugin(ScrollTrigger);
document.getElementById('darkModeIcon').addEventListener('click', function () {
    this.classList.toggle('bi-sun');
    this.classList.toggle('bi-moon-stars');
    let theme = document.documentElement.getAttribute('data-bs-theme', 'dark');
    if (theme === 'dark') {
      document.documentElement.removeAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'light');
    }
  });



gsap.from(".navbar", { 
  opacity: 0, 
  y: -100, 
  duration: 1 
});
gsap.from(".vs", { 
  opacity: 0, 
  x: -100, 
  duration: 1 
});
gsap.from(".vs1", { 
  opacity: 0, 
  x: 100, 
  duration: 1 
});
gsap.from(".box", {
  scrollTrigger: ".box",
  y: 100,
  opacity:0,
  duration:1,
});

gsap.from(".box1", {
  scrollTrigger: ".box1",
  y: 200,
  opacity:0,
  duration:1,
});

gsap.from(".box2", {
  scrollTrigger: ".box2",
  y: 300,
  opacity:0,
  duration:1,
});

gsap.from(".box3", {
  scrollTrigger: ".box3",
  y: 300,
  opacity:0,
  duration:1,
});

gsap.from(".box4", {
  scrollTrigger: ".box4",
  y: 300,
  opacity:0,
  duration:1,
});

gsap.from(".box5", {
  scrollTrigger: ".box5",
  y: 300,
  opacity:0,
  duration:1,
});

gsap.from(".box6", {
  scrollTrigger: ".box6",
  y: 300,
  opacity:0,
  duration:1,
});