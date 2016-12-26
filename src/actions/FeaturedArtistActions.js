import alt from '../alt';

class FeaturedArtistActions {
  constructor() {
    this.generateActions(
      'getResourcesSuccess',
      'getPostsFail'
    );
  }

  getResources(payload) {
    var url;
    var params;

    url = 'api/featuredartists';
    params = { artistname: payload };

    $.ajax({
      url: url,
      data: params
    })
      .done((data) => {
        this.getResourcesSuccess(data);
      })
      .fail((jqXhr) => {
        this.getResourcesFail(jqXhr.responseJSON.message);
      });
  }

  toggleSplashInfo() {
    console.log("TRIGGERED2.0");
    return true;
  }
}

export default alt.createActions(FeaturedArtistActions);
