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
  upvotes=32
  downvotes=5
  ch=0
  username="{{Username}}"
  check1: boolean=false
  check: boolean=false
  today = Date.now();
  d= new Date();
  cc='';
  comments=[];
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
    }else if(this.ch==2){
      this.downvotes--;
      this.upvotes++;
      this.ch=1;
    }
  }
  dec(){
    if(this.ch==0){
      this.downvotes++;
      this.ch=2;
    }else if(this.ch==2){
      this.downvotes--;
      this.ch=0;
    }else if(this.ch==1){
      this.downvotes++;
      this.upvotes--;
      this.ch=2;
    }
  }

  submit(){
    this.today = Date.now();
    this.d= new Date();
    this.check=true;
    this.cc=this.cc;
    if(this.cc!=""){
      this.comments.push({'dname':this.username , 'dtime':new Date().toString(),
                        'comm':this.cc, 'upvoted':12, 'downvoted':4})
    }
    this.cc="";
  }
  Answer(){
    this.check1=!(this.check1);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
