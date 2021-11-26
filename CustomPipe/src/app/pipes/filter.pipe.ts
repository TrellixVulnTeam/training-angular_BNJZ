import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(product: any[], id:number, name:string, price:number): any {
    if(!id&&!name&&!price){
      return product;
    }else{
      if(id){
        product = product.filter(x =>{
          return x.id.toString().indexOf(id) != -1;
        });
      }
      if(name){
        product = product.filter(x =>{
          return x.name.toLowerCase().indexOf(name.toLowerCase()) != -1;
        });
      }
      if(price){
        product = product.filter(x =>{
          return x.price.toString().indexOf(price) != -1;
        });
      }
      return product;
  }
  }
}
