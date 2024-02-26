import { Component } from '@angular/core';
import { BookdaoService } from '../../services/bookdao.service';
import { Book } from '../../model/Book';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';

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
  bkidcnt:number;


  constructor(private bookser:BookdaoService,private router:Router)
  {
      this.bkidcnt=1;
      this.mybook = new Book(this.bkidcnt,'Learn Anugular',700);
      this.status='';
      
  }

  addBook():void
  {
    if(this.mybook.id>0 && this.mybook.bkprice>0.0 && this.mybook.bkname!='')
    {
      this.bookser.create(this.mybook).subscribe({
        next: res => {
          console.log('Book created!')
          this.status='book:'+ this.mybook.toString()+ 'added successfully!';
          this.router.navigateByUrl('/home')
  
    
      },
      error: err => {
          console.log('Book not created, as post failed!')
          console.log(err);
          this.status='book:'+ this.mybook.toString()+ 'post failed!';
          this.router.navigateByUrl('/home')
    
    
      },
      complete: () => console.log('Observable emitted the complete notification,book post completed')
      
      });
  
    
      this.bkidcnt++;

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
  

    this.mybook = new Book(this.bkidcnt);  
  }



}
