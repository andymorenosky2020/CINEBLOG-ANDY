const form = document.getElementById("form")
const email = document.getElementById("email")
const password = document.getElementById("password")


    form.addEventListener("submit", e=>{
        e.preventDefault()
        if (email.value == "luisduran1710@gmail.com" && password.value == "1234"){
            setTimeout( function() { window.location.href = "Portafolio.html"; }, 1000 );
        }
        else{
            alert("Datos Incorrectos")
        }
      
        
    })
