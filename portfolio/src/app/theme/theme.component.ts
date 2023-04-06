import { Component } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css'],
})
export class ThemeComponent {
  toggle = true;
  status = 'Dark';

  themeChange() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Dark' : 'Light';
  }
}
