import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import{ HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { Router, RouterModule, Routes } from '@angular/router';// demas


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { SectionComponent } from './components/section/section.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { ExperienciasItemComponent } from './components/experiencias-item/experiencias-item.component';
import { HardSkillsComponent } from './components/hard-skills/hard-skills.component';
import { HardSkillsItemComponent } from './components/hard-skills-item/hard-skills-item.component';
import { EducacionesComponent } from './components/educaciones/educaciones.component';
import { EducacionesItemComponent } from './components/educaciones-item/educaciones-item.component';





const appRoutes: Routes = [
  {path: '', component: ExperienciasComponent},
  //{path: 'about', component: AboutComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    SectionComponent,
    FooterComponent,
    ExperienciasComponent,
    ExperienciasItemComponent,
    HardSkillsComponent,
    HardSkillsItemComponent,
    EducacionesComponent,
    EducacionesItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    /*
    los routers sson archivos aparte
     cuando son aplicaciones grandes,
     tenemos un monton de rutas,
     para que incialice en root.
     con esto ya tenemos las rutas implementadas

    */
   

  ],
  /* debemos permitir el modulo HttpClientModule 
  para luego acceder desde el componente*/

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
