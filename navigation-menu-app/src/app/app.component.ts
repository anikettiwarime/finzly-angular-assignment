import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'navigation-menu-app';
  menus = ['Home', 'Services', 'Contact Us'];
  selectedMenu: string = this.menus[0];

  selectMenu(menu: string): void {
    this.selectedMenu = menu;
  }
}
