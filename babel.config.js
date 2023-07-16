/* eslint-disable func-names */
module.exports = function ( api ) {
    api.cache( true );

    var env = api.cache( () => process.env.NODE_ENV );
    var isProd = api.cache( () => process.env.NODE_ENV === "production" );

    var isProd = api.cache.invalidate( () => process.env.NODE_ENV === "production" );

    return {
        // Your Babel configuration options.
    };
};
