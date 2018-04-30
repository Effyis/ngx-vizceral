import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//const sample = require("../assets/sample_data_simlpe.json")


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'app';

  mainCount = 0;

  private sample: any= {};
  public traffic: any= null;

  private n:number = 1;

  constructor( private http: HttpClient)  { }
  ngAfterViewInit(): void{

    //this.traffic = Object.assign({}, this.sample);
    this.getData();


  }

  getData()
  {
    this.getSample().subscribe(data => this.traffic = data, error => console.log(error),() => {this.updateGraph()});

  }

  public getSample(): Observable<any> {
    return this.http.get('../assets/sample_data_simple.json');


  }
  updateGraph()
  {
    this.traffic = Object.assign({}, this.traffic);
    console.log("draw"+this.mainCount);
  }
  viewChanged()
  {
    console.log('view changed');
  }
  viewUpdated()
  {
    console.log('view Updated');
  }
  objectHighlighted(event)
  {
    console.log(`object ${event.name} highlighted`);
  }
  nodeContextSizeChanged()
  {
    console.log('node Context Size Changed');
  }
  matchesFound()
  {
    console.log('matches found');
  }

  ngOnDestroy(): void {


  }

}
