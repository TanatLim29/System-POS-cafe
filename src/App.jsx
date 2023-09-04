import Nav from './component/Nav'
import Timer from './component/Timer';
import ControlCard from './component/ControlCard';



const titleArray = ['Logistic','E-Commerce','Banking'];

const App = () => (
  <main className="relative">
    <Nav/>
    <section className='object-center py-20'>
        {titleArray.map(eachTitleArray => (
          <ControlCard title={eachTitleArray}/>
        ))}
    </section>
  </main>
);

export  default App;