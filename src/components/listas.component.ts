import { Component, Input } from '@angular/core';
import { DeseosService } from '../services/deseos.service';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';
import { AgregarPage } from '../pages/agregar/agregar.component';
import { Lista } from '../models/lista.model';

@Component({
    selector: 'app-listas',
    templateUrl: 'listas.component.html'
})

export class ListasComponent {

    @Input() terminada: boolean = false;

    constructor ( public _deseosService: DeseosService,
                  private navCtrl: NavController,
                  private alertCtrl: AlertController     
        ){
            
    }

    borrarLista( lista:Lista ){
        this._deseosService.borrarLista( lista );
    }

    listaSeleccionada ( lista: Lista ){
        this.navCtrl.push( AgregarPage, {
            titulo: lista.titulo,
            lista: lista
        } )
    }

    editarLista( lista: Lista, slidingItem: ItemSliding ){
        
        slidingItem.close();

        const alerta = this.alertCtrl.create({
            title: 'Editar nombre',
            message: 'Editar el nombre de la lista',
            inputs: [{
                name: 'titulo',
                placeholder: 'Nombre de la lista',
                value: lista.titulo
            }],
            buttons: [{
                text: 'Cancelar'
            },{
                text: 'Guardar',
                handler: data=>{
                    if(data.titulo.length === 0){
                        return;
                    }

                    lista.titulo = data.titulo;
                    this._deseosService.guardarStorage()
                }
            }]
        });

        alerta.present();
    
    
        

    }


}