import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private http: HttpClient) { }

  quote = 'Chuck Norris took your quote to the center of the Sun';
  api = 'http://api.icndb.com/jokes/random'

  ngOnInit() {

    setInterval(() => {
      this.http.get(this.api)
        .subscribe(
        data => {
          this.quote = data["value"]["joke"];
        }
        );
    }, 6000);


  }
}
