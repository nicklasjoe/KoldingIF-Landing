function scrollWin(x, y) {

    if (screen.width < 1024 ) {
    window.scrollTo(0, 900);
}   else if (screen.width > 1024 && screen.width < 1300) {
    window.scrollTo(0, 1200);
}   else {
    window.scrollTo(0, 774);
}}