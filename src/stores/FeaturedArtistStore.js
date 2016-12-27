import alt from '../alt'
import FeaturedArtistActions from '../actions/FeaturedArtistActions';

class FeaturedArtistStore {
  constructor() {
    this.bindListeners({
      onToggleLeftSplashInfo: FeaturedArtistActions.toggleLeftSplashInfo,
      onToggleMidSplashInfo: FeaturedArtistActions.toggleMidSplashInfo,
      onToggleRightSplashInfo: FeaturedArtistActions.toggleRightSplashInfo
    })

    this.leftResources = {};
    this.midResources = {};
    this.rightResources = {};

    this.showLeftSplash = true;
    this.showLeftInfo = false;

    this.showMidSplash = true;
    this.showMidInfo = false;

    this.showRightSplash = true;
    this.showRightInfo = false;
  }
  onToggleLeftSplashInfo() {
    this.showLeftSplash = !this.showLeftSplash;
    this.showLeftInfo = !this.showLeftInfo;
  }
  onToggleMidSplashInfo() {
    this.showMidSplash = !this.showMidSplash;
    this.showMidInfo = !this.showMidInfo;
  }
  onToggleRightSplashInfo() {
    this.showRightSplash = !this.showRightSplash;
    this.showRightInfo = !this.showRightInfo;
  }
}

export default alt.createStore(FeaturedArtistStore);
