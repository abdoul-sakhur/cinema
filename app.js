const allbox=document.querySelectorAll('#box img' );
const  boxlive=document.querySelectorAll('#box2 img');
console.log(allbox);

const  tl = gsap.timeline();
//sequenced one-after-the-other
tl.from(allbox[0], {opacity:0, duration:2} ,{opacity: 100,}) //notice that there's no semicolon!
tl.from(allbox[1], {opacity:0, duration:3} ,{opacity: 100,}) //notice that there's no semicolon!
tl.from(allbox[2], {opacity:0, duration:4} ,{opacity: 100,}) //notice that there's no semicolon!
tl.from(allbox[3], {opacity:0, duration:5} ,{opacity: 100,}) //notice that there's no semicolon!
tl.from(allbox[4], {opacity:0, duration:6} ,{opacity: 100,}) //notice that there's no semicolon!
tl.from(allbox[5], {opacity:0, duration:7} ,{opacity: 100,}) //notice that there's no semicolon!
tl.from(allbox[6], {opacity:0, duration:8} ,{opacity: 100,}) //notice that there's no semicolon!
tl.from(allbox[7], {opacity:0, duration:9} ,{opacity: 100,}) //notice that there's no semicolon!
tl.from(allbox[8], {opacity:0, duration:10},{opacity: 100,}) //notice that there's no semicolon!
tl.from(allbox[9], {opacity:0, duration:11},{opacity: 100,}) //notice that there's no semicolon!
tl.from(allbox[10], {opacity:0, duration:12},{opacity: 100,}) //notice that there's no semicolon!
tl.from(allbox[11], {opacity:0, duration:13},{opacity: 100,}) //notice that there's no semicolon!
tl.from(allbox[12], {opacity:0, duration:14},{opacity: 100,}) //notice that there's no semicolon!
tl.from(allbox[13], {opacity:0, duration:15},{opacity: 100,}) //notice that there's no semicolon!
tl.from(allbox[14], {opacity:0, duration:16},{opacity: 100,}) //notice that there's no semicolon!
tl.from(allbox[15], {opacity:0, duration:16},{opacity: 100,}) //notice that there's no semicolon!
tl.from(allbox[16], {opacity:0, duration:16},{opacity: 100,}) //notice that there's no semicolon!
tl.from(allbox[17], {opacity:0, duration:16},{opacity: 100,}) //notice that there's no semicolon!
tl.from(allbox[18], {opacity:0, duration:16},{opacity: 100,}) //notice that there's no semicolon!


gsap.from(boxlive, {
    opacity: 0, 
    x: -20000, 
    duration: 1
  });