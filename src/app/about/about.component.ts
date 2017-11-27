import { Component, OnInit } from '@angular/core';

//import per leggere i parametri del router component
import { ActivatedRoute } from '@angular/router';

//importo il Route component per spostarmi tra i componenti
import { Router } from '@angular/router';


//importo i servizi che mi servono
import { DataService } from '../data.service';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goals: any;

//inietto nel costruttore la dipendenza (DI) di ActivatedRoute
  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
this.route.params.subscribe(res=>console.log(res.id));

   }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
  }

  sendToHome(){
    this.router.navigate(['']); //path to
  }

}
