window.addEventListener("scroll", () =>{
    if(window.scrollY > 99){
        document.getElementById('navbar').classList.add('revealtrue', 'apparition')
        console.log(window.scrollY)
    }
   
})
ongletun = document.getElementById('btnpresentation');
ong2 = document.getElementById('btnskill');
ong3 = document.getElementById('btnformation');
ong4 = document.getElementById('btndiplomes');

var p = document.getElementById("foo");
  // NOTE: showAlert(); ou showAlert(param); NE fonctionne PAS ici.
  // Il faut fournir une valeur de type function (nom de fonction déclaré ailleurs ou declaration en ligne de fonction).
  p.onclick = showAlert;

   
