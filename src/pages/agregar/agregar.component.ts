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

		if( this.navParams.get('lista') ){
			this.lista = this.navParams.get('lista');
		}else{
			this.lista = new Lista( titulo )
			this._deseosService.agregarLista( this.lista);
		}

		    
    }

    agregarItem() {

    	if( this.nombreItem.length > 0){
    		console.log(this.nombreItem)
    	}

    	const nuevoItem = new ListaItem( this.nombreItem )
		this.lista.items.push ( nuevoItem );
		
		this._deseosService.guardarStorage();

    	this.nombreItem = '';

    	console.log("array",this.lista.items)
    }

    actualizarTarea( item:ListaItem ){
		item.completado = !item.completado;
	
		const pendientes = this.lista.items.filter( itemData => {
			return !itemData.completado;
		}).length;
		
		if ( pendientes === 0){
			this.lista.terminada = true;
			this.lista.terminadaEn = new Date();
		}else{
			this.lista.terminada = false;
			this.lista.terminada = null;
		}

		this._deseosService.guardarStorage();
		
    }
	

	borrar( idx: number) {
		this.lista.items.splice(idx, 1);
		this._deseosService.guardarStorage();
	}
}