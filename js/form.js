
    
function function1() {
    
    $("forma").on("submit",function() {
        $("forma").remove();
    });
    const myForm = document.querySelector('#forma');
    const nameInput = document.querySelector('#name');
    const lastNameInput = document.querySelector('#lastname');
    const adressInput=document.querySelector('#adress');
    const cityInput = document.querySelector('#city');
    const dateOfBirthInput = document.querySelector('#dateOfBirth');
    const msg = document.querySelectorAll('.msg');
    const msgPol =document.querySelectorAll('.msgPol');
    const msgSubmit=document.querySelectorAll('.msgSubmit');
    
    

    if(nameInput.value==''){
        msg[0].classList.add('greska');
        msg[0].innerHTML='*Molimo vas popunite neophodno polje za ime*';
    } else{
            msg[0].innerHTML="Ispravno";}
    
    if(lastNameInput.value==''){
        msg[1].classList.add('greska2');
        msg[1].innerHTML='*Molimo vas popunite neophodno polje za prezime*';
    }else{ 
            msg[1].innerHTML="Ispravno";}
    
    if(adressInput.value==''){
        msg[2].classList.add('greska3');
        msg[2].innerHTML='*Molimo vas popunite neophodno polje za adresu*';
    }else{
        msg[2].innerHTML="Ispravno";}
            
    if(cityInput.value==''){
            msg[4].classList.add('greska4');
            msg[4].innerHTML='*Molimo vas popunite neophodno polje za grad*';
     }else{
            msg[4].innerHTML="Ispravno";}
                  
     if(dateOfBirthInput.value==''){
        msg[3].classList.add('greska5');
        msg[3].innerHTML='*Molimo vas popunite neophodno polje za datum rodjenja*';
     }else{
        msg[3].innerHTML="Ispravno";}          

    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var vrednost;
    if (male.checked == false && female.checked==false) {
        msgPol[0].classList.add('greska9');
        msgPol[0].innerHTML='*Molimo vas popunite neophodno polje za pol*';
        
      }else{

        msgPol[0].innerHTML='Ispravno'
      }

      var radios = document.getElementsByName('genderS');
      var gender;
      for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
          if(radios[i].value==1){
              gender='Muško';
          }else 
          gender='Žensko';
          
        }
      }

      $('form').submit(function(e) { 
      e.preventDefault();
      $(this).hide(); 
      msgSubmit[0].classList.add('uspeh');
      msgSubmit[0].innerHTML= `Uspešno ste se prijavili sa sledecim informacijama:<br> 
      <br>
      Ime: ${nameInput.value} <br> 
      Prezime: ${lastNameInput.value}<br> 
      Adresa: ${adressInput.value}<br>
      Datum rodjenja: ${dateOfBirthInput.value}<br> 
      Grad: ${cityInput.value}<br> 
      Pol: ${gender}<br>
      
     `;

  })


    }
  
