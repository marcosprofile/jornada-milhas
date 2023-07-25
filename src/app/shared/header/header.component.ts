import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  /* isNavbarVisible = false;
  iconStatus = 'menu';
  screenWidth: number;

  constructor() {
    this.screenWidth = window.innerWidth;
    this.updateNavbarVisibility();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
    this.updateNavbarVisibility();
  }

  updateNavbarVisibility() {
    this.isNavbarVisible = this.screenWidth <= 500;
  }

  toggleNavbar() {
    this.isNavbarVisible = !this.isNavbarVisible;
    this.iconStatus = this.isNavbarVisible ? 'close' : 'menu';
  } */

  isNavbarVisible = false;
  iconStatus = 'menu';
  screenWidth: number;

  constructor() {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
    this.updateNavbarVisibility();
  }

  updateNavbarVisibility() {
    this.isNavbarVisible = this.screenWidth <= 700;
  }

  toggleNavbar() {
    this.isNavbarVisible = !this.isNavbarVisible;
    this.iconStatus = this.isNavbarVisible ? 'close' : 'menu';
  }
}
