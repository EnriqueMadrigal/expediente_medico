import { Component, OnInit, inject ,input, signal, WritableSignal } from '@angular/core';
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



@Component({
  selector: 'app-edit-traumatismo',
   imports: [ReactiveFormsModule], 
  templateUrl: './edit-traumatismo.html',
  styleUrl: './edit-traumatismo.css',
})
export class EditTraumatismo implements OnInit{

authService: any;
  curUser!: User;
  userId =  "";
  isLoading = false;
  id = "";


  constructor(private router: Router,
    private alerts: AlertService,
    private fb: FormBuilder, 
    private componentsTextService : ComponentsTextService,
    private auth: AuthService,
    private route: ActivatedRoute ) {
    this.authService = auth;
   }


ngOnInit(): void {
  //this.initForm();
 this.userId = this.auth.getUserId() ?? "0";
     //const id = this.route.snapshot.paramMap.get('id') ?? "";
     this.id = this.route.snapshot.paramMap.get('id') ?? "";
    
    //this.safeCallComponents(this.componentText1,"0");
    //this.safeCallComponents(this.componentText2,"6");
    //this.safeCallComponents(this.componentText3,"7");



}




}
