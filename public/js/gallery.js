$(function () {
    // debugger;
    $(".filtering").on("click", "span", function () {
        var a = $(".gallery").isotope({});
        var e = $(this).attr("data-filter");
        a.isotope({ filter: e });
    });
    $(".filtering").on("click", "span", function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    window.addEventListener("load", (event) => {
        $('.gallery-grid').isotope({
            itemSelector: '.gallery-grid-item',
            layoutMode: 'masonry',
        });
    });

})

// const GALLERY_QUERY_URL = "https://ap-south-1.cdn.hygraph.com/content/cltbq9vfc2yji07usol18sfzd/master?query=query%20Assets%20%7B%0A%20%20galleryImages(orderBy%3A%20year_DESC%2C%20last%3A%20500)%20%7B%0A%20%20%20%20title%0A%20%20%20%20tags%0A%20%20%20%20images%20%7B%0A%20%20%20%20%20%20url%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A";

// var galleryData = []
// async function getImagesFromCMS() {
//     const reps = await fetch(url);
//     var data = await reps.json();
//     data = (data.data.galleries);

//     for (var i = 0; i < data.length; i++) {
//         galleryData.push(data[i])
//     }
// }
// getImagesFromCMS();