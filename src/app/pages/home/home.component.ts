import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IPost } from '../../interfaces/IPost';
import { IComment } from '../../interfaces/IComment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
//* control + punto
export class HomeComponent implements OnInit {
  //* Propiedades de Clase
  public posts: IPost [] = [];
  public comments: IComment [] = [];
  public comentariosFiltradosPorPost: IComment [] = [];

  //* Constructor
  constructor( private dataService: DataService) {
  }

  //* Ciclo de vida de angular
  ngOnInit(): void {
    this.dataService.getPosts().subscribe((data) => this.posts = data);
    this.dataService.getComments().subscribe((comentarios) => this.comments = comentarios);
  }

  //* Método que me permita filtrar
  //* recibimos por parametro el id del posts y necesitamos obtener los comentarios
  //* click en el boton "ver comentarios" Post con id
  obtenerComentariosPorId(id: number) {
    this.comentariosFiltradosPorPost = this.comments.filter(comentarios => comentarios.postId == id);
    console.log(this.comentariosFiltradosPorPost);
  }


}
