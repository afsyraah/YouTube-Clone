function scrollToLeft() {
    document.getElementById("buttonContainer").scrollBy({
        left: -150,
        behavior: 'smooth'
    });
}
function scrollToRight() {
    document.getElementById("buttonContainer").scrollBy({
        left: 150,
        behavior: 'smooth'
    });
}


function closeBanner() {
    document.getElementById("premiumBanner").style.display = "none";
}