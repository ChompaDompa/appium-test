import * as path from 'path';

export const config: WebdriverIO.Config = {
    runner: 'local',
    tsConfigPath: './tsconfig.json',
    port: 4723,

    specs: [
        './test/specs/**/*.js'
    ],
    exclude: [],

    maxInstances: 1,

    capabilities: [
        {
            platformName: "Android",
            "appium:automationName": "UiAutomator2",
            "appium:deviceName": "emulator-5554",
            "appium:platformVersion": "13.0",
            "appium:app": path.resolve("C:/Users/Stefany/Documents/Proyecto_Moviles/apps/app-stufi.apk"),
            "appium:noReset": false,
            'appium:dontStopAppOnReset': true,
            "appium:fullReset": false,
            //"appium:autoGrantPermissions": true,
            "appium:newCommandTimeout": 300,
            "appium:appActivity": "com.q10soluciones.jack.MainActivity",
            "appium:appWaitActivity": "*"
        }
    ],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: ['appium'],

    framework: 'mocha',

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
