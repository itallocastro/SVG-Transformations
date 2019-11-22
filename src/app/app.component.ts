import { Component, OnInit, OnChanges, SimpleChanges, Input} from '@angular/core';
import * as d3 from 'd3';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'svgtrainning';
  @Input() raio=12;
  @Input() angle = 22;
  @Input() eixoX=0;
  @Input() eixoY=0;
  

  rotation()
  {
    return "rotate("+this.angle+")";
  }

  translation()
  {
    return "translate("+this.eixoX+","+this.eixoY+")";
  }


  

  
  
  
    
    


}
