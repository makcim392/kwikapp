/* eslint-disable func-names */
// module.exports = function ( api ) {


//     var env = api.cache( () => process.env.NODE_ENV );
//     var isProd = api.cache( () => process.env.NODE_ENV === "production" );

//     var isProd = api.cache.invalidate( () => process.env.NODE_ENV === "production" );

//     return {
//         // Your Babel configuration options.
//     };
// };

module.exports = {
    presets: [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
};