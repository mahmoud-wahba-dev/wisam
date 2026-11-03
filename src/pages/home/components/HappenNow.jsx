import React from "react";
import { Link } from "react-router";

const HappenNow = () => {
  return (
    <section className="bg-secondary">
      <div className="container">
        <div className="flex items-center justify-between">
          <h2>يحدث الآن</h2>
          <Link className="btn btn-primary">اكتشف البرامج</Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>swiper</div>
          <div className="flex items-center gap-6">
            <div>
              <p>البرامج</p>

              <p>مقترحة لك</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappenNow;
