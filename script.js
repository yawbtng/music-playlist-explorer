const loadCards = () => {
   console.log("loading playlist cards and playlist modals");
   const playlistCards = document.getElementById("playlist-cards");

   for (const list of playlists) {
         const el = createPlaylist(list)
         playlistCards.appendChild(el)
   }
}

document.addEventListener("DOMContentLoaded", () => {
   loadCards();
})


const createPlaylist = (list) => {
      console.log(list);
      const playlistElement = document.createElement("div");
      playlistElement.className = "p-card"

      playlistElement.innerHTML = `
                  <img src="${list.playlist_art}">
                  <h4 class="playlist-title">${list.playlist_name}</h4>
                  <h6 class="playlist-author">${list.playlist_author}</h6>
                  <button class="playlist-like">Like ♡</button>
               `

      playlistElement.addEventListener("click", () => {
         createPlaylistModal(list);

         const modalExit = document.querySelector(".close");
      
         modalExit.addEventListener("click", () => {
            const modal = document.querySelector(".modal");
            modal.innerHTML = "";
            modal.style.display = "none";
         })
      })

      


      return playlistElement;
}

const createPlaylistModal = (modal) => {
   console.log(modal);
   const modalElement = document.querySelector(".modal");
   let songList = "";

   modal.songs.forEach((song) => {
      console.log(song)
      songList += `
         <div class="song">
            <div class="song-content">
               <img src="${song.image}">
               <div class="song-text">
                  <h4>${song.song_name}</h4>
                  <p>${song.artist}</p>
                  <p>${song.album}</p>
               </div>
            </div>
               <h6>${song.duration}</h6>
         </div>
      `
   })

   modalElement.innerHTML = `
      <div class="modal-content">
         <span class="close" >&times;</span>

         <div class="modal-playlist">
            <img class="playlistImage" src="${modal.playlist_art}">
            <div>
               <h1 class="playlistName">${modal.playlist_name}</h1>
               <p class="creatorName">${modal.playlist_author}</p>
            </div>
         </div>
         ${songList}
      </div>
   `

   modalElement.style.display = "block";
}