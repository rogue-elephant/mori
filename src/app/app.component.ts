import { Component } from '@angular/core';
import { IpcRenderer } from 'electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mori';
  private ipc: IpcRenderer;
  public filePaths: string[];

  constructor() {
    if ((<any>window).require) {
      try {
        this.ipc = (<any>window).require('electron').ipcRenderer;
        this.ipc.on('file-reply', (event, arg) => {
          console.log(arg);
          this.filePaths = arg;
        });
      } catch (error) {
        throw error;
      }
    } else {
      console.warn('App not running inside Electron');
    }
  }

  openModal(){
    console.log("Open a modal");
    this.ipc.send("openModal");
  }

  openDialog(){
    this.ipc.send('fileDialog');
  }
}
