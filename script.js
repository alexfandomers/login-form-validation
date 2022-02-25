//let's get all required elemnts
const form = document.querySelector("form"),
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");

form.onsubmit = (e) => {
    e.preventDefault(); //preventing form from submiting 
    if(eInput.value == ""){ //if email is empty
        eField.classList.add("shake", "error");
    }else{
        checkEmail(); //calling checkEMmail function
    }
    if(pInput.value == ""){ //if password is empty
        pField.classList.add("shake", "error");
    }

    setTimeout(() =>{ //remove shake class after 500ms
        eField.classList.remove("shake")
        pField.classList.remove("shake")
    }, 500);   

    //lets work on input keyup
    eInput.onkeyup = ()=>{
        checkEmail(); //calling chekEmail function
    }

    //lets create a function
    function checkEmail(){
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;//pattern to validate email
        if(!eInput.value.match(pattern)){ //if pattern not matched with user entered value
            eField.classList.add("error");
            let errorTxt = eField.querySelector(".error-txt"); 
            //if email is not empty then Enter a valid email adress until valid else show email can't be blank
            (eInput.value != "") ? errorTxt.innerText = "Enter a valid email adress": errorTxt.innerText ="Email cant be blank";

        }else{
            eField.classList.remove("error");
        }
    }
    
    eInput.onkeyup = ()=>{
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;//pattern to validate email
        if(!eInput.value.match(pattern)){ //if pattern not matched with user entered value
            eField.classList.add("error");
            let errorTxt = eField.querySelector(".error-txt"); 
            //if email is not empty then Enter a valid email adress until valid else show email can't be blank
            (eInput.value != "") ? errorTxt.innerText = "Enter a valid email adress": errorTxt.innerText ="Email cant be blank";

        }else{
            eField.classList.remove("error");
        }
    }

    pInput.onkeyup = ()=>{        
        if(pInput.value){ //if pattern not matched with user entered value
            pField.classList.add("error");
        }else{
            pField.classList.remove("error");
        }
    }
//let wor on what to do after user filled up proper details
//if error class not contains in eField an pField the user entered proper details
if(!eField.classList.contains("error") && !pField.classList.contains("error")){
    window.location.href = "#"; //remove that # and put url where you want to submit the form data
    console.log("Form Submited")
}
}