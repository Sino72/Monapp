import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart/cart.service';
@Component({
    templateUrl: './product-details.component.html'
})

export class ProductDetailsComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private cartService: CartService
    ) { }

    product;
    addToCart(product) {
        window.alert('Your product has been added to the cart !');
        this.cartService.addToCart(product);
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params =>  {
            this.product = products[+params.get('productId')];

        });
    }


}

