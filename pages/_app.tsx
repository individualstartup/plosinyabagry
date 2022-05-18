import utc from 'dayjs/plugin/utc';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import timezone from 'dayjs/plugin/timezone';
import weekOfYear from 'dayjs/plugin/weekOfYear';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '../styles/styles.scss';
import 'react-image-gallery/styles/scss/image-gallery.scss'


import dayjs from 'dayjs';
import qs from 'qs';
import axios from 'axios';
import { ViewportProvider } from 'use-viewport';
import getConfig from 'next/config';
import { Provider } from '../api/api';

dayjs.extend(utc);
dayjs.extend(isSameOrBefore);
dayjs.extend(customParseFormat);
dayjs.extend(timezone);
dayjs.extend(weekOfYear);
dayjs.tz.setDefault('Europe/Prague');

axios.defaults.paramsSerializer = function (params) {
  return qs.stringify(params, { indices: false }); // param=value1&param=value2
};

const MyApp = ({ Component, pageProps }) => {
  const { publicRuntimeConfig } = getConfig();

  return (
    <Provider>
      <ViewportProvider>
        <Component {...pageProps} />
      </ViewportProvider>
    </Provider>
  );
};

export default MyApp;
