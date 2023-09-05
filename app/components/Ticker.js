'use client';

import Marquee, { Motion, randomIntFromInterval } from "react-marquee-slider";

const Ticker = ({ tickerItems }) => {

  return (
    <div className="marquee">
      <Marquee velocity={10} className="marquee-content">
        {tickerItems[0].acf.ticker_item.map((item, index) => (
          <div key={index} style={{ paddingLeft: 50 }} className="marquee-item">
            <div dangerouslySetInnerHTML={{__html: item.text}} className="marquee-single"></div> <span className="marquee-seperator">|</span><div dangerouslySetInnerHTML={{__html: item.text}} className="marquee-single"></div> <span className="marquee-seperator">|</span><div dangerouslySetInnerHTML={{__html: item.text}} className="marquee-single"></div> <span className="marquee-seperator">|</span><div dangerouslySetInnerHTML={{__html: item.text}} className="marquee-single"></div> <span className="marquee-seperator">|</span><div dangerouslySetInnerHTML={{__html: item.text}} className="marquee-single"></div> <span className="marquee-seperator">|</span><div dangerouslySetInnerHTML={{__html: item.text}} className="marquee-single"></div> <span className="marquee-seperator">|</span><div dangerouslySetInnerHTML={{__html: item.text}} className="marquee-single"></div> <span className="marquee-seperator">|</span><div dangerouslySetInnerHTML={{__html: item.text}} className="marquee-single"></div> <span className="marquee-seperator">|</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Ticker;