import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <ul style="display: flex; gap:20px; list-style-type: none">
      <li>
        <a routerLink="/">Home</a>
      </li>
      <li>
        <a routerLink="/articles">Articles</a>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'router';
}
