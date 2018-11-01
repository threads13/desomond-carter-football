export default () => {
  return(
  <div className="infoColumns">
      <div>Left column</div>
      <div>Find those nuggets of information</div>
    <style jsx>{`
        .infoColumns {
          display: flex;
          border: 1px solid green;
          justify-content: space-between;
          padding-left: 200px;
          padding-right: 200px;
        }
      `}
    </style>
  </div>
  );
};
