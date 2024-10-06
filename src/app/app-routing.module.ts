import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CLCoremoduleModule } from './core/coremodule.module';
import { CLCoreComponentComponent } from './core/corecomponent.component';

const routes: Routes = [
  // {path:'' ,redirectTo:"CLCoremoduleModule#CLCoreComponentComponent",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
