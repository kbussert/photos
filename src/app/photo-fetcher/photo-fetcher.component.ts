import { Component, OnInit } from '@angular/core';
import { PhotoFetchService } from '../photo-fetch.service';

@Component({
  selector: 'app-photo-fetcher',
  templateUrl: './photo-fetcher.component.html',
  styleUrls: ['./photo-fetcher.component.css']
})
export class PhotoFetcherComponent implements OnInit {

  constructor(private photoFetchService: PhotoFetchService) {}

  ngOnInit(): void {
    this.photoFetchService.fetchPhoto().subscribe((response) => {
      console.log(response);
    });
  }

}
