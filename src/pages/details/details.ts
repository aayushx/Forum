import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  check: boolean=false
  check1: boolean=false
  comment=""
  today = Date.now();
  d= new Date();
  dtime:any=new Date().toString();
  dname="Developer"
  aname="Aayush Saxena"
  atime="19th Feb, 2019 16:34pm"
  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
  submit(){
    this.check=true
    this.comment=this.comment
  }
  Answer(){
    this.check1=true
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
