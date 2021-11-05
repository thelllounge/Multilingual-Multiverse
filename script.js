function showHideEnglish() {
    var en = document.getElementsByClassName('en')
    var english = document.getElementById('english')
    if(english.checked == true){
        en.style.display = "block";
    }else{
        en.style.display = "none";
    }
}