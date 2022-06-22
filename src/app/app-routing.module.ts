import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { LojasComponent } from './pages/lojas/lojas.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
{path:'', component:HomeComponent},
{path:'sobre', component:SobreComponent},
{path:'contato', component:ContatoComponent},
{path:'jobs', component:JobsComponent},
{path:'lojas', component:LojasComponent},
{path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
