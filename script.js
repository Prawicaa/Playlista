let songList = [];

function addSong() {
    const songTitle = document.getElementById("song-title").value.trim();
    if (!songTitle) {
        alert("Proszę podać tytuł piosenki.");
        return;
    }

    if (songList.includes(songTitle)) {
        alert("Ta piosenka już została dodana!");
        return;
    }

    // Tworzymy link do Spotify (prosty przykład, zakładając, że użytkownik zna ID piosenki)
    const songLink = `https://open.spotify.com/search/${encodeURIComponent(songTitle)}`;

    // Dodajemy piosenkę do listy
    songList.push(songTitle);

    // Tworzymy nowy element listy
    const songItem = document.createElement("li");
    songItem.innerHTML = `<a href="${songLink}" target="_blank">${songTitle}</a>`;

    // Dodajemy element do listy w HTML
    document.getElementById("songs").appendChild(songItem);

    // Czyścimy pole tekstowe
    document.getElementById("song-title").value = "";
}
