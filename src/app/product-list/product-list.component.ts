import { Component } from '@angular/core';
import { products } from '../products';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-List.component.html',
    styleUrls: ['./product-List.component.css']
})
export class ProductListComponent {
    products = products;

    share() {
        window.alert('The product has been shared');
    }

}



