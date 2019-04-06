import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-measurement',
  templateUrl: './measurement.component.html',
  styleUrls: ['./measurement.component.css']
})
export class MeasurementComponent implements OnInit {
  @ViewChild('chart') chartElementRef: ElementRef;

  chart : Chart;
  

  
  constructor() { }

  ngOnInit() {
    
    let context = this.chartElementRef.nativeElement;
    this.chart = new Chart(context, {
      type: 'line',
      data: {
        labels: ['18:10', '18:11', '18:12', '18:13', '18:14', '18:15', '18:16'],
        datasets: [
          {
          data: [-5, 55, 40, 150, 125, 150, 175],
          borderColor: '#c71585',
          fill: false
        },
        {
          data: [-15, 40, 5, 105, 75, 105, 125],
          borderColor: '#adff2f',
          fill: false
        },
        {
          data: [40, 49, 45, 60, 55, 60, 58, 65],
          borderColor: '#4682b4',
          fill: false
        }
        ]
      },
      options:{
        legend:{
          display: false
        },
        scales:{
          xAxes:[{
            display:true
          }],
          yAxes:[{
            display:true
          }]
        }
      }

    })
  }

}
