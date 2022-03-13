import React from 'react';
import {
  RelayEnvironmentProvider,
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';
import { RoutesManager } from './Routes';
const { Suspense } = React;


function App(props: any) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <RoutesManager />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default App;