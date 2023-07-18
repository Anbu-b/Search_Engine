import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataloadService } from './dataloader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent {

  dataFromServer: any=[];
  modelVar: any = {};
  constructor(private load: DataloadService) {}

  getDataServer() {
    let obj = this.load.LoadData();
    obj.subscribe(data => {
      this.dataFromServer = data;
    })
  };

  ngOnInit() {} 




onSubmit() {
this.getDataServer();
}

}