import React from 'react';

export default () => {
  return(
    <div className="header">
      <nav>Desmond Carter Sports</nav>
      <style jsx>{`
        .header {
          display: flex;
          flex-basis: 70%;
          font-size: 25px;
          font-weight: 300;
          margin-left: 10px;
          margin-top: 5px;
        }

        nav {
          padding-left: 4px;
          padding-top: 4px;
        }
      `}</style>
    </div>
  );
}
