import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [{
  path:'',
  redirectTo:'/home',
  pathMatch:'full'
},{
  path:'home',
  title:"Lucid LTS",
  component:HomePageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
