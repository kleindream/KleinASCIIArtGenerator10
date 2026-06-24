const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 960,
    height: 740,
    backgroundColor: "#050805",
    show: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: false
    }
  });

  win.setMenu(null);

  win.loadFile(path.join(__dirname, "index.html"));

  win.once("ready-to-show", function () {
    win.show();
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  app.quit();
});