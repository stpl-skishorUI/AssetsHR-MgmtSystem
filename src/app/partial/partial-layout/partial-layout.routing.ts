import { RouterModule, Routes } from '@angular/router';

export const PartialLayoutRoutes: Routes = [
  { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule), data: { title: 'Dashboard' } },
  { path: 'assets-dashboard', loadChildren: () => import('../../partial/assets-dashboard/assets-dashboard.module').then(m => m.AssetsDashboardModule), data: { title: 'Assets Dashboard' } },
];
