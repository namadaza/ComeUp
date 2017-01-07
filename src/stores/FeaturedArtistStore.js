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
    let artistname = data[0].artist;
    this.resourcesByArtistname[artistname] = data;
    console.log("ResourcesStore : %j", this.resourcesByArtistname[artistname]);
  }

  onGetResourcesFail(jqXhr) {
    return jqXhr;
  }
}

export default alt.createStore(FeaturedArtistStore);
