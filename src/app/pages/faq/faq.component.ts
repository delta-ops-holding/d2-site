import { Component, OnInit } from '@angular/core';
import { FaqItem } from 'src/app/models/faq-item';
import { FaqService } from 'src/app/services/faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  faqItems: FaqItem[] = [];

  constructor(
    private faqService: FaqService
  ) { }

  ngOnInit(): void {
    this.faqItems = this.faqService.getAllFaqItems();
  }

}
