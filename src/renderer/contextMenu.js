import { remote, ipcRenderer } from 'electron';

const { Menu, MenuItem } = remote;

const menu = new Menu();

menu.append(new MenuItem({
  label: 'show google',
  click() {
    ipcRenderer.send('showPage', 'https://www.google.com/');
  },
}));
menu.append(new MenuItem({ type: 'separator' }));
menu.append(new MenuItem({
  label: 'MenuItem2',
  type: 'checkbox',
  checked: true
}));

window.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  menu.popup(remote.getCurrentWindow());
}, false);