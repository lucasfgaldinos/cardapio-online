import { Banner } from './components/banner';
import { Header } from './components/header';
import { Menu } from './components/menu';

export function App() {
  return (
    <>
      <Banner />

      <main className="relative -top-10 bg-white rounded-tl-3xl rounded-tr-3xl">
        <Header />

        <Menu />
      </main>
    </>
  );
}
