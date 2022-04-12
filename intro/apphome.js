const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

const navlinks = document.querySelector(".nav-links");
const bigText = document.querySelector(".big-text");

function bgChanger(){
    if(this.scrollY > this.innerHeight / 1.5) {
        document.body.classList.add("bg-active");
    } else {
        document.body.classList.remove("bg-active");
    }
}
window.addEventListener("scroll", bgChanger);

bigText.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
      link.classList.toggle("fade");
    });
  });

