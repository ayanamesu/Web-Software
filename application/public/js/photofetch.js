function printImage(item){
    document.getElementById("photo-list").innerHTML +=
    `<div class = "photo-list">
                    <br><img class="photo-list" src="${item.thumbnailUrl}" />
                    <br><button onclick="clicked(this)">Click</button>
                    <br>${item.title}
              </div>`;
            }

// fetching the photo from the json link
function fetchPhoto() {
    fetch("https://jsonplaceholder.typicode.com/albums/2/photos")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            document.getElementById("counter").innerHTML = data.length;
            data.forEach(printImage)
            
            });
} fetchPhoto()

function clicked(source){
    updateCounter();
    source.parentElement.classList.add("fade-out");
    source.disabled = true
    //Maybe need to remove (code here)
}

function updateCounter(){
    document.getElementById("counter").innerHTML = document.getElementById("counter").innerHTML-1
}