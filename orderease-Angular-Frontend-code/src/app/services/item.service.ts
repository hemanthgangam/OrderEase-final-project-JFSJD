import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private baseUrl = 'http://localhost:8086/items'; // Update the URL to match your API endpoint for items.

  constructor(private httpClient: HttpClient) {}

  createItem(item: Item): Observable<Item> {
    return this.httpClient.post<Item>(this.baseUrl, item);
  }

  getAllItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.baseUrl);
  }

  deleteItem(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}





