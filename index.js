
// API 1: https://www.omdbapi.com/?apikey=a7412df9&s=hobbit
// API 2: https://omdbapi.com/?apikey=a7412df9&s=lord%20of%20the%20rings
// const arrayName =[…array1, …array2];

let mediaData = []
const mediaList = document.querySelector(".media");

async function main() {
    const movies = await fetch("https://www.omdbapi.com/?apikey=a7412df9&s=hobbit");
    const movies2 = await fetch("https://omdbapi.com/?apikey=a7412df9&s=lord%20of%20the%20rings");
    const movieData = await movies.json();
    const movieData2 = await movies2.json();
    mediaData =[movieData, movieData2];
    mediaList.innerHTML = mediaData.map((media) => mediaHTML(media)).join("");
}

main();


   function mediaHTML(media) {
        return `<div class="media">
            <figure class="poster--wrapper">
                <img class="poster" src="${media.Poster}" alt="">
            </figure>
                <div class="media__title">
                    ${media.Title}
                </div>
                <div class="media__type">
                    ${media.Type}
                </div>
                 <div class="media__year">
                    ${media.Year}
                </div>
        </div>`;
    }
