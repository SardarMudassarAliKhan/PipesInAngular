import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PipesInAngular';
  today: Date = new Date();
  name: string = 'Angular';
  price: number = 100;
  amount: number = 1000.00000;
  rating: number = 0.1234;
  object: any = { name: 'John', age: 30, city: 'New York' };
  promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise Resolved');
    }, 3000);
  });
  data={ name: 'John', age: 30, city: 'New York' };

  getObjectProperties(): { key: string, value: any }[] {
    return Object.entries(this.data).map(([key, value]) => ({ key, value }));
  }
}
