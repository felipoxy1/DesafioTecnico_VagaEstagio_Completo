    import { Component, OnInit } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { FormsModule } from '@angular/forms';
    import { RouterLink } from '@angular/router';
    import { MachineService } from '../../services/machine.service';
    import { Machine } from '../../models/machine.model';

    @Component({
      selector: 'app-dashboard',
      standalone: true,
      imports: [CommonModule, FormsModule, RouterLink],
      templateUrl: './dashboard.component.html',
      styleUrls: ['./dashboard.component.css']
    })
    export class DashboardComponent implements OnInit {
      machines: Machine[] = [];
      statuses = ['Todos', 'Operando', 'Parada para Manutenção', 'Desligada'];
      selectedStatus = 'Todos';

      constructor(private machineService: MachineService) { }

      ngOnInit(): void {
        this.loadMachines();
      }

      loadMachines(): void {
        if (this.selectedStatus === 'Todos') {
          this.machineService.getMachine().subscribe(data => {
            this.machines = data;
          });
        } else {
          this.machineService.getMachinesByStatus(this.selectedStatus).subscribe(data => {
            this.machines = data;
          });
        }
      }

      onStatusChange(event: any): void {
        this.selectedStatus = event.target.value;
        this.loadMachines();
      }
    }
    