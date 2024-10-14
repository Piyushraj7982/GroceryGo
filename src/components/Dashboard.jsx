// DashboardPage.js
import React from "react";

const DashboardPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold">Recent Orders</h2>
        <ul className="list-disc ml-6 mt-4 text-lg">
          <li>Order #12345 - Delivered on Oct 10, 2024</li>
          <li>Order #12344 - Shipped on Oct 8, 2024</li>
          <li>Order #12343 - Placed on Oct 5, 2024</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold">Delivery Time Tracker</h2>
        <p className="mt-4 text-lg">Order #12346 is expected to arrive on Oct 15, 2024.</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold">Saved Items</h2>
        <ul className="list-disc ml-6 mt-4 text-lg">
          <li>Organic Apples - $3.99/lb</li>
          <li>Almond Milk - $2.49</li>
          <li>Broccoli Florets - $1.50</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold">Available Promotions</h2>
        <ul className="list-disc ml-6 mt-4 text-lg">
          <li>20% off on all vegetables - valid until Oct 20, 2024</li>
          <li>Buy 1 Get 1 Free on selected fruits - valid until Oct 18, 2024</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold">Order Statistics</h2>
        <p className="mt-4 text-lg">Total Orders: 34</p>
        <p className="mt-2 text-lg">Pending Orders: 2</p>
        <p className="mt-2 text-lg">Completed Orders: 32</p>
      </div>
    </div>
  );
};

export default DashboardPage;
