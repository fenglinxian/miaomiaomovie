module.exports= {
    devServer: {
        proxy: {
            "/api": {
                target: "http://39.97.33.178",
                ChangeOrigin: true
            }
        }
    }
}