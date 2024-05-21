import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyServiceService } from './my-service.service';
import { NgFor } from '@angular/common';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [MyServiceService],
  imports: [RouterOutlet, NgFor, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hw';
  constructor(private myServ: MyServiceService){}
products: any[] = [];
filtered: any[] = [];
search: string = '';

ngOnInit(){
  this.products = this.myServ.getData();
}

onSearchTermChange() {
  this.filtered = this.products.filter(product =>
    product.name.toLowerCase().includes(this.search.toLowerCase())
  );
}

}
