import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IPost } from '../../interfaces/IPost';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
//* control + punto
export class HomeComponent implements OnInit {
  
  public posts: IPost [] = [];
  constructor( private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getPosts().subscribe((data) => this.posts = data);
  }


}
