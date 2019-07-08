import { Component, OnInit, } from '@angular/core';
import { Quote } from './../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  
  quotes:Quote [] = [
    new Quote(1, 'Michael J. Fox', 'Family is not an important thing.Its everything.',new Date(2019,3,14)),
    new Quote(2,'Oscar Wilde','Women are made to be loved and not understood.',new Date(2019,3,14)),
    new Quote(3,'Mother Teresa','Be faithful in small things because it is in them that your strength lies.',new Date(2019,3,14)),
    new Quote(4,'Albert Einstein','Only two ways to live life. One is as though nothing is a miracle. The other is as though everything is a miracle.',new Date(2019,3,14)),
    new Quote(5,'Mark Crow','Know when to cry, know when to laugh, know when to be silent.',new Date(2019,3,14)),
  ];

  toggleDetails(index){
      this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
    deleteGoal(isComplete, index){
      if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

        if (toDelete){
          this.quotes.splice(index,1)
        }
      }
    }

    addNewQuote(quote){
   let quoteLength = this.quotes.length;
   quote.id = quoteLength+1;
   quote.completeDate = new Date(quote.completeDate)
   this.quotes.push(quote)
 }
  constructor() { }

  ngOnInit() {
  }

}