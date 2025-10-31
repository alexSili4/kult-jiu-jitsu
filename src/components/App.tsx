import { FC, lazy } from 'react';
import Header from '@CommonComponents/Header';
// import Footer from '@CommonComponents/Footer';

const MainPage = lazy(() => import('@/pages/MainPage'));

const App: FC = () => {
  return (
    <>
      <Header />
      <main>
        <MainPage />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default App;
