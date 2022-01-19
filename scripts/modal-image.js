addViewModalImageFunction();
zoomOutModalImageBackToPhotoStack();
closeModelImageByCloseButton();

const numberOfModalImage = 12;

const sourceModalImages = [
    "images/galllery/1.jpg",
    "images/galllery/2.jpg",
    "images/galllery/3.jpg",
    "images/galllery/4.jpg",
    "images/galllery/5.jpg",
    "images/galllery/6.jpg",
]

let currentIndexPhotoStack = 0;

function addViewModalImageFunction(){
    let figureList = document.querySelectorAll(".gallery #figure-list figure");
    for(let i = 0; i < numberOfDotGallery; i++){
        let image = figureList[i].querySelector("img");
        image.style.cursor = "pointer";
        image.setAttribute("onclick","clickViewModalImage(" + i + ")");
    }
}

function clickViewModalImage(current){
    displayPhotoStackLayoutAbove("block");
    displayModalPhotoStackOverLay("block");
    displayModalPhotoStackContainer("block");
    changeOverFlow_YScreen("hidden");
    changeCursorPhotoStackLayoutAbove("zoom-out");
    changeImageModalPhotoStack(current);
    updateTitleImageCounter(current);
    currentIndexPhotoStack = current;
}

function zoomOutModalImageBackToPhotoStack(){
    let modelPhotoStackLayoutAbove = document.getElementsByClassName("modal-photostack-layout-above")[0];
    modelPhotoStackLayoutAbove.addEventListener("click", () => {
        displayModalPhotoStackOverLay("none");
        displayModalPhotoStackContainer("none");
        changeOverFlow_YScreen("scroll");
    });
}

function updateTitleImageCounter(current){
    let imageCounter = document.getElementsByClassName("imge-counter")[0];
    imageCounter.innerHTML = (current+1) + " of 12";

}

function nextModalImage(n){
    currentIndexPhotoStack += n;

    if(currentIndexPhotoStack < 0){
        currentIndexPhotoStack = 11;
    }

    if(currentIndexPhotoStack > 11){
        currentIndexPhotoStack = 0;
    }
    
    if(currentIndexPhotoStack > 5 && currentIndexPhotoStack < 12){
        showPreLoaderTitle(currentIndexPhotoStack+1);
    }else{
        changeImageModalPhotoStack(currentIndexPhotoStack);
        updateTitleImageCounter(currentIndexPhotoStack);
    }    
}

function changeImageModalPhotoStack(current){
    let image = document.querySelector(".modal-photostack-content img");
    image.src = sourceModalImages[current];
    image.setAttribute("onclick", "nextModalImage(" + 1 + ")");
    displayCloseButtonModalImage("block");
    displayImageModal("block");
    displayImageCounterTitle("block");
    displayPreLoaderTitle("none");
}

function closeModelImageByCloseButton(){
    let closeButton = document.getElementsByClassName("close-btn")[0];
    closeButton.addEventListener("click", () =>{
        displayPhotoStackLayoutAbove("none");
        displayModalPhotoStackOverLay("none");
        displayModalPhotoStackContainer("none");
        changeOverFlow_YScreen("scroll");
    })
}

document.addEventListener("keydown", (e)  => {
        if(e.key == "Escape"){
            displayModalPhotoStackOverLay("none");
            displayModalPhotoStackContainer("none");
            changeOverFlow_YScreen("scroll");
        }        
})

function showPreLoaderTitle(current){
    let preLoaderTitle = document.getElementsByClassName("preloader-title")[0];
    preLoaderTitle.textContent = "The image #" + current + " could not be found be load";
    displayCloseButtonModalImage("none");
    displayImageModal("none");
    displayImageCounterTitle("none");
    displayPreLoaderTitle("block");
}

function displayModalPhotoStackOverLay(value){
    let modalPhotoStackOverlay = document.getElementsByClassName("modal-photostack-overlay")[0];
    modalPhotoStackOverlay.style.display = value;
}

function displayModalPhotoStackContainer(value){
    let modalPhotoStackContainer = document.getElementsByClassName("modal-photostack-container")[0];
    modalPhotoStackContainer.style.display = value;
}

function displayPhotoStackLayoutAbove(value){
    let modalPhotoStackLayoutAbove = document.getElementsByClassName("modal-photostack-layout-above")[0];
    modalPhotoStackLayoutAbove.style.display = value;
}

function changeOverFlow_YScreen(value){
    let body = window.document.body;
    body.style.overflowY = value
}

function changeCursorPhotoStackLayoutAbove(value){
    let modalPhotoStackLayoutAbove = document.getElementsByClassName("modal-photostack-layout-above")[0];
    modalPhotoStackLayoutAbove.style.cursor = value;
}

function displayCloseButtonModalImage(value){
    let closeButton = document.getElementsByClassName("close-btn")[0];
    closeButton.style.display = value;
}

function displayImageModal(value){
    let imageModal= document.getElementsByClassName("image-modal-photostack")[0];
    imageModal.style.display = value;
}

function displayImageCounterTitle(value){
    let imageCounterTitle = document.getElementsByClassName("imge-counter")[0];
    imageCounterTitle.style.display = value;
}

function displayPreLoaderTitle(value){
    let preLoaderTitle = document.getElementsByClassName("preloader-title")[0];
    preLoaderTitle.style.display = value;
}
