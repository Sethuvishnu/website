import Lenis from "@studio-freight/lenis"; 
import { gsap } from "gsap";
    
import { Flip } from "gsap/Flip";


gsap.registerPlugin(Flip);

const lenis = new Lenis()
lenis.on('scroll', (e) => {
    console.log(e)
})
function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)


