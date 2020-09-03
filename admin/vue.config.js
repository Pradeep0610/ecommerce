module.exports = {
    publicPath:
        process.env.NODE_ENV === 'production'
            ? '/ecommerce_admin_dashboard/'
            : '/'
}