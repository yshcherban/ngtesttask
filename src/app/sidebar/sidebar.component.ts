import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems:Array<string> = ['Menu Item', 'Menu Item', 'Menu Item'];
  subMenuItems:Array<string> = ['Submenu Item', 'Submenu Item', 'Submenu Item'];

  sidebarMenuIsOpen;
  sidebarSubMenuIsOpen;


  constructor(private storage: LocalStorageService) {
    this.sidebarMenuIsOpen = this.storage.get('sidebarMenuStatus') == null ?
      true : this.storage.get('sidebarMenuStatus');

    this.sidebarSubMenuIsOpen = this.storage.get('sidebarSubmenuStatus') == null ?
      true : this.storage.get('sidebarSubmenuStatus');

  }

  ngOnInit() {
  }

  toggleSidebarMenu() {
    if(this.sidebarMenuIsOpen) {
      this.sidebarMenuIsOpen = false;
      this.storage.set('sidebarMenuStatus', false);
    } else {
      this.sidebarMenuIsOpen = true;
      this.storage.set('sidebarMenuStatus', true);
    }
  }

  toggleSidebarSubmenu() {
    if(this.sidebarSubMenuIsOpen) {
      this.sidebarSubMenuIsOpen = false;
      this.storage.set('sidebarSubmenuStatus', false);
    } else {
      this.sidebarSubMenuIsOpen = true;
      this.storage.set('sidebarSubmenuStatus', true);
    }
  }

}
