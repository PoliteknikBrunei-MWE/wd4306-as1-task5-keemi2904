import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-hotel4',
  templateUrl: './hotel4.page.html',
  styleUrls: ['./hotel4.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Hotel4Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
