import { Component } from '@angular/core';
import { BookdaoService } from '../../services/bookdao.service';
import { Book } from '../../model/Book';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-registerbook',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registerbook.component.html',
  styleUrl: './registerbook.component.css'
})
export class RegisterbookComponent {
  mybook:Book;
  status:string;
  static bkidcnt:number = 1;


  constructor(private bookser:BookdaoService,private router:Router)
  {
     
      this.mybook = new Book(RegisterbookComponent.bkidcnt,'Learn Anugular',700);
      this.status='';
      
  }

  gotoListBooks():void
  {
    //internally navigate/route to ListBook component
    this.router.navigateByUrl('/listbooks');
  }
  addBook():void
  {
    let tempbook:Book = this.mybook; //store the book u r posting into tempbook variable
    if(this.mybook.id>0 && this.mybook.bkprice>0.0 && this.mybook.bkname!='')
    {
      this.bookser.create(this.mybook)
      .subscribe({
        next: res => {
          console.log('Book created!')
          console.log(res);
          this.status='book:'+ res.id+","+res.bkname+","+res.bkprice + ' added successfully!';
          
         // this.router.navigateByUrl('/home')
  
    
      },
       error: (err:HttpErrorResponse) => {
          console.log('Book not created, as post failed!')
          this.status='book:'+ tempbook.toString()+ ',post call failed!';
          RegisterbookComponent.bkidcnt= tempbook.id;
          this.mybook.id=tempbook.id;
        //  this.router.navigateByUrl('/home')
          },
       complete: () => console.log('Observable emitted the complete notification,book post completed')
      });
      console.log('just after book create call is invoked..');
      RegisterbookComponent.bkidcnt++;
      this.mybook = new Book(RegisterbookComponent.bkidcnt);  

    }
    else
    {
      this.status = 'book cannot be submitted, book validation failed, ';
      if(this.mybook.id<0)
        { this.status += "book id can't be zero or negative" }
      if(this.mybook.bkprice<0)
        { this.status += "book price can't be zero or negative"}
      if(this.mybook.bkname=='')
        { this.status += "book name can't be blank" }  
    }
  

   
  }



}
