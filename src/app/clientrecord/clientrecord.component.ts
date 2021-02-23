import { Component, OnInit } from '@angular/core';
import { ClientserviceService } from '../shared/clientservice.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
 import { NgForm } from "@angular/forms";
 import { Router } from "@angular/router";
import { Client } from '../shared/client.model';
@Component({
  selector: 'app-clientrecord',
  templateUrl: './clientrecord.component.html',
  styleUrls: ['./clientrecord.component.css']
})
export class ClientrecordComponent implements OnInit
 {

  constructor(private Clientservice: ClientserviceService,private router:Router,private formBuilder: FormBuilder) { }
 registerForm: FormGroup;
  employeeIdUpdate = null;  
  submitted = false;
  massage = null;  
  abc:any;
dataSaved = false;
emp:any;
form:any;
  client =
  {
    ClientName :'',
    ClientEmail:'',
    ClientSkype:'',
    ServerDetail:''

  };
 
    ngOnInit() {
    //  debugger;
       this.registerForm = this.formBuilder.group(
        {
          ClientName: ["", Validators.required],
          ClientEmail: ["", [Validators.required, Validators.email]],
          ClientSkype: ["", Validators.required],
          ServerDetail: ["", Validators.required]
        },
       
      );
      this.refreshclientlist();
    }
    get f() {
      return this.registerForm.controls;
    }
    Deleteclient(emp){
      
     debugger;
      this.Clientservice.deleteclient(emp).subscribe((res)=>
      {
         debugger;
         this.abc=res;
      })
      this.refreshclientlist();
    }

    Editclient(emp) 
    {  
     debugger;  
      this.router.navigate(['/addclient'+`/${emp._id}`]);
   }
     
     AddClient()
     {
      this.router.navigate(['/addclient']);
   //  this.router.navigate(['/addclient']);
     }
     onLogout(){
     
      this.router.navigate(['/login']);
    }
     refreshclientlist()
     {   
       debugger;
       this.Clientservice.getEmployeeList().subscribe((res)=>
       {
         debugger;
          this.abc=res;
       })
     }    
}
