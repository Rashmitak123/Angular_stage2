/* import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookDataComponent } from './book/book.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {  ProductsListComponent } from './products/product-list/product-list.component';
import { EventDetailComponent } from './event-details/event-details.component';
import { EmployeeListComponent } from './employee/employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalWebsiteComponent } from './animal-website/animal-website.component';
import { ProductAddComponent } from './products/product-list/product-add.component';
import { ShellComponent } from './home/shell.component';
import { AuthGuard } from './user/auth-guard.service';
import { LoginComponent } from './user/login.component';
import { AnimalAddComponent } from './animal-list/animal-add/animal-add.component';

const routes:Routes=[
{path:'',component:HomeComponent,pathMatch:'full',},
{path:'about-us',component:AboutUsComponent},
{path:'book',component:BookDataComponent},
/* {path:'',component:ShellComponent,
  children:[{path:'welcome', component:WelcomeComponent},
  {
    path:'products',
    component:ProductsListComponent,
    canActivate:[AuthGuard],
    children:[{path:'addProduct',component:ProductAddComponent}]
  },
  {path:'',redirectTo:'welcome',pathMatch:'full'},
  {path:'login',component:LoginComponent}
]}, */
{path:'',component:ShellComponent,
  children:[{path:'welcome', component:WelcomeComponent},
  {
    path:'animals',
    component:AnimalListComponent,
    canActivate:[AuthGuard],
    children:[{path:'addAnimal',component:AnimalAddComponent}]
  },
  {path:'',redirectTo:'welcome',pathMatch:'full'},
  {path:'login',component:LoginComponent}
]},
/*{path:'products',component:ProductsListComponent,
 children:[
  {path:'addProduct',component:ProductAddComponent}
]}, */
{path:'event',component:EventDetailComponent},
{path:'employee', component:EmployeeListComponent},
{path:'employees/:id',component:EmployeeDetailComponent},
/* {path:'animals',component:AnimalListComponent,
children:[
  {path:'detail/:id',component:AnimalDetailComponent},
  {path:'website',component:AnimalWebsiteComponent}
]}, */

{path:'**',component:AboutUsComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }