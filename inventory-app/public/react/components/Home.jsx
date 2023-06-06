import React from "react";

const Home = ({setAddItems}) => {
  return (
    <>
      <div className="home">
        <div className="card text-white bg-dark border-0">
          <img src={require("../../assets/inventory-app-home-img.png")} className="card-img" alt="background" style={{ height: "575px" }}/>
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
                <h5 className="card-title display-3 fw-bolder mb-3">Inventory Galore</h5>
                <p className="card-text lead fs-4">
                Whatever item you need, Banana Bunch has it
                </p>
                <p className="card-text lead fs-4">
                The prices are totally 🍌s !
                </p>
				<button className="btn btn-outline-light fw-bolder fs-5" onClick={() => setAddItems(true)}>Add an Item</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
