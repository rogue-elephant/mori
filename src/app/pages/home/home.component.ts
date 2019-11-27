import { Component } from '@angular/core';
import { IpcRenderer, Dialog } from 'electron';

@Component({
  selector: 'mori-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private ipc: IpcRenderer;
  private dialog: Dialog;
  public filePath: string[];

  constructor() {
  }
}
