import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images = ['photo_1.jpg', 'photo_2.jpg', 'photo_3.jpg'];
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
