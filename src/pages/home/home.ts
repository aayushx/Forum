import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DetailsPage} from '../details/details';
import { SocialSharing } from '@ionic-native/social-sharing'
import { Http } from '@angular/http';
import {AddPage} from '../add/add'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  searchQuery: string = ''
  csearch=0
  category=""
  cc=""

  details: any;
  constructor(public navCtrl: NavController,
              private socialSharing: SocialSharing,
              public http: Http,
              public navParams: NavParams) {

                this.http.get('http://localhost:3000/disquestions').subscribe(res=>{
                    this.details = res.json();
                },err =>{
                    console.log("Server Down")
                })
    
  }

  inc(i:number){
    
    if(this.details[i].ch==0){
      this.details[i].upvotes++;
      this.details[i].ch=1;
    }else if(this.details[i].ch==1){
      this.details[i].upvotes--;
      this.details[i].ch=0;
    }else if(this.details[i].ch==2){
      this.details[i].downvotes--;
      this.details[i].upvotes++;
      this.details[i].ch=1;
    }
  }
  dec(i:number){
    if(this.details[i].ch==0){
      this.details[i].downvotes++;
      this.details[i].ch=2;
    }else if(this.details[i].ch==2){
      this.details[i].downvotes--;
      this.details[i].ch=0;
    }else if(this.details[i].ch==1){
      this.details[i].downvotes++;
      this.details[i].upvotes--;
      this.details[i].ch=2;
    }
  }
  Share(){
    this.socialSharing.share("Hey! Check This Out!  ",
                             "SRM Connect Forum Question",
                             "",
                             "    https://drive.google.com/open?id=1HL-sjAZze8j-eBqbUWzCWpWQNiAdDtMn")
  }
  Details(i:number){
    this.navCtrl.push(DetailsPage,{
      detail:this.details[i]
    });
  }
  
  AddPage(){
    this.navCtrl.push(AddPage)
  }

  Search(){
    if(this.csearch==0)
      this.csearch=1;
    else 
      this.csearch=0;
  }

  Filter(category:string){
    var body={
      category: category
    }
    this.http.post('http://localhost:3000/filter',body).subscribe(res=>{
      this.details=res.json();
    })
  }

  onCancel(){
    this.http.get('http://localhost:3000/disquestions').subscribe(res=>{
                    this.details = res.json();
                },err =>{
                    console.log("Server Down")
                })
    
  }


  SearchString(term:string){
    var body={
      term:term
    }
    this.http.post('http://localhost:3000/search',body).subscribe(res=>{
      this.details=res.json();
    })
  }

  ionViewWillEnter(){
    this.http.get('http://localhost:3000/disquestions').subscribe(res=>{
                    this.details = res.json();
                },err =>{
                    console.log("Server Down")
                })
  }

}
