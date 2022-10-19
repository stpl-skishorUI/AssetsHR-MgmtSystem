import { RouterModule, Routes } from '@angular/router';

export const PartialLayoutRoutes: Routes = [
  // asset management
  { path: 'assets-dashboard', loadChildren: () => import('../asset-management/assets-dashboard/assets-dashboard.module').then(m => m.AssetsDashboardModule), data: { title: 'Dashboard' } },
  { path: 'item-group-master', loadChildren: () => import('../asset-management/item-master/item-group-master/item-group-master.module').then(m => m.ItemGroupMasterModule), data: { title: 'Item Group Master' }  },
  { path: 'item-category-master', loadChildren: () => import('../asset-management/item-master/item-category-master/item-category-master.module').then(m => m.ItemCategoryMasterModule), data: { title: 'Item Category Master' }  },
  { path: 'item-paramter-master', loadChildren: () => import('../asset-management/item-master/item-paramter-master/item-paramter-master.module').then(m => m.ItemParamterMasterModule), data: { title: 'Item Paramter Master' }  },
  { path: 'store-master', loadChildren: () => import('../asset-management/store-vendor-master/store-master/store-master.module').then(m => m.StoreMasterModule), data: { title: 'Store Master' }  },
  { path: 'vendor-master', loadChildren: () => import('../asset-management/store-vendor-master/vendor-master/vendor-master.module').then(m => m.VendorMasterModule), data: { title: 'Vendor Master' }  },
  { path: 'item-registration', loadChildren: () => import('../asset-management/manage-items/item-registration/item-registration.module').then(m => m.ItemRegistrationModule), data: { title: 'Item Registration' }  },
  { path: 'item-issue-return', loadChildren: () => import('../asset-management/manage-items/item-issue-return/item-issue-return.module').then(m => m.ItemIssueReturnModule), data: { title: 'Item Issue/Return' }  },
  { path: 'item-transfer', loadChildren: () => import('../asset-management/manage-items/item-transfer/item-transfer.module').then(m => m.ItemTransferModule), data: { title: 'Item Transfer' }  },
  { path: 'item-repair-issue-return', loadChildren: () => import('../asset-management/manage-items/item-repair-issue-return/item-repair-issue-return.module').then(m => m.ItemRepairIssueReturnModule), data: { title: 'Item Repair Issue/Return' }  },
  { path: 'item-scrap-donated', loadChildren: () => import('../asset-management/manage-items/item-scrap-donated/item-scrap-donated.module').then(m => m.ItemScrapDonatedModule), data: { title: 'Item Scrap/Donated' }  },
  

  
  { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule), data: { title: 'Dashboard' } },
];
