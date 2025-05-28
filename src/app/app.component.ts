import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Item } from "./item";
import { ItemComponent } from "./item/item.component";


@Component({
  selector: 'app-root',
  imports: [CommonModule, ItemComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo';
  filter: "all" | "active" | "done" = "all";
  allItems = [
    { description: "eat", done: true },
    { description: "sleep", done: false },
    { description: "play", done: false },
    { description: "laugh", done: false },
  ];

  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done,
    );
  }
  addItem(description: string) {
    if (!description) return;

    this.allItems.unshift({
      description,
      done: false,
    });
  }
}
