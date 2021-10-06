target = document.getElementsByClassName('');
window.addEventListener("scroll", () =>{
    if(window.scrollY > 99){
        document.getElementById('navbar').classList.add('revealtrue', 'apparition')
        console.log(window.scrollY)
    }
    // if(window.scrollY > 299){
    //     document.getElementById('presentation').classList.add('revealtrue', 'apparition')
    // }
    // if(window.scrollY > 539){
    //     document.getElementById('skills').classList.add('revealtrue', 'apparitionreverse')
    // }
    // if(window.scrollY > 799){
    //     document.getElementById('formation').classList.add('revealtrue', 'apparition')
    // }
    // if(window.scrollY > 999){
    //     document.getElementById('diplome').classList.add('revealtrue', 'apparitionreverse')
    // }
})
Onglet1 = document.getElementById('btnpresentation');
Onglet2 = document.getElementById('btnskill');
Onglet3 = document.getElementById('btndiplomes');
onglet4 = document.getElementById('')
