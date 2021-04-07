import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'girlsforcoding';


  constructor(
  ) {}

  ngOnInit() {  
    console.log('hello Colette');

}
// alert('red');

//this is a function or a way, a method of doing something
// the way 1
coletteFavoriteColor(){
  console.log('asdfasdfasdfasdfasdfsdf');
  alert('helloColette blue');
}


// the way 2
rileysFavoriteColor(){
  alert('helloRiley green');
}


}
