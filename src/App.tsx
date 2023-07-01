import { Suspense, lazy } from 'react';

const Header = lazy(() => import('components/common/Header'));

const App = () => {
  return (
    <>
      <Suspense fallback="loading...">
        <Header />
      </Suspense>
      <h1>Innoloft - Dashboard</h1>
    </>
  );
}

export default App;
