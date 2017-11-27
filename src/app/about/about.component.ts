import { Component, OnInit } from '@angular/core';

//import per leggere i parametri del router component
import { ActivatedRoute } from '@angular/router';

//importo il Route component per spostarmi tra i componenti
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
//inietto nel costruttore la dipendenza (DI) di ActivatedRoute
  constructor(private route: ActivatedRoute, private router: Router) {
this.route.params.subscribe(res=>console.log(res.id));

   }

  ngOnInit() {
  }

  sendToHome(){
    this.router.navigate(['']); //path to
  }

}
