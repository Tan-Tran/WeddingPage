
let windowHeight    = window.outerHeight;
let weddingSlider   = document.getElementsByClassName("wedding-image-slider")[0];
weddingSlider.setAttribute("style","height: " + windowHeight + "px");

slideShow();

function slideShow(){
    let imageSlideShowList = document.getElementsByClassName("image-slideshow");
    let start = 0;
    let next;
    let pre;
    setInterval(function(){
        pre = start - 1;
        next = start + 1;
        if(pre >= 0){
            imageSlideShowList[pre].style.zIndex = -30;
        }
        imageSlideShowList[start].style.zIndex = -20;
        if(window.getComputedStyle(imageSlideShowList[0]).getPropertyValue("z-index") == -20){
            imageSlideShowList[imageSlideShowList.length-1].style.zIndex = -30;
        }
        if(next == imageSlideShowList.length){
            changeOpacity(imageSlideShowList[0]);
            imageSlideShowList[0].style.zIndex = -10;
        } else{
            changeOpacity(imageSlideShowList[next]);
            imageSlideShowList[next].style.zIndex = -10;
        }        
        start++;
        if(start === imageSlideShowList.length){
            start = 0;
        }
    }, 3500);    
}

function changeOpacity(e){
    let start = 0;
    let step = 0.015;
    let increaseOpacity = setInterval(function(){
        if(start < 1){
            start = start + step;
            e.style.opacity = start;
        }else{
            clearInterval(increaseOpacity);
        }
    }, 10);
}
