import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menuOpened : boolean = false;
  airlineMenuExpanded : boolean = false;
  hubMenuExpanded : boolean = false;
  aircraftMenuExpanded : boolean = false;
  routeMenuExpanded : boolean = false;
  helpMenuExpanded : boolean = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  menuToogle() {
    this.menuOpened = !this.menuOpened;

    if(!this.menuOpened) {
      this.airlineMenuExpanded = false;
      this.hubMenuExpanded  = false;
      this.aircraftMenuExpanded  = false;
      this.routeMenuExpanded = false;
      this.helpMenuExpanded = false;
    }
  }

  airlineMenuToogle() {
    this.airlineMenuExpanded = !this.airlineMenuExpanded;
  }

  hubMenuToogle() {
    this.hubMenuExpanded = !this.hubMenuExpanded;
  }

  aircraftMenuToogle() {
    this.aircraftMenuExpanded = !this.aircraftMenuExpanded;
  }

  routeMenuToogle() {
    this.routeMenuExpanded = !this.routeMenuExpanded;
  }

  helpMenuToogle() {
    this.helpMenuExpanded = !this.helpMenuExpanded;
  }
}
