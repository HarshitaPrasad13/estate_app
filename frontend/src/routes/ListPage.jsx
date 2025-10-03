import React from "react";
import { listData } from "../lib/dummydata";
import "./ListPage.scss";
import FilterComp from "../components/FilterComp";
import Card from "../components/Card";
import Map from "../components/Map";

const ListPage = () => {
  const data = listData;
  return (
    <div className="listPage">
      <div className="list-container">
        <div className="wrapper">
          <FilterComp/>
          {data.map((item)=>(
            <Card key={item.id} item={item}/>
          ))}
        </div>
      </div>
      <div className="map-container"><Map items={data}/></div>
    </div>
  );
};

export default ListPage;
