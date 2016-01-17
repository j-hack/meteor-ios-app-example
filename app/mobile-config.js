// mobile-config.js
App.info({
  id: 'com.example.meteor-todo-app', // アプリID
  name: 'Todo',                      // アプリ名
  description: 'Todo App',           // アプリ説明
  author: 'J-hack Inc.',             // 作者
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
  'ipad'     : 'resources/icons/app_icon-72x72.png',
  'ipad_2x'  : 'resources/icons/app_icon-72x72@2x.png', // 144x144
});