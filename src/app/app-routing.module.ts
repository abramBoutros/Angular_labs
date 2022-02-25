import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent} from './login/login.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RegisterComponent} from './register/register.component';
import { ProductInfoComponent } from './product-info/product-info.component'

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'signup', component: RegisterComponent},

  {path: 'cart', component: RegisterComponent},
  {path: 'product/:id', component: ProductInfoComponent},
  {path: 'product', component: ProductListComponent},
  {path: '**', component: RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
