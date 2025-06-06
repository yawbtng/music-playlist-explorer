function getRandomImageUrl() {
  let random = Math.floor(Math.random() * 300) + 1;
  return `https://picsum.photos/id/${random}/200`;
}


playlists = [
  {
    "playlistID": 1,
    "playlist_name": "Summer Vibes",
    "playlist_author": "John Doe",
    "playlist_art": "assets/img/playlist.png",
    "songs": [
      {
        "songID": 1,
        "song_name": "Happy",
        "artist": "Pharrell Williams",
        "album": "G I R L",
        "duration": "3:53",
        "image": getRandomImageUrl()
      },
      {
        "songID": 2,
        "song_name": "Uptown Funk",
        "artist": "Mark Ronson ft. Bruno Mars",
        "album": "Uptown Special",
        "duration": "4:38",
        "image": getRandomImageUrl()
      },
      {
        "songID": 3,
        "song_name": "Can't Stop the Feeling!",
        "artist": "Justin Timberlake",
        "album": "Trolls: Original Motion Picture Soundtrack",
        "duration": "3:56",
        "image": getRandomImageUrl()
      },
      {
        "songID": 25,
        "song_name": "Best Day of My Life",
        "artist": "American Authors",
        "album": "Oh, What a Life",
        "duration": "3:24",
        "image": getRandomImageUrl()
      },
      {
        "songID": 26,
        "song_name": "Walking on Sunshine",
        "artist": "Katrina & The Waves",
        "album": "Walking on Sunshine",
        "duration": "3:36",
        "image": getRandomImageUrl()
      }
    ]
  },
  {
    "playlistID": 2,
    "playlist_name": "Workout Mix",
    "playlist_author": "Jane Smith",
    "playlist_art": "assets/img/playlist.png",
    "songs": [
      {
        "songID": 4,
        "song_name": "Eye of the Tiger",
        "artist": "Survivor",
        "album": "Rocky IV",
        "duration": "3:59",
        "image": getRandomImageUrl()
      },
      {
        "songID": 5,
        "song_name": "Lose Yourself",
        "artist": "Eminem",
        "album": "8 Mile",
        "duration": "5:26",
        "image": getRandomImageUrl()
      },
      {
        "songID": 6,
        "song_name": "We Will Rock You",
        "artist": "Queen",
        "album": "News of the World",
        "duration": "2:28",
        "image": getRandomImageUrl()
      },
      {
        "songID": 27,
        "song_name": "Stronger",
        "artist": "Kanye West",
        "album": "Graduation",
        "duration": "5:11",
        "image": getRandomImageUrl()
      },
      {
        "songID": 28,
        "song_name": "Till I Collapse",
        "artist": "Eminem ft. Nate Dogg",
        "album": "The Eminem Show",
        "duration": "4:57",
        "image": getRandomImageUrl()
      }
    ]
  },
  {
    "playlistID": 3,
    "playlist_name": "Relaxing Music",
    "playlist_author": "Bob Johnson",
    "playlist_art": "assets/img/playlist.png",
    "songs": [
      {
        "songID": 7,
        "song_name": "Weightless",
        "artist": "Marconi Union",
        "album": "Weightless",
        "duration": "8:45",
        "image": getRandomImageUrl()
      },
      {
        "songID": 8,
        "song_name": "Clair de Lune",
        "artist": "Claude Debussy",
        "album": "Suite Bergamasque",
        "duration": "5:00",
        "image": getRandomImageUrl()
      },
      {
        "songID": 9,
        "song_name": "River Flows in You",
        "artist": "Yiruma",
        "album": "First Love",
        "duration": "3:38",
        "image": getRandomImageUrl()
      },
      {
        "songID": 29,
        "song_name": "Ambient 1: Music for Airports",
        "artist": "Brian Eno",
        "album": "Ambient 1: Music for Airports",
        "duration": "9:38",
        "image": getRandomImageUrl()
      },
      {
        "songID": 30,
        "song_name": "Experience",
        "artist": "Ludovico Einaudi",
        "album": "In a Time Lapse",
        "duration": "5:15",
        "image": getRandomImageUrl()
      }
    ]
  },
  {
    "playlistID": 4,
    "playlist_name": "Jazz Classics",
    "playlist_author": "Emily Chen",
    "playlist_art": "assets/img/playlist.png",
    "songs": [
      {
        "songID": 10,
        "song_name": "Moon River",
        "artist": "Frank Sinatra",
        "album": "Breakfast at Tiffany's",
        "duration": "2:43",
        "image": getRandomImageUrl()
      },
      {
        "songID": 11,
        "song_name": "My Funny Valentine",
        "artist": "Chet Baker",
        "album": "Chet Baker Sings",
        "duration": "2:19",
        "image": getRandomImageUrl()
      },
      {
        "songID": 12,
        "song_name": "The Girl from Ipanema",
        "artist": "Stan Getz & Astrud Gilberto",
        "album": "Getz/Gilberto",
        "duration": "5:24",
        "image": getRandomImageUrl()
      },
      {
        "songID": 31,
        "song_name": "Fly Me to the Moon",
        "artist": "Frank Sinatra",
        "album": "It Might as Well Be Swing",
        "duration": "2:30",
        "image": getRandomImageUrl()
      },
      {
        "songID": 32,
        "song_name": "So What",
        "artist": "Miles Davis",
        "album": "Kind of Blue",
        "duration": "9:22",
        "image": getRandomImageUrl()
      }
    ]
  },
  {
    "playlistID": 5,
    "playlist_name": "Rock Anthems",
    "playlist_author": "David Lee",
    "playlist_art": "assets/img/playlist.png",
    "songs": [
      {
        "songID": 13,
        "song_name": "Sweet Child O' Mine",
        "artist": "Guns N' Roses",
        "album": "Appetite for Destruction",
        "duration": "4:58",
        "image": getRandomImageUrl()
      },
      {
        "songID": 14,
        "song_name": "Bohemian Rhapsody",
        "artist": "Queen",
        "album": "A Night at the Opera",
        "duration": "5:55",
        "image": getRandomImageUrl()
      },
      {
        "songID": 15,
        "song_name": "Hotel California",
        "artist": "Eagles",
        "album": "Hotel California",
        "duration": "6:30",
        "image": getRandomImageUrl()
      },
      {
        "songID": 33,
        "song_name": "Don't Stop Believin'",
        "artist": "Journey",
        "album": "Escape",
        "duration": "4:11",
        "image": getRandomImageUrl()
      },
      {
        "songID": 34,
        "song_name": "Livin' on a Prayer",
        "artist": "Bon Jovi",
        "album": "Slippery When Wet",
        "duration": "4:54",
        "image": getRandomImageUrl()
      }
    ]
  },
  {
    "playlistID": 6,
    "playlist_name": "Hip-Hop Favorites",
    "playlist_author": "Sarah Taylor",
    "playlist_art": "assets/img/playlist.png",
    "songs": [
      {
        "songID": 16,
        "song_name": "Lose Yourself",
        "artist": "Eminem",
        "album": "8 Mile",
        "duration": "5:26",
        "image": getRandomImageUrl()
      },
      {
        "songID": 17,
        "song_name": "Juicy",
        "artist": "The Notorious B.I.G.",
        "album": "Ready to Die",
        "duration": "5:27",
        "image": getRandomImageUrl()
      },
      {
        "songID": 18,
        "song_name": "Forgot About Dre",
        "artist": "Dr. Dre ft. Eminem",
        "album": "2001",
        "duration": "3:42",
        "image": getRandomImageUrl()
      },
      {
        "songID": 35,
        "song_name": "Stan",
        "artist": "Eminem ft. Dido",
        "album": "The Marshall Mathers LP",
        "duration": "6:44",
        "image": getRandomImageUrl()
      },
      {
        "songID": 36,
        "song_name": "In Da Club",
        "artist": "50 Cent",
        "album": "Get Rich or Die Tryin'",
        "duration": "3:13",
        "image": getRandomImageUrl()
      }
    ]
  },
  {
    "playlistID": 7,
    "playlist_name": "Pop Hits",
    "playlist_author": "Emily Chen",
    "playlist_art": "assets/img/playlist.png",
    "songs": [
      {
        "songID": 19,
        "song_name": "Uptown Funk",
        "artist": "Mark Ronson ft. Bruno Mars",
        "album": "Uptown Special",
        "duration": "4:38",
        "image": getRandomImageUrl()
      },
      {
        "songID": 20,
        "song_name": "Can't Stop the Feeling!",
        "artist": "Justin Timberlake",
        "album": "Trolls",
        "duration": "3:56",
        "image": getRandomImageUrl()
      },
      {
        "songID": 21,
        "song_name": "Happy",
        "artist": "Pharrell Williams",
        "album": "G I R L",
        "duration": "3:53",
        "image": getRandomImageUrl()
      },
      {
        "songID": 37,
        "song_name": "Shut Up and Dance",
        "artist": "Walk the Moon",
        "album": "Talking Is Hard",
        "duration": "3:17",
        "image": getRandomImageUrl()
      },
      {
        "songID": 38,
        "song_name": "Cake by the Ocean",
        "artist": "DNCE",
        "album": "DNCE",
        "duration": "3:39",
        "image": getRandomImageUrl()
      }
    ]
  },
  {
    "playlistID": 8,
    "playlist_name": "Electronic Dance Music",
    "playlist_author": "David Lee",
    "playlist_art": "assets/img/playlist.png",
    "songs": [
      {
        "songID": 22,
        "song_name": "Sandstorm",
        "artist": "Darude",
        "album": "Before the Storm",
        "duration": "3:46",
        "image": getRandomImageUrl()
      },
      {
        "songID": 23,
        "song_name": "One",
        "artist": "Veracocha",
        "album": "Carte Blanche",
        "duration": "5:04",
        "image": getRandomImageUrl()
      },
      {
        "songID": 24,
        "song_name": "Children",
        "artist": "Robert Miles",
        "album": "Dreamland",
        "duration": "7:06",
        "image": getRandomImageUrl()
      },
      {
        "songID": 39,
        "song_name": "Levels",
        "artist": "Avicii",
        "album": "Levels EP",
        "duration": "5:37",
        "image": getRandomImageUrl()
      },
      {
        "songID": 40,
        "song_name": "Titanium",
        "artist": "David Guetta ft. Sia",
        "album": "Nothing but the Beat",
        "duration": "4:05",
        "image": getRandomImageUrl()
      }
    ]
  }
]