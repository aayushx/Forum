import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  value:any
  searchQuery: string=''; 
  description='Some people are suggesting me to watch the movie,so I want to know whether its good or not'
  upvotes=10
  downvotes=5
  ch=0
  username="\0"
  check1: boolean=false
  check: boolean=false
  today = Date.now();
  d= new Date();
  cc='';
  comments=[];
  aname="Aayush Saxena"
  atime="19th Feb, 2019 16:34pm"
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.value=navParams.get('detail')
  }
  inc(){
    
    if(this.ch==0){
      this.upvotes++;
      this.ch=1;
    }else if(this.ch==1){
      this.upvotes--;
      this.ch=0;
    }
  }
  dec(){
    if(this.ch==0){
      this.downvotes=this.downvotes+1;
      this.ch=2;
    }else if(this.ch==2){
      this.downvotes--;
      this.ch=0;
    }
  }
  alert(){
    if(this.username=="\0"){
    let alert = this.alertCtrl.create({
      title: 'Enter Name',
      inputs: [
        {
          name: 'username',
          placeholder: 'Username',
          type: 'text',
          id: 'username'
        }
      ],
      buttons: [
        {
          text: 'Submit',
          role: 'submit'
        },
        {
          handler: data => {
            this.username=data.username
          }
        }
      ]
    })
    alert.present();
    }else{
      this.submit();
    }
  }
  submit(){
    this.today = Date.now();
    this.d= new Date();
    this.check=true;
    this.cc=this.cc;
    if(this.cc!="")
      this.comments.push({'dname':this.username , 'dtime':new Date().toString(),
                        'comm':this.cc})
    this.cc="";
    this.username="\0";
  }
  Answer(){
    this.check1=!(this.check1);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
