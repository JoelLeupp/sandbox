import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Food } from '@api/api.models';
import { APIBaseService } from '@api/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  foods:Food[] = []
  constructor(private api:APIBaseService){}

  ngOnInit(){
    this.api.loadFood().subscribe(foods => this.foods = foods);
  }
}
