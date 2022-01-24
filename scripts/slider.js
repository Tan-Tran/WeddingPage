slider();

function slider(){
    setImageSliderFullScreen();
    slideShow();
}

function setImageSliderFullScreen(){
    let windowHeight    = window.outerHeight;
    let imageSlider   = document.getElementsByClassName("wedding-image-slider")[0];
    imageSlider.setAttribute("style","height: " + windowHeight + "px");
}

function slideShow(){
    let imageSlideShowList = document.getElementsByClassName("image-slideshow");
    let currentImageIndex = 0;
    let nextImageIndex;
    let preImageIndex;
    setInterval(function(){
        preImageIndex = currentImageIndex - 1;
        nextImageIndex = currentImageIndex + 1;
        if(preImageIndex >= 0){
            imageSlideShowList[preImageIndex].style.zIndex = -30;
        }
        imageSlideShowList[currentImageIndex].style.zIndex = -20;
        if(window.getComputedStyle(imageSlideShowList[0]).getPropertyValue("z-index") == -20){
            imageSlideShowList[imageSlideShowList.length-1].style.zIndex = -30;
        }
        if(nextImageIndex == imageSlideShowList.length){
            increaseOpacity(imageSlideShowList[0]);
            imageSlideShowList[0].style.zIndex = -10;
        } else{
            increaseOpacity(imageSlideShowList[nextImageIndex]);
            imageSlideShowList[nextImageIndex].style.zIndex = -10;
        }        
        currentImageIndex++;
        if(currentImageIndex === imageSlideShowList.length){
            currentImageIndex = 0;
        }
    }, 3500);    
}

function increaseOpacity(image){
    let start = 0;
    let step = 0.015;
    let newOpacity = setInterval(function(){
        if(start < 1){
            start = start + step;
            image.style.opacity = start;
        }else{
            clearInterval(newOpacity);
        }
    }, 10);
}

// export default slider;
