
createDotListPhotoStack(numberOfDotGallery);
movePhotoStackRandom();
clickViewGallery();
movePhotoStackWhenScreenResize(0);

var dotGallery = {
    "background": "#aaa",
    "transform": "scale(0.48)"
}

var dotGallerytAfterClick = {
    "background": "#de675f",
    "transform": "scale(1)"
}

var galleryLayoutAboveAfterClick = {
    "cursor": "default",
    "visibility": "hidden",
    "opacity": 0,
    "zIndex": 0
}

function createDotListPhotoStack(numberOfDotGallery){
    let nav = document.getElementById("nav-photostack");
    for(var i = 0; i < numberOfDotGallery; i++){
        let dot = document.createElement("span");
        dot.className = "dot-item";
        dot.setAttribute("onclick","clickOnDot" + "(" + i + ")");
        nav.appendChild(dot);
    }
}

function movePhotoStackRandom(){
    let{widthPhotoStack, heightPhotoStack} = getWidthAndHeightPhotoStack();
    let figureList = document.querySelectorAll("#photostack figure");
    figureList.forEach((e) => {
        e.style.transform = "translate(" 
        + calculateVerticalCoordinateRandomValue(-100, widthPhotoStack + 100) + "px,"
        + calculateHorizontalCoordinateRandomValue(-100, heightPhotoStack + 100) + "px)"
        + "rotate(" + calculateRotateDegreeRandom() + "deg)";
    })
}

function clickViewGallery(){
    let galleryLayoutAbove = document.getElementById("gallery-layout-above");
    let isFirstDotReadyOnClick = true;
    galleryLayoutAbove.addEventListener("click", () => {
        changeGalleryLayoutAboveAfterClick(galleryLayoutAbove);
        changeVisibilityButtonGallery("hidden");
        changeOpacityNavigationPhotoStack(1);
        if(isFirstDotReadyOnClick){
            let dots = document.getElementsByClassName("dot-item");
            changeDotPhotoStackAfterClick(dots[0]);
            clickOnDot(0);
            isFirstDotReadyOnClick = false;
        }    
    });
}

function movePhotoStackWhenScreenResize(current){
    window.addEventListener("resize", () => {
        rotatePhotoStack(current);
    });
}

function clickOnDot(current){
    let dots = document.getElementsByClassName("dot-item");
    if(dots[current].id == ""){
        for(var i = 0; i < dots.length; i++){
            resetDefaultDotPhotoStack(dots[i]);
            dots[i].id = "";
        }
        changeDotPhotoStackAfterClick(dots[current]);
        rotatePhotoStack(current);
        movePhotoStackToCenter(current);
        dots[current].id += "active";
    }
    movePhotoStackWhenScreenResize(current);
}

function rotatePhotoStack(current){
    let figureList = document.querySelectorAll("#photostack figure");
    for(var i = 0; i < figureList.length; i++){
        figureList[i].style.transform = "translate("
         + calculateTranslateXValuePhotoStack() + "px,"
         + calculateTranslateYValuePhotoStack() + "px)" + "rotate(" 
         + calculateRotateDegreeRandom() + "deg)";
    }
    movePhotoStackToCenter(current);
}

function createRandomValue(min, max){
    return (Math.random() * (max - min + 1)) + min;
}

function calculateTranslateXValuePhotoStack(){
    let widthPhotoStack = getWidthAndHeightPhotoStack().widthPhotoStack;
    let min = -100;
    let max = widthPhotoStack + 100;
    let randomValue = createRandomValue(min, max);
    if(randomValue > (widthPhotoStack/2 - widthPhotoStack/3)){
        randomValue = randomValue -  widthPhotoStack/3 - 160;
    }
    if(randomValue < (widthPhotoStack/2 + widthPhotoStack/3) && randomValue > (widthPhotoStack/2 - widthPhotoStack/3)){
        randomValue = randomValue + widthPhotoStack/3 + 160;
    }
    return randomValue;    
}

function calculateTranslateYValuePhotoStack(){
    let heightPhotoStack = getWidthAndHeightPhotoStack().heightPhotoStack;
    let min = -100;
    let max = heightPhotoStack + 100;
    return calculateHorizontalCoordinateRandomValue(min, max);
}

function calculateRotateDegreeRandom(){
    return createRandomValue(-1,1) * 20;
}

function movePhotoStackToCenter(current){
    let figureList = document.querySelectorAll("#photostack figure");
    let {horizontalCenter, verticalCenter, nonRotate} = calculateCoordinateCenterPhotoStack();
    figureList[current].style.transform = "translate("
         + horizontalCenter + "px,"
         + verticalCenter + "px)" + "rotate(" 
         + nonRotate + "deg)";
}

function calculateCoordinateCenterPhotoStack(){
    let{widthPhotoStack, heightPhotoStack} = getWidthAndHeightPhotoStack();
    let horizontalCenter = widthPhotoStack/2 - 160;
    let verticalCenter = heightPhotoStack/2 - 180;
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

function calculateVerticalCoordinateRandomValue(minValue, maxValue){
    return createRandomValue(minValue, maxValue)
}

function calculateHorizontalCoordinateRandomValue(minValue, maxValue){
    return createRandomValue(minValue, maxValue)
}


function changeVisibilityButtonGallery(value){
    let btn = document.getElementById("btn-gallery");
    btn.style.visibility = value;
}

function changeOpacityNavigationPhotoStack(value){
    let nav = document.getElementById("nav-photostack");
    nav.style.opacity = value;
}


function changeDotPhotoStackAfterClick(dot){
    dot.style.background = dotGallerytAfterClick.background;
    dot.style.transform = dotGallerytAfterClick.transform;
}

function changeFirstDotPhotoStackAfterGalleryClick(){
    let dots = document.getElementsByClassName("dot-item");
    changeDotPhotoStackAfterClick(dots[0]);
}

function resetDefaultDotPhotoStack(dot){
    dot.style.background = dotGallery.background;
    dot.style.transform = dotGallery.transform;
}

function changeGalleryLayoutAboveAfterClick(galleryLayoutAbove){
    galleryLayoutAbove.style.cursor = galleryLayoutAboveAfterClick.cursor;
    galleryLayoutAbove.style.visibility = galleryLayoutAboveAfterClick.visibility;
    galleryLayoutAbove.style.opacity = galleryLayoutAboveAfterClick.opacity;
    galleryLayoutAbove.style.zIndex = galleryLayoutAboveAfterClick.zIndex;
}

