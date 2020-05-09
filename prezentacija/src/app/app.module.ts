import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuDisplayComponent } from './menu-display/menu-display.component';
import { FoodItemComponent } from './food-item/food-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuDisplayComponent,
    FoodItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
