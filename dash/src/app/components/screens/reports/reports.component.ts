import { Component, OnInit } from '@angular/core';
import { ChartsComponent } from '../../charts/charts.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartDetails } from '../../../models/chart.details';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [ChartsComponent, NgApexchartsModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css',
})
export class ReportsComponent implements OnInit {
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  chart: ChartDetails = {
    title: 'Número colaboradores X Número atestados',
    categories: ['Mensalistas', 'Horistas', 'Executivos'],
    series: [
      {
        name: 'Colaboradores',
        data: [20, 30, 40],
      },
      {
        name: 'Atestados',
        data: [15, 25, 35],

      },
    ],
  };

  mediaSeries = [
    {
      name: 'Média Colaboradores',
      data: [(20 + 30 + 40) / 3],
      color: '#0F4A76',
    },
    {
      name: 'Média Atestados',
      data: [(15 + 25 + 35) / 3],
      color: '#0C73B8',
    },
  ];

  series = [...this.chart.series, ...this.mediaSeries];

  charts: any = {
    height: 350,
    type: 'bar',
  };

  title: any = {
    text: this.chart.title,
  };

  xaxis: any = {
    categories: this.chart.categories,
  };
}