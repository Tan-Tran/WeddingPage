const numberOfDot = 6;
const expandWidth = 100;

photostack();

function photostack(){
    createDotList(numberOfDot);
    translateAllImagesRandom();
    photoStackMode();
}

function createDotList(numberOfDot){
    let nav = document.getElementById("nav-photostack");
    for(let dotIndex = 0; dotIndex < numberOfDot; dotIndex++){
        let dot = document.createElement("span");
        dot.className = "dot-item";
        dot.setAttribute("onclick","viewFigure" + "(" + dotIndex + ")");
        nav.appendChild(dot);
    }
}

function translateAllImagesRandom(){
    let{widthPhotoStack, heightPhotoStack} = getWidthAndHeightPhotoStack();
    let figureList = document.querySelectorAll("#photostack figure");
    figureList.forEach((e) => {
        e.style.transform = "translate(" 
        + randomVerticalCoordinateValue(-expandWidth, widthPhotoStack + expandWidth) + "px,"
        + randomHorizontalCoordinateValue(-expandWidth, heightPhotoStack + expandWidth) + "px)"
        + "rotate(" + randomRotateValue() + "deg)";
    })
}

function photoStackMode(){
    let galleryLayoutAbove = document.getElementById("gallery-layout-above");
    let isFirstDotClicked = true;
    galleryLayoutAbove.addEventListener("click", () => {
        galleryLayoutAbove.style.cursor = "default";
        galleryLayoutAbove.style.visibility = "hidden";
        galleryLayoutAbove.style.opacity = 0;
        galleryLayoutAbove.style.zIndex = 0;
        hiddenButtonGallery();
        setMaxOpacityNavigationPhotoStack();
        if(isFirstDotClicked){
            viewFigure(0);
            isFirstDotClicked = false;
        }    
    });
}

function translateAllImagesWhenScreenResize(dotIndex){
    window.addEventListener("resize", () => {
        rotateOtherImage();
        translateImageCurrentDotToCenter(dotIndex);
    });
}

function viewFigure(dotIndex){
    let dot = document.getElementsByClassName("dot-item")[dotIndex];
    if(dot.id == ""){
        resetAllDot();
        setBackGroundColorDot(dot, "#de675f");
        setTransformDot(dot, 1);
        rotateOtherImage(dotIndex);
        translateImageCurrentDotToCenter(dotIndex);
        dot.id += "active";
    }
    translateAllImagesWhenScreenResize(dotIndex);
}

function resetAllDot(){
    let dots = document.getElementsByClassName("dot-item");
    for(let i = 0; i < dots.length; i++){
        setBackGroundColorDot(dots[i], "#aaa");
        setTransformDot(dots[i], 0.48);
        dots[i].id = "";
    }
}

function rotateOtherImage(){
    let figureList = document.querySelectorAll("#photostack figure");
    for(let i = 0; i < figureList.length; i++){
        figureList[i].style.transform = "translate("
         + calculateTranslateXValuePhotoStack() + "px,"
         + calculateTranslateYValuePhotoStack() + "px)" + "rotate(" 
         + randomRotateValue() + "deg)";
    }
}

function getRandomValue(min, max){
    return (Math.random() * (max - min + 1)) + min;
}

function calculateTranslateXValuePhotoStack(){
    let figure = document.querySelectorAll("#photostack figure")[0];
    let {widthPhotoStack} = getWidthAndHeightPhotoStack();
    let min = - expandWidth;
    let max = widthPhotoStack + expandWidth;
    let randomValue = getRandomValue(min, max);
    if(randomValue > (widthPhotoStack/2 - widthPhotoStack/3)){
        randomValue = randomValue -  widthPhotoStack/3 - figure.clientWidth/2;
    }
    if(randomValue < (widthPhotoStack/2 + widthPhotoStack/3) && randomValue > (widthPhotoStack/2 - widthPhotoStack/3)){
        randomValue = randomValue + widthPhotoStack/3 + figure.clientWidth/2;
    }
    return randomValue;    
}

function calculateTranslateYValuePhotoStack(){  
    let {heightPhotoStack} = getWidthAndHeightPhotoStack();
    let min = - expandWidth;
    let max = heightPhotoStack + expandWidth;
    return randomHorizontalCoordinateValue(min, max);
}

function randomRotateValue(){
    return getRandomValue(-1,1) * 20;
}

function translateImageCurrentDotToCenter(dotIndex){
    let figureList = document.querySelectorAll("#photostack figure");
    let {horizontalCenter, verticalCenter, nonRotate} = calculateCoordinateCenterPhotoStack();
    figureList[dotIndex].style.transform = "translate("
         + horizontalCenter + "px,"
         + verticalCenter + "px)" + "rotate(" 
         + nonRotate + "deg)";
}

function calculateCoordinateCenterPhotoStack(){
    let figure = document.querySelectorAll("#photostack figure")[0];
    let{widthPhotoStack, heightPhotoStack} = getWidthAndHeightPhotoStack();
    let horizontalCenter = widthPhotoStack/2 - figure.clientWidth/2;
    let verticalCenter = heightPhotoStack/2 - figure.clientHeight/2;
    let nonRotate = 0;
    return { 
        horizontalCenter: horizontalCenter, 
        verticalCenter: verticalCenter, 
        nonRotate: nonRotate
    };
}

function getWidthAndHeightPhotoStack(){
    let photoStack = document.getElementById("photostack");
    let widthPhotoStack = photoStack.offsetWidth;
    let heightPhotoStack = photoStack.offsetHeight;
    return {
        widthPhotoStack: widthPhotoStack,
        heightPhotoStack: heightPhotoStack
    }
}

function randomVerticalCoordinateValue(minValue, maxValue){
    return getRandomValue(minValue, maxValue)
}

function randomHorizontalCoordinateValue(minValue, maxValue){
    return getRandomValue(minValue, maxValue)
}


function hiddenButtonGallery(){
    let btn = document.getElementById("btn-gallery");
    btn.style.visibility = "hidden";
}

function setMaxOpacityNavigationPhotoStack(){
    let nav = document.getElementById("nav-photostack");
    nav.style.opacity = 1;
}

function setBackGroundColorDot(dot, value){
    dot.style.background = value;
}

function setTransformDot(dot, value){
    dot.style.transform = "scale(" + value + ")";
}

// export default photostack;