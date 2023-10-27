import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../item.model';
import { ItemService } from '../services/item.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];
  searchTerm: string = '';
  filteredItems: Item[] = [];

  constructor(
    private itemService: ItemService,
    private router: Router,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.getItems();
  }

  private getItems() {
    this.itemService.getAllItems().subscribe((data) => {
      this.items = data;
      this.filteredItems = this.items; // Initialize filteredItems with all items
    });
  }

  selectItem(item: Item) {
    this.orderService.addToCustomerOrder(item);
  }

  // Add a method to filter items based on the search term
  filterItems() {
    this.filteredItems = this.items.filter((item) =>
      item.itemName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}






