import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  @Input() url1:string="h";
  constructor() { 
    
  }
  
  //url:string = "";
  

  ngOnInit(): void {
    let a = document.getElementById("ruta") as HTMLAnchorElement
    a.href = this.url1 + "/termsAndConditions"
  }

}
