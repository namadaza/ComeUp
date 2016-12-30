import alt from '../alt'
import CollectionTileActions from '../actions/CollectionTileActions';

class CollectionTileStore {
  constructor() {
    this.bindListeners({
      onToggleArtistProfile: CollectionTileActions.toggleArtistProfile,
      onSetArtistProfile: CollectionTileActions.setArtistProfile
    })

    this.resourcesByArtistname = {};

    this.showArtistProfileByArtistname = {};
  }

  onToggleArtistProfile(artistname) {
    for (var artist in this.showArtistProfileByArtistname) {
      if (!this.showArtistProfileByArtistname.hasOwnProperty(artist)) {
        //The current property is not a direct property of p
        continue;
      }
      if (this.showArtistProfileByArtistname[artist] == true && artist != artistname) {
        this.showArtistProfileByArtistname[artist] = false;
      }
    }
    this.showArtistProfileByArtistname[artistname] = !this.showArtistProfileByArtistname[artistname];
  }

  onSetArtistProfile(artistname) {
    this.showArtistProfileByArtistname[artistname] = false;
  }
}
export default alt.createStore(CollectionTileStore);
