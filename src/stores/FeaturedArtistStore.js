import alt from '../alt'
import FeaturedArtistActions from '../actions/FeaturedArtistActions';

class FeaturedArtistStore {
  constructor() {
    this.bindListeners({
      onToggleSplashInfo: FeaturedArtistActions.toggleSplashInfo,
      onSetSplashInfo: FeaturedArtistActions.setSplashInfo
    })

    this.resourcesByArtistname = {};
    this.showSplashByArtistname = {};
  }

  onToggleSplashInfo(artistname) {
    this.showSplashByArtistname[artistname] = !this.showSplashByArtistname[artistname];
  }

  onSetSplashInfo(artistname) {
    this.showSplashByArtistname[artistname] = true;
  }


}

export default alt.createStore(FeaturedArtistStore);
