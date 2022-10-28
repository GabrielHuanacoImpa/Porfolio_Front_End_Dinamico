import { Injectable } from '@angular/core';
/*esto permite hacer llamados get y post a nuestro 
servidor montado en el puerto 5002*/
import {HttpClient, HttpHeaders} from '@angular/common/http';
/* lo siguieten es para decir que nuestro metodo es asincronico 
getTasks(), por que asi es en la vida real*/
import {Observable, of} from 'rxjs'; /* asincronico, la base de datos lleva su tiempo en responder a la peticion*/
import {Experiencia} from '../Experiencia' //interface
import {EXPERIENCIAS} from '../mock-experiencias'; //lista de tareas

/*El servicio ya maneja todas las tareas ya no el componente*/
/* El componente solo llama a los servicios */
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
} /*mandamos un json al servidor*/

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private apiUrl = 'http://localhost:5002/experiencias';
  constructor(
    /*inicializamos el metodo*/
    private http: HttpClient
  ) { }

  /* devuelve la lista de tarea */
  getExperiencias(): Observable<Experiencia[]> {
    return this.http.get<Experiencia[]>(this.apiUrl)
  }
  deleteExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    /*const url = '${this.apiUrl}/${task.id}';*/
    const url = `${this.apiUrl}/${experiencia.id}`;
    return this.http.delete<Experiencia>(url)
  }

  updateExperienciaReminder(experiencia: Experiencia): Observable<Experiencia> {
    const url = `${this.apiUrl}/${experiencia.id}`;
    return this.http.put<Experiencia>(url, experiencia, httpOptions)
    /*lo maneja como json : indicado por httpOptions*/
    /*es para informarle al Backend que le estamos enviando un json en root*/
  }

  addExperiencia(experiencia: Experiencia): Observable<Experiencia> {
    return this.http.post<Experiencia>(this.apiUrl, experiencia, httpOptions);
  }
}
