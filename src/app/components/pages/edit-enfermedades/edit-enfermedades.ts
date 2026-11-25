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
import { Enfermedad } from '../../../models/Enfermedad';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-edit-enfermedades',
  imports: [ReactiveFormsModule, RouterLink], 
  templateUrl: './edit-enfermedades.html',
  styleUrl: './edit-enfermedades.css',
})
export class EditEnfermedades implements OnInit{



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

  EnfermedadesCardioVascular = signal<Enfermedad[]>([]);





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
this.userId = this.auth.getUserId() ?? "0";
     //const id = this.route.snapshot.paramMap.get('id') ?? "";
     this.id = this.route.snapshot.paramMap.get('id') ?? "";
  
}






clickDelete(id: number) {
 
  console.log("Delete:" + id.toString());
  
  if(confirm("Esta Seguro de eliminar al paciente ?")) {
 
}

}

clickEnfermedadNueva() {

    this.router.navigate(['/addEnfermedad/'+this.id]);

  console.log("Add:");
}


}
