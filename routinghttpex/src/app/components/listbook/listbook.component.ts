import { Component } from '@angular/core';
import { Book } from '../../model/Book';
import { BookdaoService } from '../../services/bookdao.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-listbook',
  standalone: true,
  imports: [CommonModule,FormsModule,FilterPipe],
  templateUrl: './listbook.component.html',
  styleUrl: './listbook.component.css'
})
export class ListbookComponent {

  bookarr:Book[];
  bookser:BookdaoService;
  editflag:boolean;
  temp!:Book;
  searchText:string;
  $bklst: Observable<Book[]>|null = null;
  $bklst1: Observable<Book[]>|null = null;

  constructor(bookser:BookdaoService)
  {
    console.log('inside ListBook Component');
    this.bookarr=[];
    this.editflag=false;
    this.bookser = bookser;
    this.searchText='';

    //using async pipe to display observable data
    this.$bklst = this.bookser.getAll();

    //using subscribe to collect observable data
    this.bookser.getAll().subscribe({
     next:(res:Book[])=>{
      this.bookarr = res; 
      for(let b of this.bookarr)
        {
          console.log(b.id+','+b.bkname+','+b.bkprice);
        }
    
      if(this.bookarr.length===0)
        console.log('book array is empty');
      else
        console.log('bookarr has no of books='+this.bookarr.length);
        this.editflag=false;
    
     },
     error:err=>{console.log('get all books method failed')},
     complete:()=>{console.log('gel all books method completed')}
    });
  }
   /* 
  for loop : diff types
  for/of let array = [1, 2, 3]; for (let a of array) { console. log(a); }
  forEach() let array = [1, 2, 3]; array. forEach(function(a, index) { console. log(a); });
  Plain for loop let array = [1, 2, 3]; for (let i = 0; i < array. length; i++) { console. log(array[i]); }
  */
  listbooks():void
  {
    console.log('inside list books');
    this.bookser.getAll().subscribe({
      next:(res:Book[])=>{
        this.bookarr = res; 
        for(let b of this.bookarr)
        {
          console.log(b.id+','+b.bkname+','+b.bkprice);
        }
      
       if(this.bookarr.length===0)
         console.log('book array is empty');
       else
         console.log('bookarr has no of books='+this.bookarr.length);
         this.editflag=false;
     
      },
      error:err=>{console.log('get all books method failed')},
      complete:()=>{console.log('gel all books method completed')}
     });
    if(this.bookarr.length===0)
      console.log('book array is empty');
    
    
  }

  //using observable variable as property and async pipe
  listbooks1():void
  {
    console.log('inside list books1');
   
   this.$bklst1 = this.bookser.getAll();

  
    
  }


  

  delBook(b:Book)
  {
    this.bookser.delete(b.id).subscribe(res=>{
      console.log('book with book id:'+b.id+' deleted successfully');
      this.bookser.getAll().subscribe((res:Book[])=>{
           console.log('after delete get fresh list of all books from server...');
           this.bookarr = res;
      })
    })

  
  }
  
  
  editBook(b:Book)
  {
    console.log('inside editBook');
    this.editflag=true;
    this.temp=new Book(b.id,b.bkname,b.bkprice);
   }

   updateBook(b:Book)
   {
      this.bookser.update(b.id,b).subscribe(res=>{
        console.log(res);
      this.bookser.getAll().subscribe((res:Book[])=>{
                                          this.bookarr = res;
                                        });
        this.editflag=false;
      
      });

    
   }
   
   cancelBook(b:Book)
   {
    this.editflag=false;
     return;
   }
  



}
