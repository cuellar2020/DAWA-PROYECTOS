import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup,FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tesis } from 'src/app/models/tesis';
import { TesisService } from 'src/app/services/tesis.service';
@Component({
  selector: 'app-crear-tesis',
  templateUrl: './crear-tesis.component.html',
  styleUrls: ['./crear-tesis.component.css']
})
export class CrearTesisComponent implements OnInit {
  tesisForm: FormGroup;
  id: string | null;

  constructor(private fb: FormBuilder,
    private router:Router,
    private _tesisService: TesisService,
    private aRouter:ActivatedRoute) {
      this.tesisForm = this.fb.group({
        tipo:['',Validators.required],
        tema:['',Validators.required],
        resumen:['',Validators.required],
        fecha_publicacion:['',Validators.required],
        autor1:['',Validators.required],
        autor2:['',Validators.required],
        autor3:['',Validators.required],
        carrera:['',Validators.required],
        archivo:['',Validators.required],
        tipo_contenido:['',Validators.required],
        palabras_clave:['',Validators.required],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
     }

  ngOnInit(): void {
  }

  
}
