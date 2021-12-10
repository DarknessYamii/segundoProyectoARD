import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared2/clases2/interfaces2/servicios2/login.service';
import { Usuario } from 'src/app/shared2/clases2/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usuario: Usuario
  constructor(
    private loginService: LoginService,
    private router: Router)
   { 
     this.usuario = new Usuario();
   }

  ngOnInit(): void {
  }
  public submit(): void {
    this.loginService.login(this.usuario).subscribe(
    (data: number) => {
    localStorage.setItem('nombreUsuario', this.usuario.nombre);
    localStorage.setItem('miTokenPersonal',`${ data }`);
    this.router.navigate(['/listadojuegos']);
    },
    (error: Error) => {
    console.error("Error al realizar el acceso");
    }
    )
    }
}
