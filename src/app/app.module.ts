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
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ProyectosItemComponent } from './components/proyectos-item/proyectos-item.component';
import { HardSoftSkillsComponent } from './components/hard-soft-skills/hard-soft-skills.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { SoftSkillsItemComponent } from './components/soft-skills-item/soft-skills-item.component';
import { IdiomasComponent } from './components/idiomas/idiomas.component';
import { IdiomasItemComponent } from './components/idiomas-item/idiomas-item.component';



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
    EducacionesItemComponent,
    ProyectosComponent,
    ProyectosItemComponent,
    HardSoftSkillsComponent,
    SoftSkillsComponent,
    SoftSkillsItemComponent,
    IdiomasComponent,
    IdiomasItemComponent
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
     NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "outerStrokeGradient": false,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "subtitleColor": "black",
      "subtitleFontSize": "20",
     
      "title": "TITLE",
      "titleColor": "black",
      "titleFontSize": "20",
      "titleFontWeight" : "900",
      "animateTitle": false,
      "animationDuration": 10,
      "showUnits": true,
      "showBackground": false,
      "clockwise": true,
      "startFromZero": false,
      "lazy": true}),

  ],
  /* debemos permitir el modulo HttpClientModule 
  para luego acceder desde el componente*/

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
