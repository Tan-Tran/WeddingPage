clickRegisterWeddingFormButton();
closeSucessInformRegisterWeddingForm();

function clickRegisterWeddingFormButton(){
    let btn = document.getElementById("register-wedding-button");
    btn.addEventListener("click", () =>{
        if(checkInputNameRegisterWeddingForm()){
            displaySucessInformRegisterWeddingForm("block");
        }else{
            displaySucessInformRegisterWeddingForm("none");
        }
    })        
}

function displaySucessInformRegisterWeddingForm(value){
    let informSucess = document.getElementById("register-wedding-form-success");
    informSucess.style.display = value;
}

function closeSucessInformRegisterWeddingForm(){
    let informSucess = document.getElementById("register-wedding-form-success");
    informSucess.addEventListener("click", function() {
        informSucess.style.display = "none";
    })    
}

function checkInputNameRegisterWeddingForm(){
    let inputName = document.querySelector(".wedding-register #name");
    if(!inputName.value.trim()){
        inputName.focus();
        changeBorderInputWeddingForm(inputName);
        changeBackGroundInputWeddingForm(inputName);
        displayMissingNameLabelWeddingForm("inline-block");
        changeOpacityButtonWeddingForm(0.65)
        changeDisablePropertyButtonWeddingForm(false);
        return false;
    }
    displayMissingNameLabelWeddingForm("none");
    return checkSelectOptionRegisterWeddingForm();
}   

function checkSelectOptionRegisterWeddingForm(){
    let isSelected = false;
    let options = document.getElementsByName("attend-wedding");
    for(let i = 0; i < options.length; i++){
        if(options[i].checked){
            isSelected = true;
            break;
        } 
    }
    if(isSelected != true){
        displayMissingSelectOptionLabelWeddingForm("inline-block");
        changeOpacityButtonWeddingForm(0.65)
        changeDisablePropertyButtonWeddingForm(false);
        return false;
    }
    displayMissingSelectOptionLabelWeddingForm("none");
    return checkEmailWeddingForm();
}

function checkEmailWeddingForm(){
    let inputEmail = document.querySelector(".wedding-register #email");
    if(!inputEmail.value.trim() || !isValidEmail(inputEmail.value.trim())){
        inputEmail.focus();
        changeBorderInputWeddingForm(inputEmail);
        changeBackGroundInputWeddingForm(inputEmail);
        displayMissingEmailLabelWeddingForm("inline-block");
        changeOpacityButtonWeddingForm(0.65)
        changeDisablePropertyButtonWeddingForm(false);
        return false;
    }
    displayMissingEmailLabelWeddingForm("none");
    return checkMissingGuestWeddingForm();
}

function checkMissingGuestWeddingForm(){
    let inputGuest = document.querySelector(".wedding-register #guest");
    if(!inputGuest.value.trim()){
        inputGuest.focus();
        changeBorderInputWeddingForm(inputGuest);
        changeBackGroundInputWeddingForm(inputGuest);
        displayMissingGuestLabelWeddingForm("inline-block");
        changeOpacityButtonWeddingForm(0.65)
        changeDisablePropertyButtonWeddingForm(false);
        return false;
    }
    displayMissingGuestLabelWeddingForm("none");
    return checkMissingTextAreaWeddingForm();
}

function checkMissingTextAreaWeddingForm(){
    let inputTextArea = document.querySelector(".wedding-register #textarea-message");
    if(!inputTextArea.value.trim()){
        inputTextArea.focus();
        changeBorderInputWeddingForm(inputTextArea);
        changeBackGroundInputWeddingForm(inputTextArea);
        displayMissingTextAreaLabelWeddingForm("inline-block");
        changeOpacityButtonWeddingForm(0.65)
        changeDisablePropertyButtonWeddingForm(false);
        return false;
    }
    displayMissingTextAreaLabelWeddingForm("none");
    return true;
}

function displayMissingNameLabelWeddingForm(value){
    let missingNameLabel = document.querySelector(".wedding-register #missing-name");
    missingNameLabel.style.display = value;
}

function displayMissingSelectOptionLabelWeddingForm(value){
    let missingSelectOptionLabel = document.querySelector(".wedding-register #missing-select-option");
    missingSelectOptionLabel.style.display = value;
}

function displayMissingEmailLabelWeddingForm(value){
    let missingEmailLabel = document.querySelector(".wedding-register #missing-email");
    missingEmailLabel.style.display = value;
}

function displayMissingGuestLabelWeddingForm(value){
    let missingGuestLabel = document.querySelector(".wedding-register #missing-guest");
    missingGuestLabel.style.display = value;
}

function displayMissingTextAreaLabelWeddingForm(value){
    let missingTextDescription = document.querySelector(".wedding-register #missing-textarea-message");
    missingTextDescription.style.display = value;
}

function disableButtonWeddingForm(){
    changeOpacityButtonWeddingForm(1);
}

function changeOpacityButtonWeddingForm(value){
    let btn = document.getElementById("register-wedding-button");
    btn.style.opacity = value;
}

function changeDisablePropertyButtonWeddingForm(value){
    let btn = document.getElementById("register-wedding-button");
    btn.disabled = value;
}

function isDisableButtonWeddingForm(){
    let btn = document.getElementById("register-wedding-button");
    return btn.disabled;
}

// reference MinhLe source
function isValidEmail(email){
    const word = '\\w+([\\.]?\\w+)';
    const sign = '@';
    const domain = '(\\.\\w{2,3})+';
    const concatPattern = '^' + word + '*' + sign + word + '*' + domain + '$';
    const pattern = new RegExp(concatPattern, 'g');
    return pattern.test(email);
}

function changeCursorButtonWeddingForm(value){
    let btn = document.getElementById("register-wedding-button");
    btn.style.cursor = value;
}

function changeBorderInputWeddingForm(e){
    e.style.border = "2px solid rgb(222, 103, 95)";
}

function changeBackGroundInputWeddingForm(e){
    e.style.background = "#ffffff";
}
