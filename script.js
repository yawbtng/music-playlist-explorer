const loadCards = () => {
   console.log("loading playlist cards and playlist modals");
   const playlistCards = document.getElementById("playlist-cards");
   for (const list of playlists) {
         const el = createPlaylist(list)
         playlistCards.appendChild(el)
   }

}

document.addEventListener("DOMContentLoaded", () => {
   const currentPath = window.location.pathname;
   console.log(currentPath)
   if (currentPath === "/index.html" || currentPath === "/") {
      loadCards();
      sorting();
      search();
      
   } else if (currentPath === "/featured.html") {
         let featuredPlaylist = loadRandomFeature();
         createFeaturedPlaylist(featuredPlaylist);
   }
   
})


const createPlaylist = (list) => {
      console.log(list);
      const playlistElement = document.createElement("div");
      playlistElement.className = "p-card"
      playlistElement.id = `${list.date_added}`

      let random = Math.floor(Math.random() * 100) + 1;
      playlistElement.innerHTML = `
                  <img src="${list.playlist_art}">
                  <h4 class="playlist-title">${list.playlist_name}</h4>
                  <h6 class="playlist-author">${list.playlist_author}</h6>
                  <div class="like-and-delete">
                     <button class="playlist-like" id="playlist-like-${list.playlistID}">♡<span class="like-count" id="like-count-${list.playlistID}">${random}</span></button>
                     <button class="delete-playlist" id="delete-playlist-${list.playlistID}">Delete</button>
                  </div>
                  
               `

      playlistElement.addEventListener("click", (event) => {
         
         console.log(event.target.classList)
         
         if (event.target.classList.contains("playlist-like")) {
            const like = document.getElementById(`playlist-like-${list.playlistID}`)
            console.log(like);

            let isLiked = false;
            if (like.style.color == "red") {
               isLiked = true;
            }
            
            likeCount = like.querySelector(`.like-count`)
            
            if (!isLiked) {
               likeCount.innerHTML = Number(likeCount.innerHTML) + 1;
               like.style.color = "red";
            } else {
               likeCount.innerHTML = Number(likeCount.innerHTML) - 1;
               like.style.color = "black";
            }
            
         } else if (event.target.classList.contains("delete-playlist")) {
            const deleteBtn = document.getElementById(`delete-playlist-${list.playlistID}`);

            deleteBtn.addEventListener("click", () => {
               playlistElement.innerHTML = "";
               playlistElement.style.border = "none";
               playlistElement.style.display = "none";

            })


         } else {
            createPlaylistModal(list);

            const modalExit = document.querySelector(".close");
         
            modalExit.addEventListener("click", () => {
               const modal = document.querySelector(".modal");
               modal.innerHTML = "";
               modal.style.display = "none";
            })
            
            const shuffleBtn = document.querySelector(".shuffle")

            shuffleBtn.addEventListener("click", () => {
               const songContainer = document.querySelector(".song-container")
               const elements = Array.from(songContainer.children)

               for (let i = elements.length - 1; i > 0; i--) {
                  const j = Math.floor(Math.random() * (i + 1));
                  [elements[i], elements[j]] = [elements[j], elements[i]];
               }

               songContainer.innerHTML = '';
               elements.forEach(element => songContainer.appendChild(element));
            })
            
         }
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
               <button class="shuffle">Shuffle</button>
            </div>
         </div>
         <div class="song-container">
            ${songList}
         </div>
      </div>
   `

   modalElement.style.display = "block";
}

// Featured Page Implementation
const createFeaturedPlaylist = (playlist) => {
   const playlistArea = document.querySelector(".playlist-content");
   let songList = "";
   
   playlist.songs.forEach((song) => {
      songList += `
      <div class="song">
         <img src="${song.image}">
         <div class="song-text">
               <h4>${song.song_name}</h4>
               <p>${song.artist}</p>
               <p>${song.duration}</p>
         </div>
      </div>
      `
   })

   playlistArea.innerHTML = `
      <div class="playlist-info">
         <img id="playlistImage" src="${playlist.playlist_art}" alt="Playlist Image">
         <div>
            <h1 id="playlistName">${playlist.playlist_name}</h1>
            <p id="creatorName">${playlist.playlist_author}</p>
         </div>
      </div>
      <div class="song-container">
         ${songList}
      </div>
   `
}

const loadRandomFeature = () => {
   let randomFeature = Math.floor(Math.random() * playlists.length) + 1;
   let featuredPlaylist = playlists[randomFeature]
   console.log(featuredPlaylist)
   return featuredPlaylist;
}



// Sort playlists
const sorting = () => {
   const sortSelect = document.getElementById("sort");
   const elementsContainer = document.getElementById("playlist-cards");

   function sortElements() {
      const selectedOption = sortSelect.value;
      const elements = Array.from(elementsContainer.children);

      switch(selectedOption) {
         case "A-Z":
            elements.sort((a,b) => {
               let c = a.querySelector(".playlist-title");
               let d = b.querySelector(".playlist-title");
               if (!c || !d) {
                  return 0;
               }
               return c.textContent.localeCompare(d.textContent);
            });
            break;
         
         case "like-count":
            elements.sort((a,b) => {
               let c = a.querySelector(".like-count");
               let d = b.querySelector(".like-count");
               return parseInt(d.textContent) - parseInt(c.textContent);
            });
            break;
         
         case "recent":
            elements.sort((a,b) => {
               let c = new Date(a.id);
               let d = new Date(b.id);
               return d-c;
            })
            break;
         default:
            console.log("No sorting implemented");
      }

      elementsContainer.innerHTML = "";

      elements.forEach(element => elementsContainer.appendChild(element));

   }

   sortSelect.addEventListener("change", sortElements);
}

// Search Playlists by Title or Date
const search = () => {
   const submitSearch = document.getElementById("search-form");
   const elementsContainer = document.getElementById("playlist-cards");

   function displaySearchElements() {
      const searchInput = document.getElementById("search-input");
      let searchValue = searchInput.value.toLowerCase();
      const elements = Array.from(elementsContainer.children);
      
      elements.forEach((element) => {
         const playlistName = element.querySelector(".playlist-title").textContent.toLowerCase();
         console.log(playlistName);
         const playlistAuthor = element.querySelector(".playlist-author").textContent.toLowerCase();
         console.log(playlistAuthor);

         if (playlistName.includes(searchValue) || playlistAuthor.includes(searchValue)) {
            element.style.display = "block";
            element.hidden = false;
         } else {
            element.style.display = "none";
            element.hidden = true;
         }
      });

      elementsContainer.innerHTML = "";
      elements.forEach(element => elementsContainer.appendChild(element));
   }

   submitSearch.addEventListener("submit", (event) => {
      console.log(event)
      event.preventDefault();
      displaySearchElements();
   });
}

