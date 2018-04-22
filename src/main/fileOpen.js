import { ipcMain, dialog } from 'electron';

const fs = require('fs');

ipcMain.on('openFile', (event, path) => {
  dialog.showOpenDialog((fileNames) => {
    if (fileNames !== undefined) {
      fs.readFile(fileNames[0], 'utf-8', (error, data) => {
        if (error) {
          alert(`ファイルを開く時にエラーが発生しました。${fileNames[0]}`);
          return;
        }
        // ファイルデータを転送する
        event.sender.send('fileData', data);
      });
    }
  });
});