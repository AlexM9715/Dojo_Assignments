function login(element){
    if (element.innerHTML == "Login") {
        element.innerHTML = "Logout"
    }else{
        element.innerHTML = "Login"
    }
}

function hide(element) {
    element.remove();
}

function custom() {
    console.log("this is a message");
}