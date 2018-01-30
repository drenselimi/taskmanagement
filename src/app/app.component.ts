import { Component } from '@angular/core';
import { MenuItem, TabMenuModule } from 'primeng/primeng';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = "App";

  ngOnInit() {
  }

}
