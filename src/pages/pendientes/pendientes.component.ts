import { Component } from "@angular/core";
import { DeseosService } from '../../services/deseos.service';
import { NavController, AlertController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';



@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})
export class PendientesPage {
    
    constructor ( public _deseosService: DeseosService,
    			  private navCtrl: NavController,
                  private alertCtrl: AlertController
    				){
            
    }

    agregarLista(){

        const alerta = this.alertCtrl.create({
            title: 'Nueva Lista',
            message: 'Nombre de la nueva lista que desea',
            inputs: [{
                name: 'titulo',
                placeholder: 'Nombre de la lista'
            }],
            buttons: [{
                text: 'Cancelar'
            },{
                text: 'Agregar',
                handler: data=>{
                    if(data.titulo.length === 0){
                        return;
                    }else{
                        console.log("data",data)
                        this.navCtrl.push( AgregarPage, {
                            titulo: data.titulo
                        } )
                    }
                }
            }]
        });

        alerta.present();


    	//this.navCtrl.push( AgregarPage );
    }



}