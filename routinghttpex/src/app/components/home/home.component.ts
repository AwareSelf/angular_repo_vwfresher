import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit,OnDestroy {

  constructor()
  {
    console.log('Home component created...');
  }

  ngOnInit()
  {
    console.log('Home component rendered and fully initialised');
  }
  ngOnDestroy(): void {
    console.log('Home component about to be unloaded/go out of scope/destroyed..');
  }

}
