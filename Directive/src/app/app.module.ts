import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StructuralComponent} from './components/structural/structural.component';
import { ForDirectiveComponent } from './components/for-directive/for-directive.component';
import { SwitchCaseDirectiveComponent } from './components/switch-case-directive/switch-case-directive.component';
import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
import { StyleDirectiveComponent } from './components/style-directive/style-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    StructuralComponent,
    ForDirectiveComponent,
    SwitchCaseDirectiveComponent,
    AttributeDirectiveComponent,
    StyleDirectiveComponent
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
