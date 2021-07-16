module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    
    config.module.rules.push({
        test: /\.graphql$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
    })

    return config
  },
}