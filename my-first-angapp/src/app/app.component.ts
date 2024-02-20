import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Book } from './model/Book';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  /* template:`<p> Hi, {{ title }}</p>
             <h4> Hello, happy learning angular!</h4>
             `,  
  */
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string ;
  mybook:{name:string,price:number};
  mybook1:Book;
  bookarr:Book[];
  status:string;

  constructor()
  {
     console.log('inside Appcomponent constructor..');
     this.title ='my first application!';
     this.mybook = {name:'Learn Angular',price:5000};
     this.mybook1 = new Book(2,'Learn Nodejs',5000);
     console.log(this.mybook1);
     this.bookarr = [];
     this.status='';
     
  }

  addBook():void
  {
    console.log(this.mybook1);
    if(this.mybook1.bkid>0 && this.mybook1.bkname!='' && this.mybook1.bkprice>0.0)
    {
      this.bookarr.push(this.mybook1);
    
      this.status = this.mybook1.toString()+", submitted successfully!"

      this.mybook1 = new Book();
    }
    else
    {
      this.status = 'book cannot be submitted, book validation failed, ';
      if(this.mybook1.bkid<0)
        { this.status += "book id can't be zero or negative" }
      if(this.mybook1.bkprice<0)
        { this.status += "book price can't be zero or negative"}
      if(this.mybook1.bkname=='')
        { this.status += "book name can't be blank" }  
    
    }

  }

/*
 changebookname(bkname_ipcntrl:HTMLInputElement):void
 {
  console.log('inside changebookname function..');
  console.dir(bkname_ipcntrl);
  this.mybook.name = bkname_ipcntrl.value;
 }
 */

 changebookname1(bkname:string):void
 {
  console.log('inside changebookname1 function..');

  this.mybook.name = bkname;
 }

}
