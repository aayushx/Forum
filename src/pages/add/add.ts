import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  details=[];
  category=""
  question=""
  desc=""
  username="{{Username}}"
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.details=navParams.get('detail')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }


  Submit(){
    if(this.category!=""&&this.desc!=""&&this.question!=""){

      this.details.push({'name':this.username,'date':new Date().toDateString(), 
                          'time':new Date().toTimeString(), 'qtype':this.category,
                          'question':this.question,'answers':0,'answer':'Not Answered',
                          'description':this.desc,
                          'upvotes':0,'downvotes':0,'ch':0})

      this.navCtrl.push(HomePage,{
        detail:this.details
      })
    }
    }
  }

