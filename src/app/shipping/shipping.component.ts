import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';

@Component ({
    selector: 'app-shipping',
    templateUrl: './shipping.component.html',
    styleUrls: ['./shipping.component.css']

})

export class ShippingComponent implements OnInit {
    shippingCosts: any;

    constructor(
    private carteService: CartService,
    ) {
    this.carteService.getItems();

    }
    ngOnInit(): void {
        this.shippingCosts = this.carteService.getShippingPrices();
        throw new Error('Method not implemented.');
    }
}


