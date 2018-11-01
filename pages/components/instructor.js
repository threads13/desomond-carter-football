export default () => {
  return(
    <div className="instructor">
      <h3>Meet the expert</h3>
      <div className="bio">
        <div className="bioPicture">Here there will be an image</div>
        <div className="bioText">
          <p className="instructorTitle">Professoinal Poker Coach</p>
          <h5></h5>
          <p></p>
        </div>
        </div>
      <style jsx>{`

        h3 {
          text-align: center;
        }

        .instructor {
          display: flex;
          flex-direction: column;
          border: 1px solid red;
          margin-left: 200px;
          margin-right: 200px;
        }

        .bio {
          display: flex;
        }

        .bioPicture {
          display: flex;
          flex-basis: 50%;
        }

        .bioText {
          display: flex;
          flex-basis: 50%;
          flex-direction: column;
        }

        .instructorTitle {
          font-size: 12px;
        }

      `}</style>
    </div>
  );
};
