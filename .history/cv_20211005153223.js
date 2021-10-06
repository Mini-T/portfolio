nav = document.getElementById('navbar')
window.addEventListener("scroll", () =>{
    if(window.scrollY > 99){
        document.getElementById('navbar').classList.add('revealtrue', 'apparition')
        console.log(window.scrollY)
    }
   
})
button1 = document.getElementById('btnpresentation');
button2 = document.getElementById('btnskill');
button3 = document.getElementById('btnformation');
button4 = document.getElementById('btndiplomes');

button1.addEventListener("click", () =>{
    nav.classList.remove('nav');
    nav.classList.add('navpresentationfocus');
    document.getElementById('btnpresentation').classList
    document.getElementById('btnskill').classList.add('hidden');
    document.getElementById('btnformation').classList.add('hidden');
    document.getElementById('btndiplomes').classList.add('hidden')
    
})

   
