import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { OutputComponentComponent } from './components/output-component/output-component.component';
import { ReviewInputComponent } from './components/review-input/review-input.component';
import { ReviewOutputComponent } from './components/review-output/review-output.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent,
    UserListComponent,
    OutputComponentComponent,
    ReviewInputComponent,
    ReviewOutputComponent
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
