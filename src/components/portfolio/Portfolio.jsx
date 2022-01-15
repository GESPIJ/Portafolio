import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [selectedProject, setselectedProject] = useState(null);
  const [showingProject, setshowingProject] = useState(false);
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    // {
    //   id: "design",
    //   title: "Design",
    // },
    // {
    //   id: "content",
    //   title: "Content",
    // },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            //setselectedProject={setselectedProject}
            setshowingProject={setshowingProject}
          />
        ))}
      </ul>
      <div className="container">
        {!showingProject ? (
          data.map((d) => (
            <div className="item">
              <img
                src={d.img}
                onClick={
                  d.link
                    ? () => {
                        window.location.href = d.link;
                      }
                    : () => {
                        //setselectedProject(true);
                        setselectedProject(d);
                        setshowingProject(true);
                      }
                }
                alt=""
              />
              <h3>{d.title}</h3>
            </div>
          ))
        ) : (
          <div>
            <div style={{ width: "100%", height: "100%" }}>
              <h3>{selectedProject.titulo}</h3>
              <div>
                <img
                  width="60%"
                  height="60%"
                  alt="Imagen"
                  src={selectedProject.img}
                />
                <div style={{ width: "40%", height: "40%" }}>
                  <span>{selectedProject.descripcion}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
