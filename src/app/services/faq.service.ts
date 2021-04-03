import { Injectable } from '@angular/core';
import { FaqItem } from '../models/faq-item';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  faqItems: FaqItem[] = [
    {
      question: "Bla",
      answer: "yes"
    }, {
      question: "Bla",
      answer: "yes"
    }, {
      question: "Bla",
      answer: "yes"
    }, {
      question: "Bla",
      answer: "yes"
    }, {
      question: "Bla",
      answer: "yes"
    }, {
      question: "Bla",
      answer: "yes"
    }, {
      question: "Bla",
      answer: "yes"
    }, {
      question: "Bla",
      answer: "yes"
    }, {
      question: "Bla",
      answer: "yes"
    },
  ]

  constructor() { }

  getAllFaqItems(): FaqItem[] {
    return this.faqItems;
  }
}
