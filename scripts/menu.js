clickMenuIcon();

function clickMenuIcon(){
    let isHiddenMenuNav = true;
    let menuIcon = document.getElementById("menu-icon");
    menuIcon.onclick = function(){
        if(isHiddenMenuNav){
            showMenuNavigation();
            isHiddenMenuNav = false;
        }else{
            hiddenMenuNavigation();
            isHiddenMenuNav = true;
        }
    }
}

function hiddenMenuNavigation(){
    let menuNav = document.getElementById("menu");
    menuNav.setAttribute("style","right:-200px;");
}

function showMenuNavigation(){
    let menuNav = document.getElementById("menu");
    menuNav.setAttribute("style","right:0px;");
}
