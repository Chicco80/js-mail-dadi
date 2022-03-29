
// creo array
  const users = ['user@gmail.com', 'userabac@gmail.com', 'chicco@gmail.com'];
//controllo
  let ok = false;
//bottone
  document.getElementById("submit").addEventListener("click", okMail);

  function okMail(){

    let userMail = document.getElementById("email").value;
   for(let i=0; i < users.length; i++){
      let emailVera = users[i];
      if (userMail === emailVera){
        ok = true;
      }
      console.log(ok,userMail,emailVera);
   }
    if(ok){
      alert("benvenuto");
   }else{
      alert("mail non valida")
    }
  }


  //gioco dadi

  document.getElementById("tira").addEventListener("click", tiraDado);

  function tiraDado(){
      
         let giocatore = Math.floor(Math.random() * 6) +1;
         let giocatore1= Math.floor(Math.random() * 6) +1;


         document.getElementById("ris").innerHTML =`<p>giocatore 1: ${giocatore}</p> <p>giocatore 2: ${giocatore1}</p>`;

         console.log(giocatore);
         if(giocatore<giocatore1)
         document.innerHTML=

     }
     
  



    
