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

  toggleSplashInfo(artistname) {
    return artistname;
  }

  setSplashInfo(artistname) {
    return artistname;
  }
}

export default alt.createActions(FeaturedArtistActions);
