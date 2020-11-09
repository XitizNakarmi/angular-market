import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SideBarComponent} from './side-bar/side-bar.component';
import {ProductListComponent} from './product-list/product-list.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    ProductListComponent,
    ProductDetailComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
