import { Pipe, PipeTransform } from '@angular/core';
import { AlumnosUtl } from './alumnosUTL';

@Pipe({
    name: 'alumnoFilter',
    standalone: true,
})

export class AlumnosFilterPipe implements PipeTransform {

    transform(value: AlumnosUtl[], args: string): AlumnosUtl[] {

        let filter: string = args ? args.toLocaleLowerCase() : '';

        return filter
            ? value.filter((alumno: AlumnosUtl) =>
                alumno.nombre.toLocaleLowerCase().indexOf(filter) !== -1 ||
                alumno.apaterno.toLocaleLowerCase().indexOf(filter) !== -1 ||
                alumno.amaterno.toLocaleLowerCase().indexOf(filter) !== -1 ||
                alumno.matricula.toString().indexOf(filter) !== -1
            )
            : value;
    }
}