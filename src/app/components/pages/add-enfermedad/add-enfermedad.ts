import { Component, OnInit, inject ,input, signal, WritableSignal, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../../services/alertServices';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../../../services/auth';
import { User } from '../../../models/User';
import { firstValueFrom } from 'rxjs';
import { ResponseData } from '../../../models/ResponseData';
import { ComponentsTextService } from '../../../services/componentsText.service';
import { ComponentsText } from '../../../models/ComponentsText';
import { Location } from '@angular/common';
import { Enfermedad } from '../../../models/Enfermedad';


@Component({
  selector: 'app-add-enfermedad',
 imports: [ReactiveFormsModule],
  templateUrl: './add-enfermedad.html',
  styleUrl: './add-enfermedad.css',
})
export class AddEnfermedad implements OnInit{


enfermedadForm!: FormGroup;
authService: any;
  curUser!: User;
  userId =  "";
  isLoading = false;
  id = "";


    componentText1 = signal<ComponentsText[]>([]);
    componentText2 = signal<ComponentsText[]>([]);
    componentText3 = signal<ComponentsText[]>([]);
    componentText4 = signal<ComponentsText[]>([]);
    componentText5 = signal<ComponentsText[]>([]);
    componentText6 = signal<ComponentsText[]>([]);
    componentText7 = signal<ComponentsText[]>([]);

    tipoEnfermedad = signal<ComponentsText[]>([]);

    currentEnfermedad: Enfermedad = {
        id: 0,
        id_paciente: 0,
        id_enfermedad: 0,
        id_tipo_enfermedad: 0,
        fecha: new Date(),
        tiempo_evolucion: '',
        tratamiento: '',
        id_control: 0,
        ultimo_control: new Date(),
        proximo_control: new Date(),
        complicaciones: ''

    }

constructor(private router: Router,
    private alerts: AlertService,
    private fb: FormBuilder, 
    private componentsTextService : ComponentsTextService,
    private auth: AuthService,
    private location: Location,
    private route: ActivatedRoute) {
    this.authService = auth;
   }



ngOnInit(): void {

 this.initForm();
 this.userId = this.auth.getUserId() ?? "0";
     //const id = this.route.snapshot.paramMap.get('id') ?? "";
     this.id = this.route.snapshot.paramMap.get('id') ?? "";
    
    this.safeCallComponents(this.componentText1,"12"); // Cardio
    this.safeCallComponents(this.componentText2,"13"); //Metabolica
    this.safeCallComponents(this.componentText3,"14"); //Respiratoria
    this.safeCallComponents(this.componentText4,"15"); //Neurologica
    this.safeCallComponents(this.componentText5,"16"); //Geneticas
    this.safeCallComponents(this.componentText6,"17"); //Control
    this.safeCallComponents(this.componentText7,"18"); //Tipo enfermedad

}



async safeCallComponents(arraySignal: WritableSignal<ComponentsText[]>, id: string) {
   

      this.componentsTextService.getComponents(id).subscribe({
        next: (data) => {
                    //this.pacientes = [...this.pacientes, data];   
          //this.componentText1.update(currentItems => data);   
          arraySignal.update(currentItems => data);   
          //arraySignal.update(() => [...data]);
          
          console.log(this.componentText1);
          console.log(data);

        },
        error: (err) => {
          console.error("Error reading Sexos");
          return [];
        }

      });

    //const data = await firstValueFrom(this.pacienteService.getPacientes()); 

  
}

initForm(): void {

this.enfermedadForm = new FormGroup({
  id: new FormControl(this.currentEnfermedad.id),
  id_paciente: new FormControl(this.currentEnfermedad.id_paciente),
  id_enfermedad: new FormControl(this.currentEnfermedad.id_enfermedad),
  id_tipo_enfermedad: new FormControl(this.currentEnfermedad.id_tipo_enfermedad),
  fecha: new FormControl(this.currentEnfermedad.fecha),
  tiempo_evolucion: new FormControl(this.currentEnfermedad.tiempo_evolucion),
  tratamiento: new FormControl(this.currentEnfermedad.tratamiento),
  id_control: new FormControl(this.currentEnfermedad.id_control),
  ultimo_control: new FormControl(this.currentEnfermedad.ultimo_control),
  proximo_control: new FormControl(this.currentEnfermedad.proximo_control),
  complicaciones: new FormControl(this.currentEnfermedad.complicaciones)
 });

}


onEnfermedadChange(event: Event): void {
  const select = event.target as HTMLSelectElement;
  const idTipoEnfermedad = Number(select.value);

  console.log(idTipoEnfermedad);

  if (idTipoEnfermedad === 1) { 
    this.tipoEnfermedad.update(() => this.componentText1());
  }
  else if (idTipoEnfermedad === 2) {
    this.tipoEnfermedad.update(() => this.componentText2());
  }
  else if (idTipoEnfermedad === 3) {
    this.tipoEnfermedad.update(() => this.componentText3());
  }
  else if (idTipoEnfermedad === 4) {
    this.tipoEnfermedad.update(() => this.componentText4());
  }
  else if (idTipoEnfermedad === 5) {
    this.tipoEnfermedad.update(() => this.componentText5());
  }
 

}

onSubmit(): void {

  
      const datosEnfermedad: Enfermedad = this.enfermedadForm.value;
      this.isLoading = true;
      datosEnfermedad.id = Number(this.enfermedadForm.get('id')?.value) || 0;
      datosEnfermedad.id_paciente = Number(this.id);
      console.log('Datos a enviar:', datosEnfermedad );
     

}

clickCancel(){
      this.location.back();
}



}