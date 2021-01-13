import { Component, OnInit } from '@angular/core';
import { InformationService } from '../services/information.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(
    private informationService: InformationService
  ) { }

  ngOnInit(): void {
    this.informationService.getClans().subscribe(data => {
      console.log(data);
    })
  }

}
