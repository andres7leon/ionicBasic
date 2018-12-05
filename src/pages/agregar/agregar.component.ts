import { Component } from "@angular/core";
import { DeseosService } from '../../services/deseos.service';

@Component({
    selector: 'page-agregar',
    templateUrl: 'agregar.componet.html'
})
export class AgregarPage {
    
    constructor ( public _deseosService: DeseosService){
            
    }


}