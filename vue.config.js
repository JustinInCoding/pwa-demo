module.exports = {
  pwa: {
    name: 'pwa-demo',
    themeColor: '#4c89fe',
    msTileColor: '#4c89fe',
    manifestOptions: {
      start_url: '.',
      background_color: '#4c89fe'
    },
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      // https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin
      // skipWaiting: true,
      // clientsClaim: true,
      // importWorkboxFrom: 'local',
      // importsDirectory: 'js',
      // navigateFallback: '/',
      // navigateFallbackBlacklist: [/\/api\//]
    }
  }
}