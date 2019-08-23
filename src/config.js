const path = require('path');

const APP_NAME = 'SOFA';
const APP_TEAM = 'roporter';
const APP_VERSION = require('../package.json').version;


module.exports = {
    ANNOUNCEMENT_URL: 'https://webtorrent.io/desktop/announcement',
    AUTO_UPDATE_URL: 'https://webtorrent.io/desktop/update',
    CRASH_REPORT_URL: 'https://webtorrent.io/desktop/crash-report',
    TELEMETRY_URL: 'https://webtorrent.io/desktop/telemetry',

    APP_COPYRIGHT: 'Copyright © 2014-2019 ' + APP_TEAM,
    APP_FILE_ICON: path.join(__dirname, '..', 'static', 'WebTorrentFile'),
    APP_ICON: path.join(__dirname, '..', 'static', 'WebTorrent'),
    APP_NAME: APP_NAME,
    APP_TEAM: APP_TEAM,
    APP_VERSION: APP_VERSION,
    APP_WINDOW_TITLE: APP_NAME,
};