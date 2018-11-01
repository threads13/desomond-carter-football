export default () => {
  return(
    <div className="analyzeResults">
      <div className="results">
        <h2>Dummy text</h2>
        <p>Dummy text</p>
      </div>
      <div className="resultsImage">Image component</div>
      <style jsx>{`
        .analyzeResults {
          display: flex;
          padding-bottom: 100px;
          padding-top: 40px;
        }

        .results {
          margin-left: 15%;
          flex-basis: 50%;
        }

        .resultsImage {
          margin-right: 15%;
          flex-basis: 50%;
        }
      `}</style>
    </div>
  );
};
