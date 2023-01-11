import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { SobremiComponent } from './componentes/sobremi/sobremi.component';
import { IndexComponent } from './componentes/index/index.component';
import { ModalLoginComponent } from './modales/modal-login/modal-login.component';
import { ModalExperienciaComponent } from './modales/modal-experiencia/modal-experiencia.component';
import { ModalEducacionComponent } from './modales/modal-educacion/modal-educacion.component';
import { ModalHabilidadesComponent } from './modales/modal-habilidades/modal-habilidades.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    FooterComponent,
    SobremiComponent,
    IndexComponent,
    ModalLoginComponent,
    ModalExperienciaComponent,
    ModalEducacionComponent,
    ModalHabilidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
