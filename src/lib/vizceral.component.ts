import {
  Component,
  AfterViewInit, Input, Output, EventEmitter,
  ViewChild, HostBinding, ViewEncapsulation, SimpleChanges, OnChanges
} from '@angular/core';

import { VizceralDirective } from './vizceral.directive';

import { VizceralSize } from './vizceral.interfaces';

@Component({
  selector: 'vizceral',
  exportAs: 'ngxVizceral',
  template:`<div class="vizceral">
              <canvas vizceral [traffic]="initData"  [size]="size"  [view]="view" [showLabels]="showLabels" [filters]="filters"
                      (viewChanged)="viewChanged.emit($event)" (viewUpdated)="viewUpdated.emit($event)" (objectHighlighted)="objectHighlighted.emit($event)"
                      (nodeContextSizeChanged)="nodeContextSizeChanged.emit($event)" [objectToHighlight]="objectToHighlight" (matchesFound)="matchesFound.emit($event)"
                      [match]="match" [modes]="modes" [allowDraggingOfNodes]="allowDraggingOfNodes" [styles]="styles" style=" width:100%; height:100%"
              >
              </canvas>
          
              <div class="vizceral-notice"></div>
          
            </div>`,

  styles: [`vizceral {
  /* stylelint-disable */
  &[fxflex] {
     display: flex;
     flex-direction: column;
     -webkit-box-orient: column;
     -webkit-box-direction: column;
     min-width: 0;
     min-height: 0;
   }
  /* stylelint-enable */

  width: 100%;
  height: 100%;
  &.vizceral {
     width: 100%;
     height: 100%;
   }
  }



  .vizceral {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }

  .vizceral .vizceral-notice {
    display: block;
    position: absolute;
    padding: 0 3px;
    width: 200px;

    background-color: #ffffff;
    border-left: 2px solid grey;

    font-size: 11px;
    color: grey;
  }

  .vizceral .vizceral-notice ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .vizceral .vizceral-notice > ul > li {
    line-height: 12px;
    padding-top: 3px;
    padding-bottom: 3px;
  }

  .vizceral .vizceral-notice .subtitle {
    font-weight: 900;
  }
  `],
  encapsulation: ViewEncapsulation.None
})
export class VizceralComponent implements AfterViewInit, OnChanges {
  private json: any = null;
  public initData: any = null;

  @Input()
  set data(data: string) {
    this.setJSON(data);
  }

  @Input() size: VizceralSize = {width:null,height:null};
  //@Input() traffic: any = null;
   @Input()
     set traffic(data: any) {
       this.setTraffic(data);
     }

  @Input() view: any = null;
  @Input() showLabels: any = null;
  @Input() filters: any = null;
  @Output() viewChanged = new EventEmitter<any>();
  @Output() viewUpdated = new EventEmitter<any>();
  @Output() objectHighlighted = new EventEmitter<any>();
  @Output() nodeContextSizeChanged = new EventEmitter<any>();
  @Input() objectToHighlight: any = null;
  @Output() matchesFound = new EventEmitter<any>();
  @Output() nodeUpdated = new EventEmitter<any>();
  @Output() objectHovered = new EventEmitter<any>();
  @Input() match: any = null;
  @Input() modes: any = null;
  @Input() allowDraggingOfNodes: any = null;
  @Input() styles: any = null;
  @Input() targetFramerate:any = null;

  @HostBinding('class.vizceral')

  @ViewChild(VizceralDirective) directiveRef: VizceralDirective;

  constructor() {
  }

  ngAfterViewInit(): void {
    if (this.json != null) {
      this.setJSON(this.json, true);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {

  }
  private setTraffic(data: any) {
    this.initData = data;
    if (this.directiveRef && this.directiveRef.vizceral()) {
      console.log('Data changed..')
      this.directiveRef.vizceral().updateData(data);
    }
  }

  private setJSON(json: string, force?: boolean): void {
    if (force || json !== this.json) {
      if (this.directiveRef && this.directiveRef.vizceral()) {
        // this.directiveRef.loadFromJSON(json, () => {
        //   //this.dataLoaded.emit(this.directiveRef.vizceral());
        // });
      }

      this.json = json;
    }
  }
}
