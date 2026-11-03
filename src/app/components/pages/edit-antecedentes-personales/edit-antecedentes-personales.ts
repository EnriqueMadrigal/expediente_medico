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



@Component({
  selector: 'app-edit-antecedentes-personales',
  imports: [ReactiveFormsModule], 
  templateUrl: './edit-antecedentes-personales.html',
  styleUrl: './edit-antecedentes-personales.css',
})
export class EditAntecedentesPersonales implements OnInit, AfterViewInit {

  


antecedentesForm!: FormGroup;
authService: any;
  curUser!: User;
  userId =  "";
  isLoading = false;
  id = "";
  showAntecedentes= true;

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

ngAfterViewInit(): void {
  
     const switches = document.querySelectorAll(
      '[data-toggle="switchbutton"]'
    );

    switches.forEach((element: any) => {
      element.switchButton();
    });

  }

  
mostrarEnfermedades(values:any): void {

  console.log(values.currentTarget.checked);

  this.showAntecedentes = values.currentTarget.checked;
}

editTraumatismo(): void {
 this.router.navigate(['/editTraumatismo/'+ this.id]);
  
}




}
