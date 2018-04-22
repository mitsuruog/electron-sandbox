import { ipcRenderer } from 'electron';

const webView        = document.querySelector('.web-view');
const webViewLoading = document.querySelector('.web-view-loading');

const btnGoogle = document.querySelector('.btn-open-google');
const btnYahoo  = document.querySelector('.btn-open-yahoo');
const btnGithub = document.querySelector('.btn-open-github');

webView.addEventListener('did-start-loading', () => {
  webViewLoading.innerHTML = 'loading...';
});

webView.addEventListener('did-stop-loading', () => {
  webViewLoading.innerHTML = 'loaded!';
});

btnGoogle.addEventListener('click', () => {
  webView.src = 'https://www.google.com/';
});

btnGithub.addEventListener('click', () => {
  webView.src = 'https://github.com/';
});

btnYahoo.addEventListener('click', () => {
  webView.src = 'https://www.yahoo.co.jp/';
});

ipcRenderer.on('showPage', (event, url) => {
  webView.src = url;
});