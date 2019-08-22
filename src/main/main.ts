import { app, BrowserWindow, ipcMain } from "electron";
import installExtension, { REACT_DEVELOPER_TOOLS } from "electron-devtools-installer";
import { autoUpdater } from "electron-updater";
import { is } from "electron-util";
import unhandled from "electron-unhandled";
import log from "electron-log";

unhandled();

// Note: Must match `build.appId` in package.json
app.setAppUserModelId('com.company.SOFA');

// Uncomment this before publishing your first version.
// It's commented out as it throws an error if there are no published versions.
autoUpdater.logger = log;

log.info('App starting...');

const FOUR_HOURS = 1000 * 60 * 60 * 4;
setInterval(() => {
	autoUpdater.checkForUpdates();
}, FOUR_HOURS);

autoUpdater.checkForUpdates();

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

// Prevent multiple instances of the app
if (!app.requestSingleInstanceLock()) {
	app.quit();
}

app.on('second-instance', () => {
	if (mainWindow) {
		if (mainWindow.isMinimized()) {
			mainWindow.restore();
		}

		mainWindow.show();
	}
});

app.on('window-all-closed', () => {
	if (!is.macos) {
		app.quit();
	}
});

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow: null | BrowserWindow;

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
		width: 1000,
		height: 800,
		webPreferences: {
			nodeIntegration: true
		}
  });

  // and load the index.html of the app.
  // @ts-ignore
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  if( is.development ) {
    mainWindow.webContents.openDevTools();
  }

  // Emitted when the window is closed.
  mainWindow.on("closed", () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
};

function devToolsInstaller() {
  installExtension(REACT_DEVELOPER_TOOLS)
    .then((name: any) => console.log(`Added Extension:  ${name}`))
    .catch((err: any) => console.log("An error occurred: ", err));
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", () => {
  createWindow();
  if( is.development ) {
    devToolsInstaller();
  }
});

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

autoUpdater.on('checking-for-update', () => {
	log.info('Checking for update...');
});

autoUpdater.on('update-available', (info) => {
	log.info('Update available.');
});

autoUpdater.on('update-not-available', (info) => {
	log.info('Update not available.');
});

autoUpdater.on('error', (err) => {
	log.info('Error in auto-updater. ' + err);
});

autoUpdater.on('update-downloaded', (ev, info) => {
	// Wait 5 seconds, then quit and install
	// In your application, you don't need to wait 5 seconds.
	// You could call autoUpdater.quitAndInstall(); immediately
	setTimeout(function() {
		autoUpdater.quitAndInstall();  
	}, 5000);
});

ipcMain.on('online-status-changed', (event, status) => {
	console.log(status);
});
