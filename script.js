const modal = document.getElementById("playlistModal");
const span = document.getElementsByClassName("close")[0];

function openModal() {
   modal.style.display = "block";
}

span.onclick = function() {
   modal.style.display = "none";
}

