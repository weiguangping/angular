import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import {FailComponent} from "./fail/fail.component";
import {ProductDescComponent} from "./product/product-desc/product-desc.component";
import {SellerinfoComponent} from "./product/sellerinfo/sellerinfo.component";
import {ChatComponent} from "./chat/chat.component";
import {LoginGuard} from "./guard/login.guard";
import {UnsavedGuard} from "../../../demo/ch3/router/src/app/guard/unsaved.guard";

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'chat',component:ChatComponent,outlet:'aux'},
  {path:'product',component:ProductComponent,children:[
    {path:'',component:ProductDescComponent},
    {path:'seller/:id',component:SellerinfoComponent}
  ],canActivate:[LoginGuard],canDeactivate:[UnsavedGuard]},
  {path:'**',component:FailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[LoginGuard,UnsavedGuard]
})
export class AppRoutingModule { }
