import { Component, OnInit, ElementRef } from '@angular/core';
import {UserNameService} from '../../services/user-name.service'
@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent implements OnInit {
  profile:any[any];
  repos:any[];
  username:string
  constructor(private userNameService:UserNameService,private elRef: ElementRef) { 
    console.log("service is now ready")  }
    //this.userNameService.getUserInfo().subscribe((profile)=>
    //{console.log(profile)
  //    this.profile=profile as any;
  //   }
    
  //   )
  // this.userNameService.getUserRepos().subscribe(repo=>{
  //   {
  //     this.repos=repo as any;
  //   }
  //})  


  
  handleClick($event) {
    
    //const parentElement = this.elRef.nativeElement;
    //console.log(parentElement)
    console.log($event.target.parentNode)
    var repoName=$event.target.parentElement.childNodes[1].wholeText
    console.log(document.getElementById('myList').childNodes)
    // var childNodesArray=Array.from(document.getElementById('myList').childNodes)
    //      var arr=childNodesArray.filter(element=>{
    //       console.log(typeof(repoName))
    //       return (element.outerText==repoName);
    // })
    //dw
    // console.log(arr);
    // if(arr.length==0){
      var node = document.createElement("LI");
    var textnode = document.createTextNode(repoName);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);

    // }
    
  
  }
  findProfile(){
    this.userNameService.updateProfile(this.username)
    this.userNameService.getUserInfo().subscribe(profile=>
      {console.log(profile)
       this.profile=profile as any;
      }
      
      )
    this.userNameService.getUserRepos().subscribe(repo=>{
      {console.log(repo)
        this.repos=repo as any;
      }
    })
  }
  ngOnInit(): void {
  }

}
