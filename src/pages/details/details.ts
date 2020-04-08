import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http'

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
  answer="";
  comments: any;
  uid = 12345
  aname="Aayush Saxena"
  atime="19th Feb, 2019 16:34pm"
  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public http: Http) {
                this.value=navParams.get("detail")
          var body= {
            questionid : this.value.questionid
          }
    this.http.post('http://localhost:3000/disanswers',body).subscribe(res=>{
      this.comments = res.json();
      console.log(this.comments);
    },err =>{
      console.log("Server Down")
    })
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
  incc(i:number){
    
    if(this.comments[i].ch==0){
      this.comments[i].upvotes++;
      this.comments[i].ch=1;
    }else if(this.comments[i].ch==1){
      this.comments[i].upvotes--;
      this.comments[i].ch=0;
    }else if(this.comments[i].ch==2){
      this.comments[i].downvotes--;
      this.comments[i].upvotes++;
      this.comments[i].ch=1;
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
  decc(i:number){
    if(this.comments[i].ch==0){
      this.comments[i].downvotes++;
      this.comments[i].ch=2;
    }else if(this.comments[i].ch==2){
      this.comments[i].downvotes--;
      this.comments[i].ch=0;
    }else if(this.comments[i].ch==1){
      this.comments[i].downvotes++;
      this.comments[i].upvotes--;
      this.comments[i].ch=2;
    }
  }

  submit(){
    if(this.answer!=""){

      var body= {
          questionid : this.value.questionid,
          date: new Date().toDateString(),
          userid: this.uid,
          answer: this.answer,
          time: new Date().toTimeString()  
        }
      this.http.post('http://localhost:3000/answers',body).subscribe(res =>{
           console.log("success")
      })               

      this.http.post('http://localhost:3000/disanswers',body).subscribe(res=>{
      this.comments = res.json();
      console.log(this.comments);
    },err =>{
      console.log("Server Down")
    })
  
    }
    this.answer="";

    this.http.post('http://localhost:3000/inc_count',body).subscribe(res=>{
      
    })
 
  }
  Answer(){
    this.check1=!(this.check1);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
