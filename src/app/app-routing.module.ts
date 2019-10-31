import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpComponent } from './http/http.component';
import { ZippyComponent } from './zippy/zippy.component';
import { HomeComponent } from './home/home.component';
import { AopcComponent } from './aopc/aopc.component'


const routes: Routes = [
  { path: 'http', component: HttpComponent },
  { path: 'zippy', component: ZippyComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aopc', component: AopcComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
