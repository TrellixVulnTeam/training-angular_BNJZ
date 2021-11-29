import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //template - form
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { DataDrivenFormComponent } from './components/template-form/data-driven-form/data-driven-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomValidateComponent } from './components/template-form/custom-validate/custom-validate.component'; //data-driven-form
@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    DataDrivenFormComponent,
    CustomValidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
