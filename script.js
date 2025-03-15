// Przykładowe dane piosenek
const songs = [
    "Shape of You - Ed Sheeran",
    "Blinding Lights - The Weeknd",
    "Levitating - Dua Lipa",
    "Uptown Funk - Mark Ronson ft. Bruno Mars",
    "Rolling in the Deep - Adele",
    "Dynamite - BTS",
    "Happier - Marshmello ft. Bastille",
    "Can't Stop the Feeling! - Justin Timberlake"
];

let playlist = [];

// Funkcja do wyszukiwania piosenek
function searchSongs() {
    const input = document.getElementById('songInput').value.toLowerCase();
    const suggestionsList = document.getElementById('suggestionsList');
    suggestionsList.innerHTML = ''; // Czyścimy poprzednie sugestie

    if (input.length > 0) {
        const filteredSongs = songs.filter(song => song.toLowerCase().includes(input));
        suggestionsList.style.display = 'block'; // Pokazujemy listę sugestii
        
        // Wyświetlamy sugestie
        filteredSongs.forEach(song => {
            const li = document.createElement('li');
            li.textContent = song;
            li.onclick = () => addSongToPlaylist(song);
            suggestionsList.appendChild(li);
        });
    } else {
        suggestionsList.style.display = 'none'; // Ukrywamy listę, jeśli pole jest puste
    }
}

// Funkcja do dodawania piosenki do playlisty
function addSongToPlaylist(song) {
    if (!playlist.includes(song)) { // Sprawdzamy, czy piosenka już jest w playliście
        playlist.push(song);
        updatePlaylist();
    }
}

// Funkcja do wyświetlania playlisty
function updatePlaylist() {
    const playlistElement = document.getElementById('playlist');
    playlistElement.innerHTML = ''; // Czyścimy aktualną playlistę

    playlist.forEach((song, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${song} <button class="remove-btn" onclick="removeSongFromPlaylist(${index})">Usuń</button>`;
        playlistElement.appendChild(li);
    });
}

// Funkcja do usuwania piosenki z playlisty
function removeSongFromPlaylist(index) {
    playlist.splice(index, 1);
    updatePlaylist();
}
