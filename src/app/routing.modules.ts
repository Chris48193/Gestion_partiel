import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { IsfatesComponent } from './isfates/isfates.component';
import { PartielsComponent } from './partiels/partiels.component';

const routes: Routes = [
  { path: '', redirectTo: '/acceuil', pathMatch: 'full' },
  { path:'acceuil', component: IsfatesComponent },
  { path:'partiels', component: PartielsComponent},
  { path:'contact', component: ContactComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
