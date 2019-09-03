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

   details = [{'name':'Rahul','date':'18th Feb, 2019','time':'13:47pm',
                "qtype":'Movies','question':'What is Baaghi 2?','answers':10,
                'answer':'Baaghi 2 is the world worst movie you can ever watch.',
                'description':'Some people are suggesting me to watch the movie,so I want to know whether its good or not',
                'upvotes':10 , 'downvotes':5,'ch':0},
                
                {'name':'Hitesh','date':'23th Feb, 2019','time':'3:32pm',
                'qtype':'College Life','question':'Sample question?','answers':14,
                'answer':'Sample answer for question.',
                'description':'Sample description for understanding.',
                 'upvotes':14 , 'downvotes':3,'ch':0}]
  todos: any;
  constructor(public navCtrl: NavController,
              private socialSharing: SocialSharing,
              public http: Http,
              public navParams: NavParams) {
                const detail=navParams.get('detail')
                if(detail!=null){
                  this.details=detail
                }
    
  }
  getItems(ev: any) {
    const val = ev.target.value;

    if (val && val.trim() != '') {
      // this.details.qtype = this.details.filter((item) => {
        // return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      // })
    }
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
    this.navCtrl.push(AddPage,{
      detail:this.details
    })
  }

  Search(){
    if(this.csearch==0)
      this.csearch=1;
    else 
      this.csearch=0;
  }

  Filter(){
    
  }

}
