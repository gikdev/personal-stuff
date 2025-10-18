const { app, BrowserWindow, Menu, dialog } = require("electron")
const path = require("node:path")
const url = require("node:url")

if (require("electron-squirrel-startup")) {
  app.quit()
}

let mainWindow

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 800,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false, // recommended for security
    },
  })

  if (app.isPackaged) {
    // Load local index.html when packaged
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "dist", "index.html"),
        protocol: "file:",
        slashes: true,
      })
    )
  } else {
    // Development mode: change to your dev server URL
    mainWindow.loadURL("http://localhost:5173")
  }
}

// App ready
app.whenReady().then(() => {
  createWindow()

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

// Quit when all windows are closed
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})

// Menu template
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

// Menu actions
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
