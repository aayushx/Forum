import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';

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
  uid=12345
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams, 
              public http: Http) {

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }


  Submit(){
    if(this.category!=""&&this.desc!=""&&this.question!=""){

                          var body= {
                            name: "Username",
                            question: this.question,
                            date: new Date().toDateString(),
                            questiontitle: this.question,
                            userid: this.uid,
                            description: this.desc,
                            time: new Date().toTimeString(),
                            qtype: this.category
                          }
                          this.http.post('http://localhost:3000/uploadquestion',body).subscribe(res =>{
                            console.log("success")
                          })                    
      
      this.navCtrl.pop();
    }
    }
  }

