import { RouterModule, Routes } from '@angular/router';

export const PartialLayoutRoutes: Routes = [
  // asset management
  { path: 'assets-dashboard', loadChildren: () => import('../asset-management/assets-dashboard/assets-dashboard.module').then(m => m.AssetsDashboardModule), data: { title: 'Assets Dashboard' } },


  
  { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule), data: { title: 'Dashboard' } },
];
