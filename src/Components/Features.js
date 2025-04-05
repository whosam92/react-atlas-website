import React from "react";

const Features = () => {
  const features = [
    {
      img: "/assets/img/smart-protect-1.jpg",
      title: "Anti-spam",
      description: "Lorem ipsum dolor sit amet porro his no his deleniti",
    },
    {
      img: "/assets/img/smart-protect-2.jpg",
      title: "Phishing Detect",
      description: "Ne error antiopam usu. Sed vocen concludaturque ea",
    },
    {
      img: "/assets/img/smart-protect-3.jpg",
      title: "Smart Scan",
      description: "Et usu ocurreret elaboraret doctus prodesse assueverit.",
    },
  ];

  return (
    <div className="container my-5 py-2">
      <h2 className="text-center font-weight-bold my-5">
        Smartest protection for your site
      </h2>
      <div className="row">
        {features.map((feature, index) => (
          <div key={index} className="col-md-4 text-center">
            <img src={feature.img} alt={feature.title} className="mx-auto" />
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
