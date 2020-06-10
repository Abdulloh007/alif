import { Component,  } from '@angular/core';

@Component({
  selector: 'app-arrey',
  templateUrl: './arrey.component.html',
  styleUrls: ['./arrey.component.css']
})
export class ArreyComponent {
  colorHex = '';
  RGBAColor = '';
  ErrorState = '';
  youtube = '1';

  constructor() {}

  opasity(event : Event) {
    this.youtube = event.target.value;
  }
  onConvertColor() {

   let l = this.youtube;
  function hexToRgbA(hex) {
    let c;

    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
      c = hex.substring(1).split('');
      if (c.length == 3) {
        c = [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c = '0x' + c.join('');
      return 'rgba('+[(c >> 16)&255, (c >> 8)&255, c&255].join(',') + ',' + l + ');';
    }
    throw new Error('Bad Hex');

  }

  this.RGBAColor = hexToRgbA(`#${this.colorHex.toString()}`);
  console.log(this.colorHex);
  this.colorHex = '';
  console.log(this.colorHex);
}

  checkErrorState() {
    if (this.colorHex.slice(0, 1) == '#') {
      this.ErrorState = 'error';
    } else {
      this.ErrorState = '';
    }
  }
}
