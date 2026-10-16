async function searchImages(){

let query = document.getElementById("searchInput").value;

let url = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=_wVFk2_dqUX4OwXRgAYD4oJr4S4ZQ13j3c8PRqEJJNk`;

let response = await fetch(url);
let data = await response.json();

let gallery = document.getElementById("gallery");
gallery.innerHTML = "";

data.results.forEach(photo => {

gallery.innerHTML += `
<img src="${photo.urls.small}">
`;

});

}