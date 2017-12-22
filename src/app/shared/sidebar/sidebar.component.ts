import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent  {
  showFiller = false;
  
  constructor() { }
  
  @ViewChild('sidenav') sidenav: MatSidenav;
  
    reason = '';
  
    close(reason: string) {
      this.reason = reason;
      this.sidenav.close();
    }


}
