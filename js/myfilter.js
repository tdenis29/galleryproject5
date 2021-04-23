baguetteBox.run('.gallery')

let a = document.querySelectorAll('a');  /*images*/
let searcher = document.querySelector("#search"); /*user input*/

searcher.addEventListener("keydown", (event) => {
    for ( i = 0; i < a.length; i++) {
     if (a[i].dataset.caption.toLowerCase().includes(searcher.value)) {
        a[i].style.display = 'block';
    } else {
        a[i].style.display = 'none';
    }
}
});
