import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DatasService } from './datas.service';

declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  data: any;

  constructor(private dataService: DatasService) {}

  ngOnInit(): void {
    this.dataService.obtainsData().subscribe((data) => {
      this.data = data;
      this.init();
    });
  }

  /**
   * Initialize the graph API with an 1 second delay,
   * allowing the integration of the API with the Angular.
   *
   * @return void
   */
  init(): void {
    if (typeof google !== 'undefined') {
      google.charts.load('current', {
        packages: ['corechart'],
      });
      setTimeout(() => {
        google.charts.setOnLoadCallback(this.showGraphics());
      }, 1000);
    }
  }

  /**
   * method called as soon as the graphics
   * API is initialized.
   * Responsible for calling the generators of
   * the graphics.
   *
   * @return void
   */
  showGraphics(): void {
    this.showPieChart();
    this.show3dPieChart();
    this.showBarChart();
    this.showLineChart();
    this.showColumnChart();
    this.showDonutChart();
  }

  showPieChart(): void {
    const el = document.getElementById('pie_chart');
    const chart = new google.visualization.PieChart(el);

    chart.draw(this.obtainDataTable(), this.obtainOptions());
  }

  show3dPieChart(): void {
    const el = document.getElementById('3d_pie_chart');
    const chart = new google.visualization.PieChart(el);
    const options = this.obtainOptions();

    options['is3D'] = true;
    chart.draw(this.obtainDataTable(), options);
  }

  showDonutChart(): void {
    const el = document.getElementById('donut_chart');
    const chart = new google.visualization.PieChart(el);
    const options = this.obtainOptions();

    options['pieHole'] = 0.4;
    chart.draw(this.obtainDataTable(), options);
  }

  showBarChart(): void {
    const el = document.getElementById('bar_chart');
    const chart = new google.visualization.BarChart(el);

    chart.draw(this.obtainDataTable(), this.obtainOptions());
  }
  showLineChart(): void {
    const el = document.getElementById('line_chart');
    const chart = new google.visualization.LineChart(el);

    chart.draw(this.obtainDataTable(), this.obtainOptions());
  }
  showColumnChart(): void {
    const el = document.getElementById('column_chart');
    const chart = new google.visualization.ColumnChart(el);

    chart.draw(this.obtainDataTable(), this.obtainOptions());
  }

  obtainDataTable(): any {
    const data = new google.visualization.DataTable();

    data.addColumn('string', 'Month');
    data.addColumn('number', 'Quantity');
    data.addRows(this.data);

    return data;
  }

  obtainOptions(): any {
    return {
      title: 'Quantity of register in the first semester',
      width: 400,
      height: 300,
    };
  }
}
