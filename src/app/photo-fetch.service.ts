import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoFetchService {

  constructor(private http: HttpClient) {}

  fetchPhoto() {
    return this.http.get(
      'https://api.unsplash.com/photos/random', {
        headers: {
          Authorization: 'Client-ID HD4frjT9hkv5mMw19QShFtq49_z1iidPrnw-K-lPUwI'
        }
      }
    );
  };
}
