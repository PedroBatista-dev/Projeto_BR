const { app, BrowserWindow, Menu  } = require('electron');

let appWindow

function createWindow() {
    appWindow = new BrowserWindow({
        width: 1920,
        height: 1080
    });
    
    appWindow.loadFile('dist/projeto-br/browser/index.html');

    // Defina a janela para tela cheia
    appWindow.setFullScreen(true);

    appWindow.on('closed', function () {
        appWindow = null;
    });
}

// Crie um menu vazio
const menu = Menu.buildFromTemplate([]);
  
// Defina o menu como nulo para ocultar os botões padrão
Menu.setApplicationMenu(menu);

app.whenReady().then(() => {
    createWindow();
});