import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot, useRecoilValue } from 'recoil';

import { currentUser } from './state';
import { ErrorBoundary } from './util';

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <ErrorBoundary>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Hello />
        </React.Suspense>
      </ErrorBoundary>
    </RecoilRoot>
  );
}

function Hello() {
    const user = useRecoilValue(currentUser);
    return <h1>Hello React {user}!</h1>;
}

export {
};


ReactDOM.render(<App />, document.getElementById('app-root-container'));