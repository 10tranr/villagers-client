/**
* Application Configuration
* Notes:
* Raven - Get your configuration details from the "Client Keys (DSN)" section in the
*         Sentry settings screen. Contact the sentry team at sentry@pnnl.gov to get
*         further details.
**/

const productionConfig = {
  opwhseApi: 'https://api.pnl.gov/operations/v2',
  raven: 'http://ae10897b8cb14332b121bbbd824fe261@sentrydev01.pnl.gov:9000/1',
};

const developmentConfig = {
  opwhseApi: 'https://api.pnl.gov/operations/v2',
  raven: 'http://ae10897b8cb14332b121bbbd824fe261@sentrydev01.pnl.gov:9000/1',
};

const testConfig = {
  opwhseApi: 'https://api.pnl.gov/operations/v2',
  raven: 'http://ae10897b8cb14332b121bbbd824fe261@sentrydev01.pnl.gov:9000/1',
};

function config() {
  if (typeof window !== 'undefined') {
      // console.log('Application is running in the context of a browser...');
    if (window.location.hostname === 'projectx.pnl.gov') {
      // Application is running in production
      // console.log('Application is running in production');
      return productionConfig;
    } else if (window.location.hostname === 'projectxtest.pnl.gov') {
      // Application is running in test
      // console.log('Application is running in test');
      return testConfig;
    }
    // Application is running in development/localhost
    // console.log('Application is running in development/localhost');
    return developmentConfig;
  }
  // Application is not running in the browser
  // TODO: Could check Node ENV here. Needs testing.
  // console.log('Application is falling back to development context...');
  return developmentConfig;
}

export default config();
