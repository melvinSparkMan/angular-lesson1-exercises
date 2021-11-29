import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Spectacular Dinner Choices';
  image1 = 'https://www.omahasteaks.com/gifs/os/210115_right_rail_freezer_fillers_byo_310x233.jpg';
  image2 = 'https://www.omahasteaks.com/gifs/310x310/fmbc5a.jpg';
  image3 = 'https://www.omahasteaks.com/gifs/310x310/bg102.jpg';

  constructor() { }

  ngOnInit() {
  }

}