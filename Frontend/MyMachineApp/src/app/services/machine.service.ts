import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Machine } from '../models/machine.model';

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  private apiUrl = 'http://localhost:5075/api/machines';

  constructor(private http: HttpClient) { }

  getMachine(): Observable<Machine[]> {
    return this.http.get<Machine[]>(this.apiUrl);
  }

  getMachinesByStatus(status: string): Observable<Machine[]> {
    return this.http.get<Machine[]>(`${this.apiUrl}?status=${status}`);
  }

  getMachineById(id: string): Observable<Machine> {
    return this.http.get<Machine>(`${this.apiUrl}/${id}`);
  }

  addMachine(machine: Machine): Observable<Machine> {
    return this.http.post<Machine>(this.apiUrl, machine);
  }

  updateMachine(machine: Machine): Observable<any> {
    return this.http.put(`${this.apiUrl}/${machine.id}`, machine);
  }
}
  