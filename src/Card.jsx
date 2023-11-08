function Card({details}) {
    return (
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{details.cardName}</h5>
            <h6 className="card-price text-center">${details.price}<span className="period">/{details.mon}</span></h6> 
            <hr />
            <ul className="fas fa-check">
              {details.features.map((feature) =>{
                return (
                  <li
                  className={
                    feature.enable ? " " : "text-muted"
                  }>
                    {feature.infodetails}
                  </li> 
                );
              }
              )}
              </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    );    
} 
export default Card;

