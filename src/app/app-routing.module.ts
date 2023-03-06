import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './_modules/main/main.component';

const routes: Routes = [
  {path: '', redirectTo: 'pokedex', pathMatch: 'full'},
  {path: 'pokedex', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
