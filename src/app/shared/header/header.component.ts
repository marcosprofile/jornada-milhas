import { Component, HostListener, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isNavbarVisible = false;
  iconStatus = 'menu';
  screenWidth: number = window.innerWidth;

  @ViewChild('navbarElement', { static: true }) navbarElement!: ElementRef;

  ngOnInit() {
    this.updateNavbarVisibility();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
    this.updateNavbarVisibility();
  }

  updateNavbarVisibility() {
    this.isNavbarVisible = this.screenWidth <= 600;
    const navbarEl = this.navbarElement.nativeElement as HTMLElement;
    navbarEl.style.height = this.isNavbarVisible ? '274px' : '76px';
    navbarEl.style.display = this.isNavbarVisible ? 'flex' : 'none';
  }

  toggleNavbar() {
    this.isNavbarVisible = !this.isNavbarVisible;
    this.iconStatus = this.isNavbarVisible ? 'close' : 'menu';

    const navbarEl = this.navbarElement.nativeElement as HTMLElement;
    navbarEl.style.display = this.isNavbarVisible ? 'flex' : 'none';
    navbarEl.style.height = this.isNavbarVisible ? '274px' : '76px';
  }
}
