import alt from '../alt'
import CollectionTileActions from '../actions/CollectionTileActions';

class CollectionTileStore {
  constructor() {
    this.bindListeners({
      onToggleArtistProfile: CollectionTileActions.toggleArtistProfile
    })

    this.resourcesByArtistname = {};
    this.activeArtistProfile = "";
  }

  onToggleArtistProfile(artistname) {
    if (this.activeArtistProfile == "" || this.activeArtistProfile != artistname) {
      this.activeArtistProfile = artistname;
    }
    else {
      this.activeArtistProfile = "";
    }
  }
}
export default alt.createStore(CollectionTileStore);
