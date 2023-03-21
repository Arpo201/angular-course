import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://th.bing.com/th/id/R.50023a4118047e4667d338fd36a5ba6a?rik=HG7anwF4oifciQ&pid=ImgRaw&r=0'),
    new Recipe('Another Recipe', 'This is Hello recipe', 'https://th.bing.com/th/id/R.50023a4118047e4667d338fd36a5ba6a?rik=HG7anwF4oifciQ&pid=ImgRaw&r=0')
  ];

  @Output () recipeWasSelected = new EventEmitter<Recipe>();

  constructor() {}
  ngOnInit() {}

  passDetails(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
