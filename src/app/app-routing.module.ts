import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapMultilingualComponent } from './multilingual/bootstrap-multilingual/bootstrap-multilingual.component';
import { MultilingualComponent } from './multilingual/multilingual/multilingual.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: 'bootstrap-multilingual', pathMatch: 'full' },
  { path: 'bootstrap-multilingual', component: BootstrapMultilingualComponent },
  { path: 'material-multilingual', component: MultilingualComponent, }, 
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
