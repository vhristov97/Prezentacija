import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodItemComponent } from './food-item/food-item.component';
import { MenuDisplayComponent } from './menu-display/menu-display.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodItemComponent,
    MenuDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
