import config from './default';
import pkgDetails from '../../package.json';


export default function defaultConfigure(store) {
  if (process.env.NODE_ENV === 'production') {
        // Enable error logging
    Raven.config(`${config.raven}`, {
      dataCallback: (data) => {
                // Pass the Redux app state along with error
        const extras = Object.assign({}, data.extra, { applicationState: store.getState() });
        return Object.assign({}, data, { extra: extras });
      },
      tags: { app: pkgDetails.name || 'Missing App Name' },
    }).install();
  }
}
