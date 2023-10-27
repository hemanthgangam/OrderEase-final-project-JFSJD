import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private customerOrderSubject = new BehaviorSubject<Item[]>([]);
  customerOrder$ = this.customerOrderSubject.asObservable();

  constructor() {}

  addToCustomerOrder(item: Item) {
    const currentOrder = this.customerOrderSubject.value;
    this.customerOrderSubject.next([...currentOrder, item]);
  }

  updateItem(updatedItem: Item) {
    const currentOrder = this.customerOrderSubject.value;
    const updatedOrder = currentOrder.map((item) => {
      if (item.id === updatedItem.id) {
        return updatedItem;
      }
      return item;
    });
    this.customerOrderSubject.next(updatedOrder);
  }

  deleteItem(itemId: number) {
    const currentOrder = this.customerOrderSubject.value;
    const updatedOrder = currentOrder.filter((item) => item.id !== itemId);
    this.customerOrderSubject.next(updatedOrder);
  }

  clearCustomerOrders() {
    this.customerOrderSubject.next([]);
  }
}






