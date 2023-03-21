import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.module';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input ("recipeData") recipe: Recipe
  @Output ("showItemDetails") showDetails = new EventEmitter<void>();

  onClick(): void {
    this.showDetails.emit();
  }

}
