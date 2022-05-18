const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  publicRuntimeConfig: {
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN || 'individualstartup.eu.auth0.com',
    AUTH0_CLIEND_ID: process.env.AUTH0_CLIENDID || 'sJtzCy1wU5fQHbcXVtH2MitoQQ9Idoob',
    AUTH0_REDIRECT_URI: process.env.AUTH0_REDIRECT_URI || 'http://localhost:3000/auth/callback',
    FRONTEND_BE_HOST: process.env.FRONTEND_BE_HOST || 'https://pujcovna-be-pujcovna.os.shipvio.com',
    FRONT_URL: process.env.FRONT_URL || 'http://localhost:3000',
    FRONTENDSERVICE_PUBLIC_ENDPOINT: process.env.FRONTENDSERVICE_PUBLIC_ENDPOINT || '/services/frontend-service',
    CDN_HOST: process.env.CDN_HOST || 'https://aqohqiyflq.cloudimg.io/www.officeontheroad.cz',
  },
};

module.exports = withPlugins([withImages, { cssModules: true, productionBrowserSourceMaps: true }], nextConfig);
