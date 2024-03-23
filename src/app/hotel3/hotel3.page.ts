import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-hotel3',
  templateUrl: './hotel3.page.html',
  styleUrls: ['./hotel3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Hotel3Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
