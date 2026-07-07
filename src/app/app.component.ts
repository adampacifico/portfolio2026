import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate, query } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          animate(
            '350ms cubic-bezier(0.4, 0, 0.2, 1)',
            style({ opacity: 1, transform: 'translateY(0)' })
          )
        ], { optional: true })
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'Portfolio2025';
  isDarkMode = false;

  private readonly darkThemeClass = 'theme-dark';
  private readonly themeStorageKey = 'portfolio-theme';

  ngOnInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const savedTheme = window.localStorage.getItem(this.themeStorageKey);
    this.isDarkMode = savedTheme ? savedTheme === 'dark' : true;
    this.applyTheme();
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
  }

  private applyTheme(): void {
    if (typeof document === 'undefined' || typeof window === 'undefined') {
      return;
    }

    document.body.classList.toggle(this.darkThemeClass, this.isDarkMode);
    window.localStorage.setItem(this.themeStorageKey, this.isDarkMode ? 'dark' : 'light');
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
