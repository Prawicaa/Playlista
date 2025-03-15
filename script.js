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
    
    // Czyścimy poprzednie sugestie
    suggestionsList.innerHTML = ''; 
    
    // Jeśli użytkownik wpisał co najmniej 3 znaki
    if (input.length > 2) {
        const filteredSongs = songs.filter(song => song.toLowerCase().includes(input));
        
        // Wyświetlamy sugestie, jeśli są jakieś wyniki
        if (filteredSongs.length > 0) {
            suggestionsList.style.display = 'block'; // Pokazujemy listę sugestii
            
            filteredSongs.forEach(song => {
                const li = document.createElement('li');
                li.textContent = song;
                li.onclick = () => addSongToPlaylist(song);
                suggestionsList.appendChild(li);
            });
        } else {
            suggestionsList.style.display = 'none'; // Jeśli brak wyników, ukrywamy listę
        }
    } else {
        suggestionsList.style.display = 'none'; // Ukrywamy listę jeśli mniej niż 3 znaki
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
