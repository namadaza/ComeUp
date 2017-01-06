import alt from '../alt'
import FeaturedArtistActions from '../actions/FeaturedArtistActions';

class FeaturedArtistStore {
  constructor() {
    this.bindListeners({
      onToggleSplashInfo: FeaturedArtistActions.toggleSplashInfo,
      onSetSplashInfo: FeaturedArtistActions.setSplashInfo,
      onGetResourcesSuccess: FeaturedArtistActions.getResourcesSuccess,
      onGetResourcesFail: FeaturedArtistActions.getResourcesFail
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

  onGetResourcesSuccess(data) {
    this.resourcesByArtistname = data;
  }

  onGetResourcesFail(jqXhr) {
    return jqXhr;
  }
}

export default alt.createStore(FeaturedArtistStore);
