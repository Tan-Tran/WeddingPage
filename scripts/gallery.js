let currentIndexModal = 0;

const imageList = [
    "../images/gallery/1.jpg",
    "../images/gallery/2.jpg",
    "../images/gallery/3.jpg",
    "../images/gallery/4.jpg",
    "../images/gallery/5.jpg",
    "../images/gallery/6.jpg"
];

gallery();

function gallery(){
    addViewImageModalFunction();
    existModal();
    hiddenModalByCloseButton();
}

function addViewImageModalFunction(){
    let figureList = document.querySelectorAll(".gallery #figure-list figure");
    for(let imageIndex = 0; imageIndex < imageList.length; imageIndex++){
        let image = figureList[imageIndex].querySelector("img");
        image.style.cursor = "pointer";
        image.setAttribute("onclick","viewImage(" + imageIndex + ")");
    }
}

function viewImage(imageIndex){
    showGrayBackGroundModal();
    showModalOverLay();
    showModal();
    hiddenVerticalScrollBar();
    viewNextModal(imageIndex);
    showIndexModal(imageIndex);
    currentIndexModal = imageIndex;
}

function existModal(){
    let modelPhotoStackLayoutAbove = document.getElementsByClassName("modal-photostack-layout-above")[0];
    modelPhotoStackLayoutAbove.addEventListener("click", () => {
        hiddenModalOverLay();
        hiddenModal();
        showVerticalScrollBar();
    });
}

function showIndexModal(imageIndex){
    let imageCounter = document.getElementsByClassName("modal-counter")[0];
    let indexModal = imageIndex + 1;
    imageCounter.innerHTML = indexModal + " of 12";
}

function nextModal(n){
    currentIndexModal += n;

    if(currentIndexModal < 0){
        currentIndexModal = 11;
    }

    if(currentIndexModal > 11){
        currentIndexModal = 0;
    }
    
    if(currentIndexModal > 5 && currentIndexModal < 12){
        showErrorMessageWhenLoadFailModal(currentIndexModal+1);
    }else{
        viewNextModal(currentIndexModal);
        showIndexModal(currentIndexModal);
    }    
}

function viewNextModal(imageIndex){
    let image = document.querySelector(".modal-photostack-content img");
    image.src = imageList[imageIndex];
    image.setAttribute("onclick", "nextModal(" + 1 + ")");
    showExistButtonModal();
    showImageModal();
    showIndexInfoModal();
    hiddenErrorMessageLoadingImage();
}

function hiddenModalByCloseButton(){
    let closeButton = document.getElementsByClassName("close-btn")[0];
    closeButton.addEventListener("click", () =>{
        hiddenGrayBackGroundModal();
        hiddenModalOverLay();
        hiddenModal();
        showVerticalScrollBar();
    })
}


function hiddenErrorMessageLoadingImage(){
    let errorTitle = document.getElementsByClassName("modal-error-title")[0];
    errorTitle.style.display = "none";
}

function showErrorMessageWhenLoadFailModal(indexModal){
    let errorTitle = document.getElementsByClassName("modal-error-title")[0];
    errorTitle.textContent = "The image #" + indexModal + " could not be found be load";
    errorTitle.style.display = "block";
    hiddenExistButtonModal();
    hiddenImageModal();
    hiddenIndexInfoModal();
}

function hiddenModalGallery(){
    hiddenBackGroundModal();
    hiddenModal();
    showVerticalScrollBar();
}

document.addEventListener("keydown", (e)  => {
    if(e.key == "Escape"){
        hiddenModalGallery();
    }        
})

function showExistButtonModal(){
    let closeButton = document.getElementsByClassName("close-btn")[0];
    closeButton.style.display = "block";
}

function hiddenExistButtonModal(){
    let closeButton = document.getElementsByClassName("close-btn")[0];
    closeButton.style.display = "none";
}

function showImageModal(){
    let imageModal= document.getElementsByClassName("image-modal-photostack")[0];
    imageModal.style.display = "block";
}

function hiddenImageModal(){
    let imageModal= document.getElementsByClassName("image-modal-photostack")[0];
    imageModal.style.display = "none";
}

function showIndexInfoModal(){
    let imageCounterTitle = document.getElementsByClassName("modal-counter")[0];
    imageCounterTitle.style.display = "block";
}

function hiddenIndexInfoModal(){
    let imageCounterTitle = document.getElementsByClassName("modal-counter")[0];
    imageCounterTitle.style.display = "none";
}

function showGrayBackGroundModal(){
    let modalPhotoStackLayoutAbove = document.getElementsByClassName("modal-photostack-layout-above")[0];
    modalPhotoStackLayoutAbove.style.display = "block";
}

function hiddenGrayBackGroundModal(){
    let modalPhotoStackLayoutAbove = document.getElementsByClassName("modal-photostack-layout-above")[0];
    modalPhotoStackLayoutAbove.style.display = "block";
}

function showModalOverLay(){
    let modalPhotoStackOverlay = document.getElementsByClassName("modal-photostack-overlay")[0];
    modalPhotoStackOverlay.style.display = "block";
}

function hiddenModalOverLay(){
    let modalPhotoStackOverlay = document.getElementsByClassName("modal-photostack-overlay")[0];
    modalPhotoStackOverlay.style.display = "none";
}

function showModal(){
    let modalPhotoStackContainer = document.getElementsByClassName("modal-photostack-container")[0];
    modalPhotoStackContainer.style.display = "block";
}

function hiddenModal(){
    let modalPhotoStackContainer = document.getElementsByClassName("modal-photostack-container")[0];
    modalPhotoStackContainer.style.display = "none";
}

function hiddenBackGroundModal(){
    let modalPhotoStackOverlay = document.getElementsByClassName("modal-photostack-overlay")[0];
    modalPhotoStackOverlay.style.display = "none";
}
    
function showVerticalScrollBar(){
    let body = window.document.body;
    body.style.overflowY = "scroll";
}

function hiddenVerticalScrollBar(){
    let body = window.document.body;
    body.style.overflowY = "hidden";
}

// export default gallery;
