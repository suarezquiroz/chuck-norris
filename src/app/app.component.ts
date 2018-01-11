import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private http: HttpClient) { }

  quote = '';
  api = 'http://api.icndb.com/jokes/random'

  ngOnInit() {

    this.getJoke().add(() => {
      setInterval(this.getJoke, 6000);
    })

  }

  getJoke = () => {
    return this.http.get(this.api)
      .subscribe(data => {
        this.quote = data["value"]["joke"];
      });
  }
}
