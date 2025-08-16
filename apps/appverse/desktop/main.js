const { app, BrowserWindow, Menu, dialog } = require("electron")
const path = require("node:path")

if (require("electron-squirrel-startup")) {
  app.quit()
}

let mainWindow

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 800,
  })

  mainWindow.loadFile(path.join(__dirname, "dist", "index.html"))
}

app.whenReady().then(() => {
  createWindow()

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})

const template = [
  {
    label: "Menu",
    submenu: [
      {
        label: "DevTools",
        accelerator: "F12",
        click: toggleDevTools,
      },
      { type: "separator" },
      {
        label: "درباره",
        accelerator: "F1",
        click: showAbout,
      },
      {
        label: "سازنده",
        click: openDeveloperWebsite,
      },
    ],
  },
]

Menu.setApplicationMenu(Menu.buildFromTemplate(template))

function toggleDevTools() {
  mainWindow?.webContents.toggleDevTools()
}

function showAbout() {
  dialog.showMessageBox({
    type: "info",
    title: "درباره",
    message: `v${app.getVersion()}`,
    detail: `سازنده: محمدمهدی بهرامی\nوب‌سایت: https://bahrami85.ir`,
    buttons: ["باشه"],
  })
}

function openDeveloperWebsite() {
  const aboutWin = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: true,
    minimizable: false,
    maximizable: false,
  })

  aboutWin.loadURL("https://bahrami85.ir/")
}
