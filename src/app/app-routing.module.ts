import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./web/home/home.module').then(m => m.HomeModule) }, { path: 'login', loadChildren: () => import('./web/login/login.module').then(m => m.LoginModule) }, { path: 'web-layout', loadChildren: () => import('./web/web-layout/web-layout.module').then(m => m.WebLayoutModule) }, { path: 'web-header', loadChildren: () => import('./web/web-layout/web-header/web-header.module').then(m => m.WebHeaderModule) }, { path: 'web-footer', loadChildren: () => import('./web/web-layout/web-footer/web-footer.module').then(m => m.WebFooterModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
