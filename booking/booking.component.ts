import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { BookingForm } from '../booking-form.interface';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;

  
cities: string[] = ['Oakville', 'Brampton', 'Toronto'];
locations: string[] = ['SilverBird', 'Omniplex', 'Showmax', 'Starlite'];
movies: string[] = ['Shogun', 'Mad Max', 'Together', 'The Plan'];
showTimes: string[] = ['Morning', 'Afternoon', 'Evening'];

cityTheaterMap: { [key: string]: string[] } = {
  'Oakville': ['Cineplex', 'Silverbird', 'Showmax'],
  'Brampton': ['Starlite', 'Omniplex', 'Cineplex'],
  'Toronto': ['Cineplex', 'Showmax', 'Starlite']
};

cityMovieMap: { [key: string]: string[] } = {
  'Oakville': ['Shogun', 'Mad Max', 'Together'],
  'Brampton': ['Together', 'The Plan'],
  'Toronto': ['Shogun', 'Mad Max', 'Together', 'The Plan']
};

  availableTheaters: string[] = [];
  availableMovies: string[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router, private movieService: MovieService) { }
  totalAmount: number = 0;


  ngOnInit(): void {

    this.bookingForm = this.formBuilder.group({
     
      city: [this.cities[0], Validators.required], 
      theaterLocation: ['', Validators.required],
      movie: ['', Validators.required],
      date: ['', Validators.required],
      numberOfTickets: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(20)]],
      showTime: ['', Validators.required]


    });
    this.onCityChange(this.cities[0]);
    this.calculateTotalAmount();
  }


  onCityChange(selectedCity: string): void {
    this.availableTheaters = this.cityTheaterMap[selectedCity] || [];
    this.availableMovies = this.cityMovieMap[selectedCity] || [];

    
    this.bookingForm.get('theaterLocation')?.setValue('');
    this.bookingForm.get('movie')?.setValue('');
  }

  submitForm() {
    if (this.bookingForm.valid) {
     
      this.calculateTotalAmount();

      const formDataWithTotal = {
        ...this.bookingForm.value,
        totalAmount: this.totalAmount 
      };

     
      this.movieService.storeBookingFormData(formDataWithTotal);

     
      this.router.navigate(['/confirmation']);
    } else {
      console.error("Form is invalid. Please fill in all required fields correctly.");
    }
  }

  calculateTotalAmount() {
    const numberOfTickets = this.bookingForm.get('numberOfTickets')?.value || 0;

    this.totalAmount = numberOfTickets * 15;

  }


}
