export default () => {
  return(
    <div className="testimonials">
      <h2>Dummy text</h2>
      {/* each testimonials will have it's own - will do some sort of map and show and hide */}
      <div className="testimonialText">
        <h6>Dummy text</h6>
        <p>Dummy text</p>
        <p className="testMap">Jacob is a fantastic coach who is able to dissect complicated problems into manageable solutions. He is always available to support and answer any questions. Ultimately, my win-rate has increased drastically since working with Jacob.</p>
      </div>
      <style jsx>{`
        .testimonials {
          text-align: center;
          margin-left: 200px;
          margin-right: 200px;
          border: 1px solid blue;
        }

        .testMap {
          display: flex;
          align-content: center;
          text-align: center;
          max-width: 40%;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};
