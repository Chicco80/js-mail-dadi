

  const users = ['user1@gmail.com', 'user2@gmail.com', 'chicco@gmail.com'];

  let ok = false;

  document.getElementById("submit").addEventListener("clic", okMail);

  function okMail(){

    let userMail = document.getElementById("email").value;
   for(let i=0; i< users.length; i++){
      let emailVera = users[i];
      if (userMail === emailVera){
        ok = true;
      }
      console.log(ok,userMail,emailVera)
   }
    if(ok){
      alert("benvenuto");
   }else{
      alert("mail non valida")
    }
  }



    
