import { AfterViewInit, Component, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title = 'xauth';
  drops: number[];
  font_size = 10;
  chineseA: string[];

  constructor() { }

  @ViewChild('canvas') canvas: ElementRef;
  /** Canvas 2d context */
  private ctx: CanvasRenderingContext2D;

  @HostListener('window:resize', ['$event'])
  sizeChange(event) {
    // get current image
    const imgData = this.ctx.getImageData(0, 0, window.innerWidth, window.innerHeight);
    // init new drops array with correct size
    // set canvas to full size
    this.canvas.nativeElement.height = window.innerHeight;
    this.canvas.nativeElement.width = window.innerWidth;
    const columns = this.canvas.nativeElement.width / this.font_size; // number of columns for the rain
    const newDrops = [];
    for (let x = 0; x < columns; x++) {
      newDrops[x] = 0;
    }
    // get sliceIndex => min of either new # of columns or old array size
    let sliceIndex;
    if (columns > this.drops.length) {
      sliceIndex = this.drops.length - 1;
    } else {
      sliceIndex = columns;
    }
    // copy old drop data up to slice index
    for (let x = 0; x <= sliceIndex; x++) {
      newDrops[x] = this.drops[x];
    }
    // randomize new drops so they don't appear in a scanline
    for (sliceIndex; sliceIndex < columns; sliceIndex++) {
      newDrops[sliceIndex] = Math.random() * this.canvas.nativeElement.height;
    }
    // set new drop data
    this.drops = newDrops;

    // reload image
    this.ctx.putImageData(imgData, 0, 0);
    console.log('size changed.', event);
  }

  ngAfterViewInit(): void {

    this.ctx = (this.canvas.nativeElement as HTMLCanvasElement).getContext('2d');

    // making the canvas full screen
    this.canvas.nativeElement.height = window.innerHeight;
    this.canvas.nativeElement.width = window.innerWidth;

    // chinese characters - taken from the unicode charset
    const chinese = '田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑';
    // converting the string into an array of single characters
    this.chineseA = chinese.split('');

    const columns = this.canvas.nativeElement.width / this.font_size; // number of columns for the rain
    // an array of drops - one per column
    this.drops = [];
    // x below is the x coordinate
    // 1 = y co-ordinate of the drop(same for every drop initially)
    for (let x = 0; x < columns; x++) {
      this.drops[x] = 1;
    }

    setInterval(() => { this.draw(); }, 33);
  }
  // drawing the characters
  draw() {
    // Black BG for the canvas
    // translucent BG to show trail
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    this.ctx.fillRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);

    this.ctx.fillStyle = '#0F0'; // green text
    this.ctx.font = this.font_size + 'px arial';
    // looping over drops
    for (let i = 0; i < this.drops.length; i++) {
      // a random chinese character to print
      const text = this.chineseA[Math.floor(Math.random() * this.chineseA.length)];
      // x = i*font_size, y = value of drops[i]*font_size
      this.ctx.fillText(text, i * this.font_size, this.drops[i] * this.font_size);
      // sending the drop back to the top randomly after it has crossed the screen
      // adding a randomness to the reset to make the drops scattered on the Y axis
      if (this.drops[i] * this.font_size > this.canvas.nativeElement.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }
      // incrementing Y coordinate
      this.drops[i]++;

    }
  }

}
