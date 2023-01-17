import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

  constructor(
    private dataService:DataService, 
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getUserById();
  }

  getUserById() {
    //* capturamos el parametro de la URL
    this.activatedRoute.paramMap.subscribe( params => {
      console.log(params);
      let id = Number(params.get('id'));
      // let id = (params.get('id'));
      this.dataService.getUserById(id).subscribe(user => console.log(user));
   
    })
  }

}
