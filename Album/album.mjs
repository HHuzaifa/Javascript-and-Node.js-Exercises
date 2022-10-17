function makeAlbum(artistName, albumTitle, albumTracks) {
    this.artistName = artistName;
    this.albumTitle = albumTitle;
    this.albumTracks = albumTracks || 0;
}
let makeAlbum1 = new makeAlbum("huzaifa", "i aint worried bout it");
let makeAlbum2 = new makeAlbum("arigit", "sanam re");
let makeAlbum3 = new makeAlbum("anoop jalota", "tum mere ho", 12);

console.log(makeAlbum1);
console.log(makeAlbum2);
console.log(makeAlbum3);