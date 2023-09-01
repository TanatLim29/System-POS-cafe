import Nav from './component/Nav'
import Timer from './component/Timer';

const App = () => (
  <main className="relative">
    <Nav/>
    <section className='xl:padding-l wide:padding-r padding-b'>
      <Timer/>
    </section>
  </main>
);

export  default App;