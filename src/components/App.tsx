import { FC, lazy } from 'react';

const MainPage = lazy(() => import('@/pages/MainPage'));

const App: FC = () => {
  return <MainPage />;
};

export default App;
