const loadCards = () => {
   console.log("loading playlist cards and playlist modals");
   const playlistCards = document.getElementById("playlist-cards");
   const playlistModals = document.getElementById("playlistModal");

   for (const list of playlists) {
         const el = createPlaylist(list)
         playlistCards.appendChild(el)

         const modal = createPlaylistModal(list)
         playlistModals.appendChild(modal);
   }
}

document.addEventListener("DOMContentLoaded", () => {
   loadCardsAndModals();
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
      
      const modal = createPlaylistModal(list);
      
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
            <img src="${song.image}">
            <div class="song-text">
               <h4>${song.song_name}</h4>
               <p>${song.artist}</p>
               <p>${song.album}</p>
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
               <h1 class="palylistName">${modal.playlist_name}</h1>
               <p class="creatorName">${modal.playlist_author}</p>
            </div>
         </div>
         ${songList}
      </div>
   `

   return modalElement;
}
