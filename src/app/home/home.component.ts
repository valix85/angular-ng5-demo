import { Component, OnInit } from '@angular/core';
import { leave } from '@angular/core/src/profile/wtf_impl';

// importo le animazioni necessarie
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  /*
  template: `
    <p>Home Template multiline work fine!</p>
  `,
  */
  styleUrls: ['./home.component.scss'],
  /*
  styles:[`
    p {font-weight: bold; color: gray;}
  `]
  */


  animations: [
    trigger('goals', [
        transition ('* => *', [
          query(':enter', style({opacity:0}), {optional: true}),

          query(':enter', stagger('300ms',[
            animate('.6s ease-in', keyframes([
              style({opacity:0,transform:'translateY(-75%)', offset: 0}),
              style({opacity:.5,transform:'translateY(35px)', offset: .3}),
              style({opacity:1,transform:'translateY(0)', offset: 1}),
            ]))]), {optional: true}),

            query(':leave', stagger('300ms',[
              animate('.6s ease-in', keyframes([
                style({opacity:1,transform:'translateY(0)', offset: 0}),
                style({opacity:.5,transform:'translateY(35px)', offset: .3}),
                style({opacity:0,transform:'translateY(-75%)', offset: 1}),
              ]))]), {optional: true})
        ])
    ])

  ]
//end animations

})
export class HomeComponent implements OnInit {
  /*
  qui si mettono le proprietà in binding con la view, richiamabili da doppie parentesi graffe
  */
  itemCounter: number = 4;
  btnText: string = 'Add an item';
  goalText: string = 'My first goal item test';
  goals: string[]  = ['test1','aaaa bb asfsdkjfs fsdfs sdfs','s  skfds js sff s jjs.'];

 

  constructor() { }

  ngOnInit() {
    this.itemCounter = this.goals.length;
  }

  addItem(){
    //alert(this.goalText);
    this.goals.push(this.goalText);
    this.goalText='';
    this.itemCounter = this.goals.length;

  }

  removeItem(item:number){
    //console.log(item);
    //alert(item);
    this.goals.splice(item,1);
    this.itemCounter = this.goals.length;
  }

}
