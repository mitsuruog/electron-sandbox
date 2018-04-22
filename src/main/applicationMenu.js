import { Menu } from 'electron';

const template = [
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
    ],
  },
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
