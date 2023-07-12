import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({//ENRUTAMIENTO
  selector: 'app-dbz-main-page',// COMO SE LLAMA EL COMPONENTE EN LA VISTA QUE SE DESEA
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {//CLASE A EXPORTAR PARA ACCEDER A ELLA

constructor( public dbzService:DbzService ){


}
}


