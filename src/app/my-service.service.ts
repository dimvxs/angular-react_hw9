import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

 

   private array: any[] = [
    {id: '1', name: 'cola', price: 110, description: 'water'},
    {id: '2', name: 'bread', price: 120, description: 'food'},
    {id: '3', name: 'rocket', price: 130, description: 'toy'}
   ];


   
  getData(): any[] {
    return this.array;
}
}
