import { useEffect, useState } from "react";
import "./Technologies2.css";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";

//import PortfolioList from "../portfolioList/PortfolioList";
//import "./portfolio.scss";
// import {
//   featuredPortfolio,
//   webPortfolio,
//   mobilePortfolio,
//   designPortfolio,
//   contentPortfolio,
// } from "../../data";

export default function Portfolio() {
  //const [selected, setSelected] = useState("featured");
  //const [data, setData] = useState([]);
  //   const list = [
  //     {
  //       id: "featured",
  //       title: "Featured",
  //     },
  //     {
  //       id: "web",
  //       title: "Web App",
  //     },
  //     {
  //       id: "mobile",
  //       title: "Mobile App",
  //     },
  //     {
  //       id: "educational",
  //       title: "Educational",
  //     },

  //   ];

  //   useEffect(() => {
  //     switch (selected) {
  //       case "featured":
  //         setData(featuredPortfolio);
  //         break;
  //       case "web":
  //         setData(webPortfolio);
  //         break;
  //       case "mobile":
  //         setData(mobilePortfolio);
  //         break;
  //       case "design":
  //         setData(designPortfolio);
  //         break;
  //       case "content":
  //         setData(contentPortfolio);
  //         break;
  //       default:
  //         setData(featuredPortfolio);
  //     }
  //   }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Technologies</h1>
      <p className="fplon">
        I've worked with a range of technologies in the web development world.
        From backend to end design.
      </p>
      <div style={{ display: "flex", width: "100%" }}>
        <div style={{ width: "30%", textAlign: "center" }}>
          <div>
            {/* <DiReact style={{ height: "15px", width: "15px" }} /> */}
          </div>

          <div className="titleStyle">FrontEnd React</div>
          <div className="skillsStyle">
            Experience with
            <br />
            <span style={{ width: "90px" }}>React</span>
            <img
              alt="Nothing"
              src="/assets/reactLogo.png"
              height="20px"
              width="20px"
              style={{ marginLeft: "20px" }}
            />
          </div>

          <div className="skillsStyle">
            <span style={{ width: "90px" }}>VUE</span>
            <img
              alt="Nothing"
              src="/assets/vueLogo.png"
              height="20px"
              width="20px"
              style={{ marginLeft: "20px" }}
            />
          </div>
          <div className="skillsStyle">
            <span style={{ width: "90px" }}>JavaScript</span>
            <img
              alt="Nothing"
              src="/assets/javascriptLogo.png"
              height="20px"
              width="20px"
              style={{ marginLeft: "20px" }}
            />
          </div>

          <div className="skillsStyle">
            <span style={{ width: "90px" }}>CSS</span>

            <img
              alt="Nothing"
              src="/assets/cssLogo.png"
              height="20px"
              width="20px"
              style={{ marginLeft: "20px" }}
            />
          </div>
        </div>
        <div style={{ width: "30%", textAlign: "center" }}>
          <div>{/* <DiFirebase /> */}</div>

          <div className="titleStyle">Back end </div>
          <div className="skillsStyle">
            <span style={{ width: "90px" }}>Node JS</span>

            <img
              alt="Nothing"
              src="/assets/nodejsLogo.png"
              height="20px"
              width="30px"
              style={{ marginLeft: "20px" }}
            />
          </div>
          <div className="skillsStyle">
            <span style={{ width: "90px" }}>Laravel</span>

            <img
              alt="Nothing"
              src="/assets/LaravelLogo.png"
              height="20px"
              width="30px"
              style={{ marginLeft: "20px" }}
            />
          </div>

          <div className="skillsStyle">
            <span style={{ width: "90px" }}>Python</span>

            <img
              alt="Nothing"
              src="/assets/pythonLogo.png"
              height="20px"
              width="30px"
              style={{ marginLeft: "20px" }}
            />
          </div>
        </div>
        <div
          //className="titleStyle"
          style={{ width: "30%", textAlign: "center" }}
        >
          <div>{/* <DiZend /> */}</div>
          <div className="titleStyle">Mobile</div>
          <div className="skillsStyle">
            Experience with
            <br />
            Flutter
          </div>
        </div>
      </div>
      {/* <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul> */}
      {/* <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div> */}
    </div>
  );
}
