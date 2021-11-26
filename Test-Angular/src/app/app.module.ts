import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsToViewComponent } from './components/components-to-view/components-to-view.component';
import { ViewToComponentsComponent } from './components/view-to-components/view-to-components.component'
import {FormsModule} from '@angular/forms';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
@NgModule({
  declarations: [
    AppComponent,
    ComponentsToViewComponent,
    ViewToComponentsComponent,
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
