import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DetailsPage} from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  searchQuery: string = ''
  ch=0
   details = [{'name':'Rahul','date':'18th Feb, 2019','time':'13:47pm',
                "qtype":'Movies','question':'What is Baaghi 2?','answers':10,
                'answer':'Baaghi 2 is the world worst movie you can ever watch.',
                'views':10},
                
                {'name':'Hitesh','date':'23th Feb, 2019','time':'3:47pm',
                'qtype':'College Life','question':'Sample question?','answers':14,
                'answer':'Sample answer for question.',
                'views':4}]

  constructor(public navCtrl: NavController) {
    
  }
  getItems(ev: any) {
    const val = ev.target.value;

    if (val && val.trim() != '') {
      // this.details.qtype = this.details.filter((item) => {
        // return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      // })
    }
  }
  Share(){

  }
  Details(){
    this.navCtrl.push(DetailsPage,{
      detail:this.details[1]
    });
    this.details[0].views++;
  }
}
