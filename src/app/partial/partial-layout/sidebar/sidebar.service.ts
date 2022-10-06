import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  toggled = false;
  _hasBackgroundImage = true;
  menus = [
    {
      title: 'assets',
      type: 'header'
    },
    {
      title: 'Dashboard',
      url:'assets-dashboard',
      icon: 'fa-solid fa-chart-line',
      type: 'simple'
    },
    {
      title: 'Item Master',
      icon: 'fa-solid fa-layer-group',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Group Master',
          url:'organization-registration'
        },
        {
          title: 'Category Master',
          url:'company-registration'
        },
        {
          title: 'Parameter Master',
          url:'department-registration'
        }
      ]
    },
    {
      title: 'Store Master',
      url:'dashboard',
      icon: 'fa-solid fa-store',
      type: 'simple'
    },
    {
      title: 'Vendor Master',
      url:'dashboard',
      icon: 'fa-solid fa-screwdriver-wrench',
      type: 'simple'
    },
    {
      title: 'Items Entry',
      icon: 'fa-solid fa-book-open',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Items Registration',
          url:'employee-registration'
        },
        {
          title: 'Item Issue/Return',
          url:'employee-salary-details'
        },
        {
          title: 'Item Transfer',
          url:'assign-reporting-person'
        },
        {
          title: 'Item Repair Issue/Return',
          url:'leave-assignment'
        },
        {
          title: 'Item Scrap/Donated',
          url:'leave-assignment'
        }
      ]
    },
    {
      title: 'Extra',
      type: 'header'
    },
    {
      title: 'Documentation',
      icon: 'fa fa-book',
      active: false,
      type: 'simple',
      badge: {
        text: 'Beta',
        class: 'badge-primary'
      },
    },
    {
      title: 'Calendar',
      icon: 'fa fa-calendar',
      active: false,
      type: 'simple'
    },
    {
      title: 'Examples',
      icon: 'fa fa-folder',
      active: false,
      type: 'simple'
    }
  ];
  constructor() { }

  toggle() {
    this.toggled = ! this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }
}
