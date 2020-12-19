import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { ProductItemComponent } from './product-item/product-item.component';
import {ProductServiceService} from './product-service.service';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PipesPipe } from './pipes.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductGridComponent,
    ProductItemComponent,
    PipesPipe
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
