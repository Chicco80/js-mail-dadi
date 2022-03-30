
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
      
         let giocatore1 = Math.floor(Math.random() * 6) +1;
         let giocatore2= Math.floor(Math.random() * 6) +1;


         document.getElementById("ris").innerHTML =`<p>giocatore 1: ${giocatore1}</p> <p>giocatore 2: ${giocatore2}</p>`;

         console.log(giocatore1);
         if( giocatore1 < giocatore2){
            
            ris.innerHTML=(  giocatore2 +" " +"giocatore2 ha vinto")
      

         }else if( giocatore1 > giocatore2 ){
            ris.innerHTML=(  giocatore1 +" " +"giocatore1 ha vinto")


         }else{
            ris.innerHTML="pari";
         }

     }
     
  



    
