import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['photo_1.jpg', 'photo_2.jpg', 'photo_3.jpg'];
  headlines = [
    'Bring engineering to the next Level.',
    'Born to code',
    'Graduated at Life'
  ];
  currentImage = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;//% -modulo, teilt solange bis null rauskommt.
      this.showImage = false;
      setTimeout(() => {
        this.showImage = true;
      }, 5);
    }, 8000);
  }
}
