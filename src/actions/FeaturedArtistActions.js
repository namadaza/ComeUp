import alt from '../alt';

class FeaturedArtistActions {
  constructor() {
  }

  toggleSplashInfo(artistname) {
    return artistname;
  }

  setSplashInfo(artistname) {
    return artistname;
  }

  getResources(artistname) {
    var params = { artist: artistname };

    $.ajax({ url: '/api/resources/featured', data: params })
      .done((data) => {
        this.getResourcesSuccess(data)
      })
      .fail((jqXhr) => {
        this.getResourcesFail(jqXhr)
      });

    return true;
  }

  getResourcesSuccess(data) {
    return data;
  }

  getResourcesFail(jqXhr) {
    return jqXhr;
  }
}

export default alt.createActions(FeaturedArtistActions);
