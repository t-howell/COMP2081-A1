//Detects page scroll event to dispaly button
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 10) {
        document.getElementById('topBtn').style.display = "block";
    } else {
        document.getElementById('topBtn').style.display = "none";
    }
}

//Back to top function
function topScroll() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}