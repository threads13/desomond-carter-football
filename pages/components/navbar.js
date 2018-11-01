export default () => {
  return(
    <div className="navbar">
      <ul>
        <li>Home</li>
        {/* will want dashboard and user go both be conditonal based on log in */}
        <li>Rankings</li>
        <li>Articles</li>
        <li>Contact</li>
      </ul>
      <style jsx>{`
        .navbar {
          display: flex;
          flex-basis: 30%;
          justify-content: flex-end;
        }

        ul {
          display: flex;
          list-style: none;
        }

        li {
          padding-right: 50px;
          font-weight: 300;
          font-size: 12px;
        }
      `}</style>
    </div>
  );
};
