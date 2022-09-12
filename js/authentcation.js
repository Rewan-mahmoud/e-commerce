let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let email = document.getElementById("email")
let password = document.getElementById("password")
let signUpBtn = document.getElementById("signUpBtn")
let passError = document.getElementById("passError")
let container=[];

if (localStorage.getItem("information") !==null)
{
container = JSON.parse(localStorage.getItem("information")) 
}
else{
    container=[];
}

signUpBtn.addEventListener("click",function register(){

  if (validation()==true)
  {
   var  information={
        firstname:firstName.value,
        lastname:lastName.value,
        email:email.value,
        password:password.value,

      }

  container.push(information)
  localStorage.setItem("information", JSON.stringify(container));
  window.location.href="/index.html"
}



    });
    

    // signup validation
let regexName = /^[A-Za-z]+(((\'|\-|\.)?([A-Za-z])+))?$/;
 let regexlastName = /^[A-Za-z]+(((\'|\-|\.)?([A-Za-z])+))?$/;
let regexemail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let regexPass = /([A-z]){8,}$/;

function validation(){

  if (regexName.test(firstName.value)){
    firstName.classList.add("is-valid")
    firstName.classList.remove("is-invalid")

  }
  
 else{
    firstName.classList.add("is-invalid")
  }


  // lastname
  if (regexlastName.test(lastName.value)){
    lastName.classList.add("is-valid")
    lastName.classList.remove("is-invalid")

  }
 else{
  lastName.classList.add("is-invalid")
  
  }

// >>>>>>>>>>>>>>>>>

// email
  if (regexemail.test(email.value)){
    email.classList.add("is-valid")
    email.classList.remove("is-invalid")

  }


 else{
  email.classList.add("is-invalid")
  }

 // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

  if (regexPass.test(password.value)){
    password.classList.add("is-valid")
    password.classList.remove("is-invalid")
    passError.classList.add("d-none")
  }

 else{
  password.classList.add("is-invalid")
  passError.classList.remove("d-none")
  }

  if ((regexName.test(firstName.value)) && (regexlastName.test(lastName.value)) && (regexPass.test(password.value)) && (regexemail.test(email.value)))
  {
      return true;
  }
}
