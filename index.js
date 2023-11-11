var FirstName = document.querySelector('#FName');
var LastName = document.querySelector('#LName');
var Email = document.querySelector('#email');
var Password = document.querySelector('#🔐');
var Default = document.querySelector('button');
// let warning = document.querySelectorAll('i');


Default.addEventListener('click', function(e){
  
  e.preventDefault();
    formValidation ();
  
});
function formValidation(){
    if (FirstName.value.trim()=== ""){
      errorValidation(FirstName, '<em>First Name cannot be empty</em>');
      
    }
    else {
     successValidation(FirstName);
    }
    if (LastName.value.trim()===""){
        errorValidation(LastName, '<em>Last Name cannot be empty</em>')
    }
    else{
        successValidation(LastName)
    }
    if (Email.value.trim()===""){
        errorValidation(Email, "<em>Email cannot be empty</em>")
    }
    else {
        if (!isValid(Email.value.trim())){
            errorValidation(Email, '<em>Looks like this is not an email</em>');
            errorMailMsg()
        }        else{
            successValidation(Email)
        }  
    }

    if (Password.value.trim()===""){
        errorValidation(Password, '<em>Password cannot be empty</em>')
    }
    else{
        successValidation(Password)
    }
}


function errorValidation(input, message){    
      let field =   input.parentElement.lastElementChild;
     input.style.borderColor = " hsl(0, 100%, 74%)";
     input.setAttribute("placeholder", '');
     field.innerHTML = message;
     input.parentElement.querySelector("i").style.visibility = 'visible'
   
    }

function errorMailMsg(){
    Email.style.color = " hsl(0, 100%, 74%)"
}
function successMailMsg(){
     Email.style.color = "black"
}

function isValid(emailValidity){
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailValidity);
}

function successValidation(input){
    let field =   input.parentElement.lastElementChild;
    field.style.visibility = "hidden";
    input.style.borderColor = "black";
    input.parentElement.querySelector("i").style.visibility = 'hidden'
    
}


    