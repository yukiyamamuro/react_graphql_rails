import React from 'react';
import './App.css';
import graphql from 'babel-plugin-relay/macro';
import {
  RelayEnvironmentProvider,
  loadQuery,
  usePreloadedQuery,
} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';
const { Suspense } = React;

const RepositoryFullNameQuery = graphql`
  query AppRepositoryFullNameQuery {
    users(last: 2){
      nodes{
        lastName
        firstName
      }
    }
  }
`;

const preloadedQuery = loadQuery(
  RelayEnvironment,
  RepositoryFullNameQuery,
  {},
);

function App(props: any) {
  const data: any = usePreloadedQuery(RepositoryFullNameQuery, props.preloadedQuery);

  return (
    <div className="App">
      <header className="App-header">
        <h2>ユーザー１</h2>
        <p>{data.users.nodes[0].firstName}</p>
        <p>{data.users.nodes[0].lastName}</p>
        <h2>ユーザー２</h2>
        <p>{data.users.nodes[1].firstName}</p>
        <p>{data.users.nodes[1].lastName}</p>
      </header>
    </div>
  );
}

function AppRoot(props: any) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <App preloadedQuery={preloadedQuery} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;