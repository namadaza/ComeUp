import alt from '../alt';

class CollectionTileActions {
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

  toggleArtistProfile(artistname) {
    return artistname;
  }

  setArtistProfile(artistname) {
    return artistname;
  }
}

export default alt.createActions(CollectionTileActions);
