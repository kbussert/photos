import { Component, OnInit } from '@angular/core';
import { PhotoFetchService } from '../photo-fetch.service';

@Component({
  selector: 'app-photo-fetcher',
  templateUrl: './photo-fetcher.component.html',
  styleUrls: ['./photo-fetcher.component.css']
})
export class PhotoFetcherComponent implements OnInit {

  imgUrl = '';

  constructor(private photoFetchService: PhotoFetchService) {}

  ngOnInit(): void {
    this.fetchPhoto();
  }

  fetchPhoto() {
    this.photoFetchService.fetchPhoto().subscribe((response) => {
      this.imgUrl = response.urls.regular;
    });
  }

  fetchNewPhoto() {
    console.log("In onClick handler...")
    this.fetchPhoto();
  }

}
