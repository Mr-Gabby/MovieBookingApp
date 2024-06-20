import { Component , OnInit } from '@angular/core';
import { Student } from '../student.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
 
  student: Student = { name: 'Sackitey', id: '991660150' };

  ngOnInit(): void {
    
  }

}
