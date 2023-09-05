import Nav from './component/Nav'
import Timer from './component/Timer';
import ControlCard from './component/ControlCard';
import Search from './component/Search';
import ExampStarwar from './component/ExampStarwar';

const titleArray = ['Logistic','E-Commerce','Banking'];

const App = () => (
  <main className="relative">
    <Nav />
    <section className='object-center py-20'>
      <Search/>
    </section>
    <section>
      <ExampStarwar/>
    </section>
    <section className='object-center'>
        {titleArray.map(eachTitleArray => (
          <ControlCard title={eachTitleArray}/>
        ))}
    </section>
    
  </main>
);

export  default App;