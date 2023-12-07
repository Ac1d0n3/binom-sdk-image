import { Component, Input } from '@angular/core';

@Component({
  selector: 'bn-exif-info',
  templateUrl: './bn-exif-info.component.html',
  standalone:true,
  imports:[],
})
export class BnExifInfoComponent {
  @Input () exifData!:any;
}
