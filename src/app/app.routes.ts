import {RouterModule, Routes} from '@angular/router';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {NgModule} from '@angular/core';
import {ContentComponent} from './core/sections/content/content.component';
import {UnderDevComponent} from './under-dev.component';
import {NetworkComponent} from './network.component';
import {AboutUsComponent} from './about-us/about-us.component';

const routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    component: ContentComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: 'network',
    component: NetworkComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: '**',
    component: UnderDevComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
