import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models';

@Component({
    selector: 'page-terminados',
    templateUrl: 'terminados.component.html'
})

export class TerminadosComponent {
    constructor ( public _deseosService: DeseosService){
            
    }

    listaSeleccionada ( lista: Lista ){
        console.log( lista )
    }
}