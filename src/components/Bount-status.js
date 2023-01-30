
import icon1 from './images/Icon1.png';
import icon2 from './images/Icon2.png';
import icon3 from './images/Icon3.png';



export default function Bounty () {
    return (
        <div className="home-bount-status">
                    <div className="row">
                        <div className="col-md-4 staus-container">
                            <img src={icon1} alt="" />
                            <h3>$62,000,000</h3>
                            <p>in bounties paid out</p>
                        </div>
                        <div className="col-md-4 staus-container">
                            <img src={icon2} alt="" />
                            <h3>$144,817,436</h3>
                            <p>in bounties available</p>
                        </div>
                        <div className="col-md-4 staus-container">
                            <img src={icon3} alt="" />
                            <h3>$25,000,000,000+</h3>
                            <p>in hack damage averted</p>
                        </div>
                    </div>
                </div>
    );
}