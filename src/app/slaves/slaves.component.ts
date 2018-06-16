import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { Slave } from './slave';

@Component({
  selector: 'app-slaves',
  templateUrl: './slaves.component.html',
  styleUrls: ['./slaves.component.css']
})
export class SlavesComponent implements AfterViewInit {

  slave: Slave = {
    id: 1,
    name: 'Fianna'
  };


  constructor() { }

  @ViewChild('can') can: ElementRef;
  /** Canvas 2d context */
  private ctx: CanvasRenderingContext2D;

  ngAfterViewInit(): void {

    this.ctx = (this.can.nativeElement as HTMLCanvasElement).getContext('2d');

    // making the canvas full screen
    this.can.nativeElement.style.height = window.innerHeight.toString();
    this.can.nativeElement.width = window.innerWidth;

    // chinese characters - taken from the unicode charset
    const chinese = '田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑';
    // converting the string into an array of single characters
    const chineseA = chinese.split('');

    const font_size = 10;
    const columns = this.can.nativeElement.width / font_size; // number of columns for the rain
    // an array of drops - one per column
    const drops = [];
    // x below is the x coordinate
    // 1 = y co-ordinate of the drop(same for every drop initially)
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    // drawing the characters
    function draw() {
      // Black BG for the canvas
      // translucent BG to show trail
      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      this.ctx.fillRect(0, 0, this.can.nativeElement.width, this.can.nativeElement.height);

      this.ctx.fillStyle = '#0F0'; // green text
      this.ctx.font = font_size + 'px arial';
      // looping over drops
      for (let i = 0; i < drops.length; i++) {
        // a random chinese character to print
        const text = chinese[Math.floor(Math.random() * chineseA.length)];
        // x = i*font_size, y = value of drops[i]*font_size
        this.ctx.fillText(text, i * font_size, drops[i] * font_size);
        // sending the drop back to the top randomly after it has crossed the screen
        // adding a randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * font_size > this.can.nativeElement.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        // incrementing Y coordinate
        drops[i]++;

      }
    }

    setInterval(draw, 33);
  }
}
