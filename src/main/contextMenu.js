import { ipcMain } from 'electron';

ipcMain.on('showPage', (event, url) => {
  event.sender.send('showPage', url);
});