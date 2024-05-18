var tmenu=true;

function toggleMenu(){
    var menu=document.getElementById('headerList');
    if(tmenu){
        menu.style.display = "block";
        tmenu=false;
    }
    else{
        menu.style.display = "none";
        tmenu=true;
    }

}