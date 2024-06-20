import { Injectable } from '@angular/core';
import { BookingForm } from './booking-form.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private bookingFormData: BookingForm | null = null;

  constructor() { }

 
  storeBookingFormData(formData: BookingForm) {
    this.bookingFormData = formData;
  }

 
  getBookingFormData(): BookingForm | null {
    return this.bookingFormData;
  }
}
