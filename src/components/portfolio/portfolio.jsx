import React, { useState, useEffect } from "react";
import { portfolioData } from "./portfolioData";
import './portfolio.css'

export const Portfolio = () =>  {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);



  useEffect(() => {
    setProjects(portfolioData);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolioData.map(p => ({
      ...p,
      filtered: p.category.includes(filter)
    }));
    setProjects(filtered);
  }, [filter]);
  return (
    <>
      <div className="portfolio__labels">
        <button 
        active={filter === "all"} 
        onClick={() => setFilter("all")}
        className={filter === "all" ? "active" : "unactive"}
        >
          All
        </button>
        <button
          href="/#"
          active={filter === "frontend"}
          onClick={() => setFilter("frontend")}
          className={filter === "frontend" ? "active" : "unactive"}
        >
          Frontend
        </button>
        <button
          href="/#"
          active={filter === "mobile"}
          onClick={() => setFilter("mobile")}
          className={filter === "mobile" ? "active" : "unactive"}
        >
          Mobile
        </button>
        <button
          href="/#"
          active={filter === "ux-ui"}
          onClick={() => setFilter("ux-ui")}
          className={filter === "ux-ui" ? "active" : "unactive"}
        >
          UX/UI
        </button>
        <button
          href="/#"
          active={filter === "others"}
          onClick={() => setFilter("others")}
          className={filter === "others" ? "active" : "unactive"}
        >
          Others
        </button>
      </div>
      <div className="portfolio__container">
        {projects.map(item =>
          item.filtered === true ? 
            <div key={item.id}>
                <div className='portfolio_img'>
                    <img className={item.cname} src={item.imgUrl} alt="" />
                </div>      
            </div>
          : '' 
        )}
      </div>
    </>
  );
}