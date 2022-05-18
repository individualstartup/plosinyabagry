import React, { useEffect, useRef, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import getConfig from 'next/config';
import { AxiosResponse } from 'axios';
import { Toast } from 'primereact/toast';
import { useRouter } from 'next/router';
import { micrositeApiGenerator, MicrositeApiType } from './micrositeApi.v1';

const resolveQueryParams = (params: any[]) => {
  const retObject = {};
  params.forEach((item) => {
    Object.keys(item).forEach((key) => {
      retObject[key] = item[key];
    });
  });

  return retObject;
};

interface Error {
  message: string;
  name: string;
  stack: string;
  config: {
    url: string;
    method: string;
    data: string;
    headers: { [key: string]: string };
  };
}

interface Callbacks {
  onError?: (error: Error) => void;
  onConflict?: (conflictInfo: any) => void;
}

interface ApiContextType extends MicrositeApiType {}

export const ApiContext = React.createContext<ApiContextType>(undefined);

export const Provider: React.FC = ({ children }) => {
  const { getIdTokenClaims } = useAuth0();
  const { publicRuntimeConfig } = getConfig();
  const frontendservicepublicendpoint = publicRuntimeConfig.FRONTENDSERVICE_PUBLIC_ENDPOINT;
  const frontendbehost = publicRuntimeConfig.FRONTEND_BE_HOST;
  /*const { i18n } = useTranslation('common');*/
  const toastRef = useRef(null);
  const [loading, setLoading] = useState([]);
  const router = useRouter();

  const handleError = (error: Error, payload?: any) => {
    console.log(`error: ${JSON.stringify(error)}`);
    toastRef.current.show([
      {
        severity: 'error',
        life: 15000,
        sticky: true,
        closable: true,
        content: (
          <div className="toast-wrapper">
            <h3>ERROR</h3>
            <div>{error.message}</div>
            <div>
              {error.config.method} - {error.config.url}
            </div>
            <div>Payload</div>
            <div>
              <pre className="long-error-pre">{JSON.stringify(payload, null, 2)}</pre>
            </div>
            <pre>{error.stack}</pre>
          </div>
        ),
      },
    ]);
  };

  const isSuccess = (response: AxiosResponse) => {
    return response.status >= 200 && response.status < 300 && response.data.errorType === null;
  };

  const isConflict = (response: AxiosResponse) => {
    if (response.status >= 200 && response.status < 300 && response.data.errorType === 'CONFLICT') {
      return true;
    }
    return false;
  };

  const frontendService = micrositeApiGenerator(
    `${frontendbehost}${frontendservicepublicendpoint}`,
    setLoading,
    loading,
    { language: 'cs' },
    handleError,
    getIdTokenClaims,
    router,
  );

  useEffect(() => {
    console.log('Creating api');
  }, []);

  return (
    <ApiContext.Provider value={{ ...frontendService }}>
      <>
        {children}
        <Toast ref={toastRef} position={'bottom-left'} />{' '}
      </>
    </ApiContext.Provider>
  );
};
