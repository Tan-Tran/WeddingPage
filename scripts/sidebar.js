sidebar();

function sidebar(){
    clickSideBarIcon();
}

function clickSideBarIcon(){
    let sideBarIcon = document.getElementById("sidebar-icon");
    let isHiddenSideBarNavigation = true;
    sideBarIcon.onclick = function() {
        if(isHiddenSideBarNavigation){
            showSideBarNavigation();
            isHiddenSideBarNavigation = false;
        }else{
            hiddenSideBarNavigation();
            isHiddenSideBarNavigation = true;
        }
    }
}

function hiddenSideBarNavigation(){
    let sidebarNavigation = document.getElementById("sidebar");
    sidebarNavigation.style.right = "-200px";
}

function showSideBarNavigation(){
    let sidebarNavigation = document.getElementById("sidebar");
    sidebarNavigation.style.right = "0px";
}

// export default sidebar;