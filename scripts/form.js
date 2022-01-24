form();

function form(){
    submitForm();
}

function submitForm(){
    let form = document.getElementById("wedding-form");
    form.onsubmit = (event) =>{
        event.preventDefault();
        if(validateForm()){
            showSuccessMessageRegisterWeddingForm();
            hideSuccessInformRegisterWeddingFormByExistButton();
        }
    }        
}

function validateForm(){
    if(
    validateInputNameWeddingForm() &&
    validateSelectOptionWeddingForm() &&
    validateInputEmailWeddingForm() &&
    validateInputGuestWeddingForm() &&
    validateTextAreaWeddingForm()){
        return true;
    }
    return false;
}

function showSuccessMessageRegisterWeddingForm(){
    let messageSuccess = document.getElementById("register-wedding-form-success");
    messageSuccess.style.display = "block";
}

function hideSuccessInformRegisterWeddingFormByExistButton(){
    let btn = document.getElementById("close-success-inform-btn");    
    btn.onclick = () =>{
        let messageSuccess = document.getElementById("register-wedding-form-success");  
        messageSuccess.style.display = "none";
    } 
}

function hideSuccessInformRegisterWeddingForm(){
    let messageSuccess = document.getElementById("register-wedding-form-success");  
    messageSuccess.style.display = "none";
}

function validateInputNameWeddingForm(){
    if(isInputNameWeddingFormEmpty()){
        showErrorInputNameWeddingForm();
        hideSuccessInformRegisterWeddingForm();
        return false;
    }
    hideErrorInputNameWeddingForm();
    return true;
}

function isInputNameWeddingFormEmpty(){
    let inputName = document.querySelector(".wedding-register #name");
    if(!inputName.value.trim()){
        return true;
    }
    return false;
}

function validateSelectOptionWeddingForm(){
    if(isSelectOptionWeddingFormEmpty()){
        showErrorSelectOptionWeddingForm();
        hideSuccessInformRegisterWeddingForm();
        return false;
    }
    hideErrorSelectOptionWeddingForm();
    return true;
}

function isSelectOptionWeddingFormEmpty(){
    let options = document.getElementsByName("attend-wedding");
    for(let i = 0; i < options.length; i++){
        if(options[i].checked){
            return false;
        } 
    }
    return true;
}

function validateInputEmailWeddingForm(){
    if(!isInputEmailWeddingFormValid()){
        showErrorEmailWeddingForm("Email is not correct");
        hideSuccessInformRegisterWeddingForm();
        return false;
    }
    hideErrorEmailWeddingForm();
    return true;
}

function isInputEmailWeddingFormValid(){
    let inputEmail = document.querySelector(".wedding-register #email");
    if(!isValidEmail(inputEmail.value.trim())){
        return false;
    }
    return true;
}

function validateInputGuestWeddingForm(){
    if(isInputGuestWeddingFormEmpty()){
        showErrorInputGuestWeddingForm();
        hideSuccessInformRegisterWeddingForm();
        return false;
    }
    hideErrorInputGuestWeddingForm();
    return true;
}

function isInputGuestWeddingFormEmpty(){
    let inputGuest = document.querySelector(".wedding-register #guest");
    if(!inputGuest.value.trim()){
        return true;
    }
    return false;
}

function validateTextAreaWeddingForm(){
    if(isTextAreaWeddingFormEmpty()){
        showMissingTextAreaInputWeddingForm();
        hideSuccessInformRegisterWeddingForm();
        return false;
    }
    hideErrorTextAreaInputWeddingForm();
    return true;
}

function isTextAreaWeddingFormEmpty(){
    let inputTextArea = document.querySelector(".wedding-register #textarea-message");
    if(!inputTextArea.value.trim()){
        return true;
    }
    return false;
}

function hideErrorInputNameWeddingForm(){
    let missingNameLabel = document.querySelector(".wedding-register #missing-name");
    missingNameLabel.style.display = "none";
}

function showErrorInputNameWeddingForm(){
    let missingNameLabel = document.querySelector(".wedding-register #missing-name");
    missingNameLabel.style.display = "inline-block";
}

function hideErrorSelectOptionWeddingForm(){
    let missingSelectOptionLabel = document.querySelector(".wedding-register #missing-select-option");
    missingSelectOptionLabel.style.display = "none";
}


function showErrorSelectOptionWeddingForm(){
    let missingSelectOptionLabel = document.querySelector(".wedding-register #missing-select-option");
    missingSelectOptionLabel.style.display = "inline-block";
}


function hideErrorEmailWeddingForm(){
    let missingEmailLabel = document.querySelector(".wedding-register #error-email");
    missingEmailLabel.style.display = "none";
}

function showErrorEmailWeddingForm(errorText){
    let missingEmailLabel = document.querySelector(".wedding-register #error-email");
    missingEmailLabel.textContent = errorText;
    missingEmailLabel.style.display = "inline-block";
}

function hideErrorInputGuestWeddingForm(){
    let missingGuestLabel = document.querySelector(".wedding-register #missing-guest");
    missingGuestLabel.style.display = "none";
}

function showErrorInputGuestWeddingForm(){
    let missingGuestLabel = document.querySelector(".wedding-register #missing-guest");
    missingGuestLabel.style.display = "inline-block";
}

function hideErrorTextAreaInputWeddingForm(){
    let missingTextDescription = document.querySelector(".wedding-register #missing-textarea-message");
    missingTextDescription.style.display = "none";
}

function showMissingTextAreaInputWeddingForm(){
    let missingTextDescription = document.querySelector(".wedding-register #missing-textarea-message");
    missingTextDescription.style.display = "inline-block";
}


function isValidEmail(email){
    const word = '\\w+([\\.-]?\w+)';
    const sign = '@';
    const domain = '(\\.\\w{2,3})+';
    const concatPattern = '^' + word + '*' + sign + word + '*' + domain + '$';
    const pattern = new RegExp(concatPattern, 'g');
    return pattern.test(email);
}

// export default form;

