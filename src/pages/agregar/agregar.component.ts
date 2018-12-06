import { Component } from "@angular/core";
import { DeseosService } from '../../services/deseos.service';
import { NavParams } from 'ionic-angular';
import { Lista, ListaItem } from '../../models';



@Component({
    selector: 'page-agregar',
    templateUrl: 'agregar.componet.html'
})
export class AgregarPage {
    
	lista: Lista;
	nombreItem: string = '';

    constructor ( public _deseosService: DeseosService,
    			  private navParams: NavParams
    		){


    	const titulo = this.navParams.get('titulo') 

    	console.log( titulo )

    	this.lista = new Lista( titulo )
            
    }

    agregarItem() {

    	if( this.nombreItem.length > 0){
    		console.log(this.nombreItem)
    	}

    	const nuevoItem = new ListaItem( this.nombreItem )
    	this.lista.items.push ( nuevoItem );
    	this.nombreItem = '';

    	console.log("array",this.lista.items)
    }

    actualizarTarea( item:ListaItem ){
    	item.completado = !item.completado;
    }

}