import React from "react";
import img1 from "../../../images/service1.png";
import img2 from "../../../images/service2 .png";
import img3 from "../../../images/service3.png";
import img4 from "../../../images/service4.png";
import img5 from "../../../images/service5.png";
import img6 from "../../../images/service6.png";
import Services from "./Services";

const Datas = () => {
  const datas = [
    {
      id: 1,
      name: "Brand Promotion",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: img1,
    },
    {
      id: 2,
      name: "Video Marketing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: img2,
    },
    {
      id: 3,
      name: "Site Analysis",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: img3,
    },
    {
      id: 4,
      name: "Social Media Marketing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: img4,
    },
    {
      id: 5,
      name: "SEO Optimization",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: img5,
    },
    {
      id: 6,
      name: "SMM Report",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: img6,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 items-center justify-center ">
      {datas.map((data) => (
        <Services key={data.id} data={data}></Services>
      ))}
    </div>
  );
};

export default Datas;
