# music-playlist-explorer
Meta U Project 1

📝 `NOTE` Use this template to initialize the contents of a README.md file for your application. As you work on your assignment over the course of the week, update the required or stretch features lists to indicate which features you have completed by changing `[ ]` to `[x]`. (🚫 Remove this paragraph before submitting your assignment.)

## Unit Assignment: Music Playlist Explorer

Submitted by: **NAME**

Estimated time spent: **#** hours spent in total

Deployed Application (**required**): [Music Playlist Explorer Deployed Site](https://music-playlist-explorer-cqhm.onrender.com/)

### Application Features

#### CORE FEATURES

- [X] **Display Playlists**
  - [X] Dynamically render playlists on the homepage using JavaScript.
    - [X] Playlists should be shown in grid view.
    - [X] Playlist images should be reasonably sized (at least 6 playlists on your laptop when full screen; large enough that the playlist components detailed in the next feature are legible).
  - [X] Fetch data from a provided Javascript file and use it to create interactive playlist tiles.

- [X] **Playlist Components**
  - [X] Each tile should display the playlist's:
    - [X] Cover image
    - [X] Name
    - [X] Author
    - [X] Like count

- [X] **Playlist Details**
  - [X] Create a modal pop-up view that displays detailed information about a playlist when a user clicks on a playlist tile.
  - [X] The modal should show the playlist's:
    - [X] Cover image
    - [X] Name
    - [X] Author
    - [X] List of songs, including each song's:
      - [X] Title
      - [X] Artist
      - [X] Duration
  - [X] The modal itself should:
    - [X] Not occupy the entire screen.
    - [X] Have a shadow to show that it is a pop-up.
    - [X] Appear floating on the screen.
    - [X] The backdrop should appear darker or in a different shade.

- [X] **Like Playlists**
  - [X] Implement functionality to allow users to like playlists by clicking a heart icon on each playlist tile.
  - [X] When the heart icon is clicked:
    - [X] If previously unliked:
      - [X] The like count on the playlist tile should increase by 1.
      - [X] There should be visual feedback (such as the heart turning a different color) to show that the playlist has been liked by the user.
    - [X] If previously liked:
      - [X] The like count on the playlist tile should decrease by 1.
      - [X] There should be visual feedback (such as the heart turning a different color) to show that the playlist has been unliked by the user.
    - [ ] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** In addition to showcasing the above features, for ease of grading, please film yourself liking and unliking:
      - [X] a playlist with a like count of 0
      - [X] a playlist with a non-zero like count

- [X] **Shuffle Songs**
  - [X] Enable users to shuffle the songs within a playlist using a shuffle button in the playlist's detail modal.
  - [X] When the shuffle button is clicked, the playlist's songs should display in a different order.
  - [ ] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** In addition to showcasing the above features, for ease of grading, please show yourself shuffling the same playlist more than once. 
  
- [X] **Featured Page**
  - [X] Application includes a dedicated page that randomly selects and displays a playlist, showing the playlist’s:
    - [X] Playlist Image
    - [X] Playlist Name
    - [X] List of songs, including each song's:
      - [X] Title
      - [X] Artist
      - [X] Duration
  - [X] When the page is refreshed or reloaded, a new random playlist is displayed
    - For example, navigating to the all playlists page and then back to the featured playlist page should result in a new random playlist being displayed
    - Note that because your algorithm will not be truly random, it is possible that the same playlist will feature twice in a row. 
    - [X] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** In addition to showcasing the above features, for ease of grading, please show yourself refreshing the featured page more than once. 
  - [X] Application includes a navigation bar or some other mechanism such that users can navigate to the page with all playlists from the featured page and vice versa without using the browser's back and forward buttons. 

#### STRETCH FEATURES

- [ ] **Add New Playlists**
  - [ ] Allow users to create new playlists.
  - [ ] Using a form, users can input playlist:
    - [ ] Name
    - [ ] Author
    - [ ] Cover image
    - [ ] Add one or more songs to the playlist, specifying the song's:
      - [ ] Title
      - [ ] Artist
  - [ ] The resulting playlist should display in the grid view.
  - [ ] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** For ease of grading, please show yourself adding at least two songs to the playlist. 

- [ ] **Edit Existing Playlists**
  - [ ] Enable users to modify the details of existing playlists.
  - [ ] Add an edit button to each playlist tile.
  - [ ] Users can update the playlist:
    - [ ] Name
    - [ ] Author
    - [ ] Songs
  - [ ] The playlist grid view and playlist detail modal should update to display any changes (see Required Features, Criterion 1 & 2).
  - [ ] **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS:** For ease of grading, please show yourself:
    - [ ] Editing all of a playlist's features (name, creator, AND songs)
    - [ ] Editing some of a playlist's features (name, creator, OR songs) 

- [X] **Delete Playlists**
  - [X] Add a delete button to each playlist tile within the grid view.
  - [X] When clicked, the playlist is removed from the playlist grid view.

- [X] **Search Functionality**
  - [X] Implement a search bar that allows users to filter playlists by:
    - [X] Name 
    - [X] Author
  - [X] The search bar should include:
    - [X] Text input field
    - [X] Submit/Search Button
    - [X] Clear Button
  - [X] Playlists matching the search query in the text input are displayed in a grid view when the user:
    - [X] Presses the Enter Key
    - [X] Clicks the Submit/Search Button 
  - [X] User can click the clear button. When clicked:
    - [X] All text in the text input field is deleted
    - [X] All playlists in the `data.json` file are displayed in a grid view
    - [ ] **Optional:** If the Add Playlist, Edit Existing Playlist, or Delete Playlist stretch features were implemented:
      - [ ] If users can add a playlist, added playlists should be included in search results.
      - [ ] If users can edit a playlist, search results should reflect the latest edits to each playlist.
      - [ ] If users can delete a playlist, deleted playlists should no longer be included in search results.
      - **Note:** You will not be graded on the implementation of this optional subfeature to keep your grade of this stretch feature independent of your implementation of other stretch features. However, we highly suggest including this in your implementation to model realistic behavior of real applications. 

- [X] **Sorting Options**
  - [X] Implement a drop-down or button options that allow users to sort the playlist by:
    - [X] Name (A-Z alphabetically)
    - [X] Number of likes (descending order)
    - [X] Date added (most recent to oldest, chronologically)
  - [X] Selecting a sort option should result in a reordering based on the selected sort while maintaining a grid view.

### Walkthrough Video

`TODO://` Add the embedded URL code to your animated app walkthrough below, `ADD_EMBEDDED_CODE_HERE`. Make sure the video actually renders and is playable when viewing this README. Ensure your walkthrough showcases the presence and/or functionality of all features you implemented above (check them off as you film!). Pay attention to any **VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS** checkboxes listed above to ensure graders see the full functionality of your website! (🚫 Remove this paragraph after adding walkthrough video)

<div>
    <a href="https://www.loom.com/share/6e71aad0a9ae434384f4cb7347248e28">
      <p>Free screen recorder for Mac and PC | Loom - 6 June 2025 - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/6e71aad0a9ae434384f4cb7347248e28">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/6e71aad0a9ae434384f4cb7347248e28-fff28134c276776f-full-play.gif">
    </a>
</div>

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

I felt that the topics in the lab decently prepared us to complete the project. I think it was just the complexity, edge cases, and application to a different project that made things feel alot more difficult than it actually would be.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
If I had more time, I would've finished the stretch features and also added more animations/design for a better UI. I think a personal feature I would like to add is for a user to star or favorite a playlist or song and have that pop up on a favorite page.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

Add your response here

### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

Shout out to Matthew for helping me getting the modal to display. It was taking me hours and longer than I expected so I realized that I probably should ask for help more often and sooner.

Another shout out to Noble for always being willing to help me out with features/logic that he had already implemented.