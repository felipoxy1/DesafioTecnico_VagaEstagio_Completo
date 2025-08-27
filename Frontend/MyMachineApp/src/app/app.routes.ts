import { Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';

export const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent}, 
    {path: 'cadastro', component: CadastroComponent},
    {path: 'detalhes/:id', component: DetalhesComponent},
    {path: '**', redirectTo: '/dashboard'}
]
