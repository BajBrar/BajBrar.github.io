const playlists = {
  happy: "https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0",
  sad: "https://open.spotify.com/embed/playlist/37i9dQZF1DX7qK8ma5wgG1",
  energetic: "https://open.spotify.com/embed/playlist/37i9dQZF1DXdxcBWuJkbcy",
  relaxed: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4sWSpwq3LiO"
};

function setMood(mood) {
  const player = `
    <iframe style="border-radius:12px"
      src="${playlists[mood]}"
      width="100%" height="380" frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
      loading="lazy">
    </iframe>
  `;
  document.getElementById('player-container').innerHTML = player;
}
