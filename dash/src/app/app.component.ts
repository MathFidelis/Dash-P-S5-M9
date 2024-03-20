import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from './environment';
import { ReportsComponent } from './components/screens/reports/reports.component';
import { ChartsComponent } from './components/charts/charts.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChartsComponent, ReportsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'volks-dashboard';
  apiUrl: string | undefined;
  cars!: any[];

  constructor() {
    this.apiUrl = environment.apiUrl;
    console.log(this.apiUrl);
  }
}
