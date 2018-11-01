export default () => {
  return(
  <div className="callout">
    <p>Carson Wentz: He will be playing a Panthers team this week, who are giving up over 20 fantasy points to opposing quarterbacks. Went has put up over 20 fancy points the last three weeks.</p>
    <a hef="">More advice</a>
    <style jsx>{`
      .callout {
        display: flex;
        flex-direction: column;
        text-align: center;
        background-color: #353535;
        color: white;
        padding-bottom: 50px;
        padding-top: 20px;

      }

      h2 {
        margin-bottom: 3px;
        font-size: 40px;
        margin-top: 5px;
        font-weight: 400;
      }

      p {
        display: flex;
        margin-top: 5px;
        font-size: 20px;
        align-self: center;
        max-width: 40%;
      }

      a {
        align-self: center;
        justify-conten: center;
        background-color: #b8b88f;
        border: 2px solid #b8b88f;
        color: #fff;
        border-radius: 100px;
        max-width: 150px;
        padding: 10px 30px;
        font-weight: 700;
        font-size: 20px;
        margin-top: 30px;
      }

    `}</style>
  </div>
  );
};
