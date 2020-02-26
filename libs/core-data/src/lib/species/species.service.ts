import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://kenneth-server.herokuapp.com/';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  model = 'species'

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}${this.model}`
  }

  all() {
    return this.httpClient.get(this.getUrl())
  }

  findOne(specieId) {
    return this.httpClient.get(this.getUrlForId(specieId));
  }

  create(specie) {
    return this.httpClient.post(this.getUrl(), specie);
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  update(specie) {
    return this.httpClient.patch(this.getUrlForId(specie.id), specie)
  }

  delete(specieId) {
    return this.httpClient.delete(this.getUrlForId(specieId))
  }
}
