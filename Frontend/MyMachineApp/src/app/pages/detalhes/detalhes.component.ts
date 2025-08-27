import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MachineService } from '../../services/machine.service';
import { Machine } from '../../models/machine.model';
import { RemoveSpacesPipe } from '../../pipes/remove-spaces-pipe';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [CommonModule, RouterLink, RemoveSpacesPipe],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.css'
})
export class DetalhesComponent implements OnInit {
  machine: Machine | undefined;

  constructor(
    private route: ActivatedRoute,
    private machineService: MachineService
  ) { }

  ngOnInit(): void {
      this.getMachineDetails();
  }

  getMachineDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.machineService.getMachineById(id).subscribe({
        next: (data) => {
          this.machine = data;
        },
        error: (err) => {
          console.error('Error ao obter os detalhes da máquina:', err);
        }
      })
    }
  }
}
