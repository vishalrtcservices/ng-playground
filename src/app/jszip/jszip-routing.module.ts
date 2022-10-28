import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JszipComponent } from './jszip.component';

const routes: Routes = [{ path: '', component: JszipComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JszipRoutingModule { }
