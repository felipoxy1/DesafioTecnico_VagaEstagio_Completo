import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MachineService } from '../../services/machine.service';
import { Machine } from '../../models/machine.model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})

export class CadastroComponent {
  newMachine: Machine = {
    name: '',
    location: '',
    status: 'Desligada'
  }

  statuses = ['Operando', 'Parada para Manutenção', 'Desligada'];

  constructor(private machineService: MachineService, private router: Router) {}

  onSubmit(): void {
    this.machineService.addMachine(this.newMachine).subscribe({
      next: (response) => {
        console.log('Maquina cadastrada com sucesso:', response);
        this.router.navigate(['/dashboard']);
      }, error: (err) => {
        console.error('Erro ao cadastrar a maquina:', err)
      }
    })
  }
}
