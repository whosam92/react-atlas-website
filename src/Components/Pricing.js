import React from "react";

const Pricing = () => {
  const pricingPlans = [
    {
      id: 1,
      name: "STARTUP",
      price: "0",
      features: [
        "Up to 5 Documents",
        "Up to 3 Reviews",
        "5 team Members",
        "Limited Support",
      ],
      btnClass: "cta-ghost",
    },
    {
      id: 2,
      name: "PREMIUM",
      price: "10",
      features: [
        "Up to 15 Documents",
        "Up to 10 Reviews",
        "25 team Members",
        "Limited Support",
      ],
      btnClass: "cta-green",
    },
    {
      id: 3,
      name: "PROFESSIONAL",
      price: "30",
      features: [
        "Unlimited Documents",
        "Unlimited Reviews",
        "Unlimited Members",
        "Unlimited Support",
      ],
      btnClass: "cta-ghost",
    },
  ];

  return (
    <div className="container my-5 py-2" id="price-table">
      <h2 className="text-center font-weight-bold d-block mb-3">
        Check our pricing
      </h2>
      <div className="row">
        {pricingPlans.map((plan, index) => (
          <div
            key={plan.id}
            data-aos={
              index === 1 ? "fade-up" : index === 0 ? "fade-right" : "fade-left"
            }
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-once="true"
            className={`col-md-4 text-center py-4 mt-5 ${
              index === 1 ? "rounded" : ""
            }`}
            id={index === 1 ? "price-table__premium" : ""}
          >
            <h4 className="my-4">{plan.name}</h4>
            <p className="font-weight-bold">
              $ <span className="display-2 font-weight-bold">{plan.price}</span>{" "}
              / MO.
            </p>
            <ul className="list-unstyled">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <a
              href="#"
              className={`btn my-4 font-weight-bold atlas-cta ${plan.btnClass}`}
            >
              Get Free
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
