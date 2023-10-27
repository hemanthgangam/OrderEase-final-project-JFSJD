import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { OrderService } from '../order.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-order',
  templateUrl: './customer-order.component.html',
  styleUrls: ['./customer-order.component.css'],
})
export class CustomerOrderComponent implements OnInit {
  customerOrders: Item[] = [];
  totalAmount: number = 0;
  orderConfirmed: boolean = false;

  constructor(private orderService: OrderService, private http: HttpClient) {}

  ngOnInit(): void {
    this.orderService.customerOrder$.subscribe((customerOrders) => {
      this.customerOrders = customerOrders;
      this.calculateTotalAmount();
    });
  }

  updateItem(item: Item) {
    item.total = item.quantity * item.price;
    this.calculateTotalAmount();
    this.orderService.updateItem(item);
  }

  deleteCustomerOrder(itemId: number) {
    this.orderService.deleteItem(itemId);
    this.calculateTotalAmount();
  }

  calculateTotalAmount() {
    this.totalAmount = this.customerOrders.reduce(
      (total, item) => total + (item.total || 0),
      0
    );
  }

  confirmOrder() {
    if (this.customerOrders.length === 0) {
      alert('Please add items to your order before confirming.');
      return;
    }

    const orderData = this.customerOrders.map((item) => {
      return {
        itemName: item.itemName,
        price: item.price,
        quantity: item.quantity,
        total: item.total,
      };
    });

    this.http.post('http://localhost:8086/api/orders', orderData).subscribe(
      (response) => {
        if (response !== null) {
          console.log('Order confirmed:', response);
          this.orderConfirmed = true;
          this.orderService.clearCustomerOrders();
          this.totalAmount = 0;
        } else {
          console.error('Order confirmation returned null.');
        }
      },
      (error) => {
        console.error('Error confirming order:', error);
      }
    );
  }

  cancelOrder() {
    this.orderService.clearCustomerOrders();
    this.totalAmount = 0;
    this.orderConfirmed = false;
  }
}
