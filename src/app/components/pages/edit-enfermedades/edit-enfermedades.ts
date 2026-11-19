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
import { Enfermedades } from '../../../models/Enfermedades';

@Component({
  selector: 'app-edit-enfermedades',
  imports: [ReactiveFormsModule], 
  templateUrl: './edit-enfermedades.html',
  styleUrl: './edit-enfermedades.css',
})
export class EditEnfermedades implements OnInit{


enfermedadesForm!: FormGroup;
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


currentEnfermedades: Enfermedades = {
  id: 0,
  id_paciente: 0,
  id_cardio: 0,
  id_metabolismo: 0,
  id_respiratorio: 0,
  id_neurologico: 0,
  id_geneticas: 0,
  fecha: new Date(),
  tiempo_evolucion: '',
  tratamiento: '',
  id_control: 0,
  ultimo_control: new Date(),
  proximo_control: new Date(),
  complicaciones: '',
  created_at: new Date(),
  updated_at: new Date(),
  otro_cardio: '',
  otro_metabolismo: '',
  otro_respiratorio: '',
  otro_neurologico: '',
  otro_geneticas: ''
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
    
    this.safeCallComponents(this.componentText1,"12");
    this.safeCallComponents(this.componentText2,"13");
    this.safeCallComponents(this.componentText3,"14");
    this.safeCallComponents(this.componentText4,"15");
    this.safeCallComponents(this.componentText5,"16");
    this.safeCallComponents(this.componentText6,"17");



    if (this.id != "0") {
      //this.safeCall(this.id);
    }

}


initForm(): void {

this.enfermedadesForm = new FormGroup({
  id: new FormControl(this.currentEnfermedades.id),
  id_paciente: new FormControl(this.currentEnfermedades.id_paciente),
  id_cardio: new FormControl(this.currentEnfermedades.id_cardio),
  id_metabolismo: new FormControl(this.currentEnfermedades.id_metabolismo),
  id_respiratorio: new FormControl(this.currentEnfermedades.id_respiratorio),
  id_neurologico: new FormControl(this.currentEnfermedades.id_neurologico),
  id_geneticas: new FormControl(this.currentEnfermedades.id_geneticas),
  fecha: new FormControl(this.currentEnfermedades.fecha),
  tiempo_evolucion: new FormControl(this.currentEnfermedades.tiempo_evolucion),
  tratamiento: new FormControl(this.currentEnfermedades.tratamiento),
  id_control: new FormControl(this.currentEnfermedades.id_control),
  ultimo_control: new FormControl(this.currentEnfermedades.ultimo_control),
  proximo_control: new FormControl(this.currentEnfermedades.proximo_control),
  complicaciones: new FormControl(this.currentEnfermedades.complicaciones),
  otro_cardio: new FormControl(this.currentEnfermedades.otro_cardio),
  otro_metabolismo: new FormControl(this.currentEnfermedades.otro_metabolismo),
  otro_respiratorio: new FormControl(this.currentEnfermedades.otro_respiratorio),
  otro_neurologico: new FormControl(this.currentEnfermedades.otro_neurologico),
  otro_geneticas: new FormControl(this.currentEnfermedades.otro_geneticas)

});

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



onSubmit(): void {

  
      const datosEnfermedades: Enfermedades = this.enfermedadesForm.value;
      this.isLoading = true;
      datosEnfermedades.id = Number(this.enfermedadesForm.get('id')?.value) || 0;
      datosEnfermedades.id_paciente = Number(this.id);
      console.log('Datos a enviar:', datosEnfermedades );
     

}

clickCancel(){
      this.location.back();
}




}
