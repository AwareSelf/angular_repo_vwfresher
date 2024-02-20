import { Component } from '@angular/core';
import { Book } from './model/Book';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mybook',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mybook.component.html',
  styleUrl: './mybook.component.css'
})
export class MybookComponent {

  mybook1:Book;
  bookarr:Book[];
  status:string;

  constructor()
  {
     console.log('inside Appcomponent constructor..');
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

}
