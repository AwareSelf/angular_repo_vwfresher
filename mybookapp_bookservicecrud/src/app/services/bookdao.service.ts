import { Injectable } from '@angular/core';
import { Book } from '../model/Book';

//Note:instead of providedIn mentione here can also use providers: inside @Component to 
//declare service at component  (and all its child components) level
@Injectable({
  providedIn: 'root'   
  
})
export class BookdaoService {
  bookarr:Book[];

  constructor() { 

    this.bookarr= [];
  }


  addBook(b:Book):void
  {
    
    console.log(b);
    this.bookarr.push(b);
 
  }

  getallbooks():Book[]
  {
    return this.bookarr.slice();
   //return this.bookarr; (dont return the same array object but return the copy)
  }

  /*
avoid using indexOf to locate book object in array as indexof will find object
only if its original object and not its copy
whereas if you search using bookid it will find book even if its original
or copy
*/
deleteBook(b:Book)
{
     var index=-1;
    for(var i=0;i< this.bookarr.length;i++)
    {
        if(this.bookarr[i].bkid == b.bkid)
         index=i;

    }
    if(index!=-1)
    this.bookarr.splice(index,1);
}

updateBook(b:Book)
{
    var index=-1;
    for(var i=0;i< this.bookarr.length;i++)
    {
        if(this.bookarr[i].bkid == b.bkid)
         index=i;

    }
    console.log('index val:'+index);
    if(index!=-1)
    {
      this.bookarr[index].bkname=b.bkname;
      this.bookarr[index].bkprice=b.bkprice;
    }
}
}
