import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-hotel2',
  templateUrl: './hotel2.page.html',
  styleUrls: ['./hotel2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Hotel2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
