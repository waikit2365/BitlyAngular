import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UrllistComponent } from './urllist/urllist.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'urllist', component: UrllistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
