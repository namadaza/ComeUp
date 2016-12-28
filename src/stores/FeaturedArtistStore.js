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
    this.showInfoByArtistname = {};
  }

  onToggleSplashInfo(artistname) {
    this.showSplashByArtistname[artistname] = !this.showSplashByArtistname[artistname];
    this.showInfoByArtistname[artistname] = !this.showInfoByArtistname[artistname];
  }

  onSetSplashInfo(artistname) {
    this.showSplashByArtistname[artistname] = true;
    this.showInfoByArtistname[artistname] = false;
  }


}

export default alt.createStore(FeaturedArtistStore);
