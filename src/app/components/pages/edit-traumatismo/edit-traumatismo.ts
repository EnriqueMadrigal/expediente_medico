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
import { Traumatismo } from '../../../models/Traumatismo';
import { Location } from '@angular/common';



@Component({
  selector: 'app-edit-traumatismo',
   imports: [ReactiveFormsModule], 
  templateUrl: './edit-traumatismo.html',
  styleUrl: './edit-traumatismo.css',
})
export class EditTraumatismo implements OnInit, AfterViewInit{


traumaForm!: FormGroup;
authService: any;
  curUser!: User;
  userId =  "";
  isLoading = false;
  id = "";
  showTrauma = true;


  componentText1 = signal<ComponentsText[]>([]);
  componentText2 = signal<ComponentsText[]>([]);
  componentText3 = signal<ComponentsText[]>([]);
 
  currentTrauma: Traumatismo = {
    id: 0,
    id_paciente: 0,
    traumatismo: true,
    id_trauma: 0,
    trauma: '',
    zona_afectada: '',
    fecha: new Date(),
    id_tratamiento: 0,
    tratamiento: '',
    secuelas: true,
    id_secuela: 0,
    secuela: '',
    observaciones: '',
    created_at: new Date(),
    updated_at: new Date()  
  }

 constructor(private router: Router,
    private alerts: AlertService,
    private fb: FormBuilder, 
    private componentsTextService : ComponentsTextService,
    private auth: AuthService,
    private location: Location,
    private route: ActivatedRoute ) {
    this.authService = auth;
   }

ngOnInit(): void {
  this.initForm();
 this.userId = this.auth.getUserId() ?? "0";
     //const id = this.route.snapshot.paramMap.get('id') ?? "";
     this.id = this.route.snapshot.paramMap.get('id') ?? "";
    
    this.safeCallComponents(this.componentText1,"9");
    this.safeCallComponents(this.componentText2,"10");
    this.safeCallComponents(this.componentText3,"11");

}

initForm(): void {

  this.traumaForm = new FormGroup({
    traumatismo: new FormControl(this.currentTrauma.traumatismo, Validators.required),
    id_trauma: new FormControl(this.currentTrauma.id_trauma, Validators.required),
    trauma: new FormControl(this.currentTrauma.trauma, Validators.required),
    zona_afectada: new FormControl(this.currentTrauma.zona_afectada, Validators.required),
    fecha: new FormControl(this.currentTrauma.fecha, Validators.required),
    id_tratamiento: new FormControl(this.currentTrauma.id_tratamiento, Validators.required),
    tratamiento: new FormControl(this.currentTrauma.tratamiento, Validators.required),
    secuelas: new FormControl(this.currentTrauma.secuelas, Validators.required),
    id_secuela: new FormControl(this.currentTrauma.id_secuela, Validators.required),
    secuela: new FormControl(this.currentTrauma.secuela, Validators.required),
    observaciones: new FormControl(this.currentTrauma.observaciones, Validators.required),
   
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


  
      const datosTrauma: Traumatismo = this.traumaForm.value;
      this.isLoading = true;
      datosTrauma.id_paciente = Number(this.id);
      datosTrauma.traumatismo = this.showTrauma;
      console.log('Datos a enviar:', datosTrauma );
      // Aquí llamarías a tu servicio para guardar en la DB
          //Registro de nuevos pacientes
         
        if(datosTrauma.id == 0) {
          //this.RegisterNewPaciente(datosPaciente);
        }
        else {
          //this.UpdatePaciente(datosPaciente);
        }


   
      Object.values(this.traumaForm.controls).forEach(control => {
        control.markAsTouched();
      });
   




  }






regresar(): void {
  window.history.back();
}

ngAfterViewInit(): void {
  
     const switches = document.querySelectorAll(
      '[data-toggle="switchbutton"]'
    );

    switches.forEach((element: any) => {
      element.switchButton();
    });

  }


 
clickCancel(){
      this.location.back();
}

mostrarTrauma(values:any): void {

  console.log(values.currentTarget.checked);

  this.showTrauma = values.currentTarget.checked;
}




}
