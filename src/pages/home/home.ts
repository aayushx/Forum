import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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
  ch=0
  csearch=0
   details = [{'name':'Rahul','date':'18th Feb, 2019','time':'13:47pm',
                "qtype":'Movies','question':'What is Baaghi 2?','answers':10,
                'answer':'Baaghi 2 is the world worst movie you can ever watch.',
                'upvotes':10 , 'downvotes':5},
                
                {'name':'Hitesh','date':'23th Feb, 2019','time':'3:32pm',
                'qtype':'College Life','question':'Sample question?','answers':14,
                'answer':'Sample answer for question.',
                 'upvotes':14 , 'downvotes':3}]
  todos: any;
  constructor(public navCtrl: NavController,
              private socialSharing: SocialSharing,
              public http: Http) {

    
  }
  getItems(ev: any) {
    const val = ev.target.value;

    if (val && val.trim() != '') {
      // this.details.qtype = this.details.filter((item) => {
        // return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      // })
    }
  }

  inc(){
    
    if(this.ch==0){
      this.details[0].upvotes++;
      this.ch=1;
    }else if(this.ch==1){
      this.details[0].upvotes--;
      this.ch=0;
    }else if(this.ch==2){
      this.details[0].downvotes--;
      this.details[0].upvotes++;
      this.ch=1;
    }
  }
  dec(){
    if(this.ch==0){
      this.details[0].downvotes++;
      this.ch=2;
    }else if(this.ch==2){
      this.details[0].downvotes--;
      this.ch=0;
    }else if(this.ch==1){
      this.details[0].downvotes++;
      this.details[0].upvotes--;
      this.ch=2;
    }
  }
  Share(){
    this.socialSharing.share("Hey! Check This Out!  ",
                             "SRM Connect Forum Question",
                             "",
                             "    https://drive.google.com/open?id=1HL-sjAZze8j-eBqbUWzCWpWQNiAdDtMn")
  }
  Details(){
    this.navCtrl.push(DetailsPage,{
      detail:this.details[1]
    });
  }
  
  AddPage(){
    this.navCtrl.push(AddPage,{

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
