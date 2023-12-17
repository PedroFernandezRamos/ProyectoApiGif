import { Component, OnInit } from '@angular/core';
import { GifService } from '../../services/gif.service';
import { Datum } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-listar-gif',
  templateUrl: './listar-gif.component.html',
  styleUrls: ['./listar-gif.component.css']
})
export class ListarGifComponent implements OnInit {

  constructor(private gifService: GifService){}

  lista: Datum[] = []



  ngOnInit(): void {
    this.mostrarGif()
  }

  mostrarGif(){
    this.gifService.listaProductos.subscribe((list) => 
    {
        this.lista = list
    });
  }
    
}
