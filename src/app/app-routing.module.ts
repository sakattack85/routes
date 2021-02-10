import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { UserComponent } from './user/user.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [
  {path:'user', component:UserComponent},
  {path:'product', component:ProductComponent,
children:[{path:'productdetails/:id', component:ProductdetailsComponent}]
},
  {path:'userdetails/:id', component:UserdetailsComponent},
  {path:'productdetails/:id', component:ProductdetailsComponent},
  {path:'', redirectTo:'/user', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
