import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './header/header.component';
import { BookingComponent } from './booking/booking.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'; // Import MatSelectModule for select dropdowns
import { MatRadioModule } from '@angular/material/radio'; // Import MatRadioModule for radio buttons
import { MatDatepickerModule } from '@angular/material/datepicker'; // Import MatDatepickerModule for datepicker
import { MatNativeDateModule } from '@angular/material/core'; // Import MatNativeDateModule for datepicker
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule for buttons
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule for form fields
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule for icons


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookingComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    BrowserAnimationsModule, 
    MatInputModule, 
    MatSelectModule, 
    MatRadioModule, 
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatIconModule 
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
