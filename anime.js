import { Application } from './node_modules/@splinetool/runtime/build/runtime.js';


//smooth animation
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

const canvas = document.getElementById('canvas3d');
const spline = new Application(canvas);

spline.load('https://prod.spline.design/Dt17b17H2tvGGSNa/scene.splinecode').then(() => {
  const rpi400 = spline.findObjectByName('harsh');

  gsap.registerPlugin(ScrollTrigger);


  gsap.set(rpi400.scale, { x: .7, y: .7, z: .7 });
  gsap.set(rpi400.position, { x: 50, y: -10 });
  gsap.set(rpi400.rotation, { x: 0, y: 0, z: 0.6 })

  gsap.timeline({
    scrollTrigger:{
      trigger: ".two",
      start: "top bottom",
      end: "bottom bottom",
      scrub: true,
      // markers: true
    }
  })
  .to(rpi400.rotation, {x: 0,y:0,z:-Math.PI *2},0)
  .to(rpi400.position, {x:-240,y:-60},0)
  .to(rpi400.scale, {x:.9,y:.9,z:.9})

gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "top 70%",
    end : "bottom bottom",
    scrub : true,
    markers: true
  }
})
  .to(rpi400.rotation, {x: -1, y: -.1,z: Math.PI},0)
  .to(rpi400.position, {x:10, y: -90},0)
  .to(rpi400.scale, {x:0.9,y:0.9,z:0.9})

  });


