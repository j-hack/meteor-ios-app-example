// mobile-config.js
App.info({
  id: 'com.example.meteor-todo-app', // アプリID
  name: 'Todo',                      // アプリ名
  description: 'Todo App',           // アプリ説明
  author: 'Example Inc.',            // 作者
  email: 'contact@example.com',      // メールアドレス
  website: 'http://example.com',     // ウェブサイト
  version: '0.1.0',                  // バージョン番号
  buildNumber: '1'                   // ビルド番号
});

App.icons({
  // iOS
  'iphone'   : 'resources/icons/app_icon-60x60.png',
  'iphone_2x': 'resources/icons/app_icon-60x60@2x.png', // 120x120
  'iphone_3x': 'resources/icons/app_icon-60x60@3x.png', // 180x180
  'ipad'     : 'resources/icons/app_icon-76x76.png',
  'ipad_2x'  : 'resources/icons/app_icon-76x76@2x.png', // 144x144
});

App.launchScreens({
  // iOS
  'iphone'            : 'resources/splash/splash-320x480.png',
  'iphone_2x'         : 'resources/splash/splash-320x480@2x.png',  // 640x960
  'iphone5'           : 'resources/splash/splash-320x568@2x.png',  // 640x1136
  'iphone6'           : 'resources/splash/splash-375x667@2x.png',  // 750x1334
  'iphone6p_portrait' : 'resources/splash/splash-414x736@3x.png',  // 1242x2208
  'iphone6p_landscape': 'resources/splash/splash-736x414@3x.png',  // 2208x1242
  'ipad_portrait'     : 'resources/splash/splash-768x1024.png',
  'ipad_portrait_2x'  : 'resources/splash/splash-768x1024@2x.png', // 1536x2048
  'ipad_landscape'    : 'resources/splash/splash-1024x768.png',
  'ipad_landscape_2x' : 'resources/splash/splash-1024x768@2x.png', // 2048x1536
});