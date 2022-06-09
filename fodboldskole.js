function scrollWin(x, y) {

    if (screen.width < 1024 ) {
    window.scrollTo(0, 1000);
    console.log(1)
}   else if (screen.width > 1024 && screen.width < 1300) {
    window.scrollTo(0, 1200);
    console.log(2)
}   else {
    window.scrollTo(0, 774);
    console.log(3)
}}