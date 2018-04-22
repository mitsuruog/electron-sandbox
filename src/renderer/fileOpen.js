import { ipcRenderer } from 'electron';

const btnOpen = document.querySelector('.btn-open-file');
const output  = document.querySelector('.file-contents');

btnOpen.addEventListener('click', () => {
  ipcRenderer.send('openFile');
});

ipcRenderer.on('fileData', (event, data) => {
  output.innerHTML = data;
});