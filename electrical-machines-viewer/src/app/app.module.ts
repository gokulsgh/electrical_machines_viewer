import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Import CUSTOM_ELEMENTS_SCHEMA
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Ensure this is correct
import { HomeComponent } from './home/home.component'; // Assuming HomeComponent is declared here

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Add this line to include the schema
})
export class AppModule { }
