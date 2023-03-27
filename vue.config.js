// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  devServer: {
    proxy: {
      '/getRandomPlayer': {
        // target: 'http://localhost:8080/'
        target: 'https://teatapp.onrender.com/'
      },
      '/getOwnersTeam': {
        // target: 'http://localhost:8080/'
        target: 'https://teatapp.onrender.com/'
      }
    }
  }
}
