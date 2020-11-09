import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'app-star',
  styleUrls: ['./star.component.css'],
  templateUrl: './star.component.html'
})
export class StarComponent implements OnChanges {
  public width = 90;
  @Input() rating: number;
  // @Output() clickStar: EventEmitter<string> = new EventEmitter<string>();
  public starWidth: number;

  ngOnChanges(): void {
    this.starWidth = this.rating * this.width / 5;
  }
  // onClickRating(rating: number): void{
  //   this.clickStar.emit(`Rating ${rating}`);
  // }

}
