import React from "react";

const Cryptolist = ({ coinData }) => {

  return (
    <>
      <div className="parent">
        {coinData.map((item) => {
          return (
            <div key={item.id} className="card">
                <p>
                <img src={item.image} />
              </p>
              <p>{item.title}</p>
              <p>{item.id}</p>
            </div>
          ); 
        })}
      </div>
    </>
  );
};

export default Cryptolist;
