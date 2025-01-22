module.exports = {
    entry: './src/index.js',
    resolve: {
        fallback: {
            "crypto": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify"),
            "timers": require.resolve("timers-browserify"),
            "zlib": require.resolve("browserify-zlib"),
            "fs": false
        }
    }
}