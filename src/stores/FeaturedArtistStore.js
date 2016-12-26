import alt from '../alt'
import FeaturedArtistActions from '../actions/FeaturedArtistActions';

class FeaturedArtistStore {
  constructor() {
    this.bindListeners({
      onToggleSplashInfo: FeaturedArtistActions.toggleSplashInfo
    })

    this.resources = {};
    this.showSplash = true;
    this.showInfo = false;
  }

  onGetResourcesSuccess(data) {
    this.resources = data;
  }

  onGetResourcesFailure(jqXhr) {
    toastr.error(jqXhr.responseJSON.message);
  }

  onToggleSplashInfo() {
    this.showSplash = !this.showSplash;
    this.showInfo = !this.showInfo;
    console.log("splash: " + this.showSplash);
    console.log("info: " + this.showInfo);
  }
}

export default alt.createStore(FeaturedArtistStore);
