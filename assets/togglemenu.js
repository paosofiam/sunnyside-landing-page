var tmenu=true;
var ID0 = document.getElementById("headerContact");
var ID1 = document.getElementById("ID1");
var ID2 = document.getElementById("ID2");
var ID3 = document.getElementById("ID3");
ID0.addEventListener("click", toggleMenu, false);
ID1.addEventListener("click", toggleMenu, false);
ID2.addEventListener("click", toggleMenu, false);
ID3.addEventListener("click", toggleMenu, false);

function toggleMenu(){
    var menu=document.getElementById('headerList');
    console.log("there!");
    if(tmenu){
        menu.style.display = "block";
        tmenu=false;
    }
    else{
        menu.style.display = "none";
        tmenu=true;
    }

}