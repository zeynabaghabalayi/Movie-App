//module.exports = {
  //reactStrictMode: true,
  //images: {
   // domains: ['image.tmdb.org']
  //}
//}


//const nextConfig = {
  //reactStrictMode: true,
 // swcMinify: true,
 // images: {
   // domains: ['image.tmdb.org'],
 // },
//};

//module.exports = nextConfig;

const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');


module.exports = (phase) => {
  // Set The Phase
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD;
  console.log(`isDev: ${isDev}  isProd: ${isProd}`);


  const reactStrictMode = true;


  // Unconfigured Hosts + Remote Patterns
  // Images
  const images = {
    domains: ['image.tmdb.org']
   }


  // Env
  const env = {
    SERVER_NAME: (() => {
      if (isDev) return 'http://localhost:3000/';
      if (isProd) return 'https://movie-app-mauve-zeta.vercel.app//';
    })(),
    // API KEY
    // GOOGLE ANALYTICS ID
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  }


  // Config returns object
  return {
    reactStrictMode,
    images,
    env,
  }
}