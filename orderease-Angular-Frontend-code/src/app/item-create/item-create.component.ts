import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '../services/item.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent {
  item: Item = new Item();

  constructor(private itemService: ItemService, private router: Router) { }

  onSubmit() {
    if (this.item.itemName && this.item.price > 0) {
      this.itemService.createItem(this.item).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/item-list']);
        },
        error: (e) => {
          console.error(e);
        }
      });
    }
  }
}






