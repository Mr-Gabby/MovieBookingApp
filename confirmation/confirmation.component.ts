import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { BookingForm } from '../booking-form.interface';


@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  formData: BookingForm | null = null;

  constructor(private movieService: MovieService ) { }

  ngOnInit(): void {
    
    this.formData = this.movieService.getBookingFormData();
  }


  
}