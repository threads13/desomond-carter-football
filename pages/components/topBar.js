import Header from './header';
import Navbar from './navbar';

export default () => {
  return(
    <div className="topBar">
      <Header />
      <Navbar />
      <style jsx>{`
        .topBar {
          display: flex;
          flex-basis: 100%;
          background-color: #f5f5f5;
        }
      `}</style>
    </div>
  );
};
