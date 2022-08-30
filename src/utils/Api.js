class Api {
  constructor(options) {
    this._url = options.host;
    this._token = options.headers;

    this._getJsonOrError = this._getJsonOrError.bind(this);
    this._getHeaders = this._getHeaders.bind(this);
  }

  _getJsonOrError(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  _getHeaders() {
    return {
      authorization: this._token,
      "content-type": "application/json",
    };
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._token,
    }).then(this._getJsonOrError);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._token,
    }).then(this._getJsonOrError);
  }

  addCard(data) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._token,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._getJsonOrError);
  }

  addLikes(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: "PUT",
      headers: this._token,
    }).then(this._getJsonOrError);
  }
  removeLikes(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._token,
    }).then(this._getJsonOrError);
  }

  editUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._token,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(this._getJsonOrError);
  }

  changeAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._token,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(this._getJsonOrError);
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: this._token,
    }).then(this._getJsonOrError);
  }
}
export const api = new Api({
  host: "https://mesto.nomoreparties.co/v1/cohort-47/",
  headers: {
    authorization: "f33435a7-771f-4f87-9cc8-2dc2b5e06d11",
    "Content-Type": "application/json",
  },
});

/*export const api = new Api("https://mesto.nomoreparties.co/v1/cohort-47/",{
    authorization: "f33435a7-771f-4f87-9cc8-2dc2b5e06d11",
    "Content-Type": "application/json",
});*/

