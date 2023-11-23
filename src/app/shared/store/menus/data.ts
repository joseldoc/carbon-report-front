import {MenuItem} from 'primeng/api';

export const MENU_NAVIGATION: MenuItem[] = [
  {
    id: '1',
    label: 'Video',
    icon: 'pi pi-fw pi-video',
    routerLink: ['/videos'],
    visible: true
  },
  {
    id: '2',
    label: 'Génération de rapport',
    icon: 'pi pi-fw pi-folder',
    visible: true,
    routerLink: ['/report']
  }
];
