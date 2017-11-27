import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class DataService {

  //creo una proprietà interna al servizio
  private goals = new BehaviorSubject<any>(['primo task','secondo task']);
  //creo una proprietà osservabile
  goal = this.goals.asObservable();

  constructor() { }

  //creo le mie operazioni del servizio
  changeGoal(goal){
    this.goals.next(goal);
  }

}
