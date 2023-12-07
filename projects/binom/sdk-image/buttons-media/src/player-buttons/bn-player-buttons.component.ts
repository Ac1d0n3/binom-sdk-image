import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'bn-player-buttons',
  templateUrl: './bn-player-buttons.component.html',
  standalone:true,
  imports:[],
})
export class BnPlayerButtonsComponent  implements OnInit {
  @Output() action = new EventEmitter();
  @Input() enableToolTips: boolean = false;
  @Input() translateTag: string = '';
  @Input() buttonStyle: string = 'round';
  @Input() color: any = '';

  @Input() subButtons: boolean = false;
  @Input() fullscreen: boolean = false;
  @Input() audioOff: boolean = false;
  @Input() paused: boolean = false;

  @Input() audioButton: boolean = true;
  @Input() fullscreenButton: boolean = true;
  @Input() gridButton: boolean = true;

  @Input() disableBackward: boolean = false;
  @Input() disableForward: boolean = false;
  @Input() disableFullscreen: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  fireAction(data:any){
    this.action.emit(data)
  }

}
