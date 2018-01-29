import { Component } from '@angular/core';
import { MenuItem, TabMenuModule } from 'primeng/primeng';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  items: MenuItem[];
  activeItem: MenuItem;

  ngOnInit() {
    // firebase.initializeApp({
    //   apiKey: 'AIzaSyBJ6xXVRFH1y4_nH1RV_yVyKoVkthY1WYI',
    //   authDomain: 'dentapp-930c3.firebaseapp.com'
    // });

    this.items = [
            {label: 'Tasks', icon: 'fa-bar-chart', url: 'tasklist' }
        ];
    // this.activeItem = this.items[0];

  }

}
