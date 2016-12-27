import alt from '../alt';

class FeaturedArtistActions {
  constructor() {
  }

  getResources(payload) {
    var url;
    var params;

    url = 'api/featuredartists';
    params = { artistname: payload };

    $.ajax({
      url: url,
      data: params
    });
  }

  toggleLeftSplashInfo() {
    return true;
  }
  toggleMidSplashInfo() {
    return true;
  }
  toggleRightSplashInfo() {
    return true;
  }
}

export default alt.createActions(FeaturedArtistActions);
