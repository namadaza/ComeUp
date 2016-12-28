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
    for (var prop in this.showArtistProfileByArtistname) {
      if (!this.showArtistProfileByArtistname.hasOwnProperty(prop)) {
      //The current property is not a direct property of p
      continue;
    }
      if (this.showArtistProfileByArtistname[prop] == true &&
          prop != artistname) {
        this.showArtistProfileByArtistname[prop] = false;
      }
    }
    this.showArtistProfileByArtistname[artistname] = !this.showArtistProfileByArtistname[artistname];
  }

  onSetArtistProfile(artistname) {
    this.showArtistProfileByArtistname[artistname] = false;
  }
}
export default alt.createStore(CollectionTileStore);
