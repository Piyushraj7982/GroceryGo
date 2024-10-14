// ProfilePage.js
import React from "react";

const ProfilePage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Profile</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold">Personal Information</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-4/12 p-3 mt-2 border rounded-md focus:outline-none text-lg"
              value="Piyush kumar"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              className="w-4/12 p-3 mt-2 border rounded-md focus:outline-none text-lg"
              value="prajsm2@gmail.com"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              className="w-4/12 p-3 mt-2 border rounded-md focus:outline-none text-lg"
              value="+91 92356 78901"
            />
          </div>
        </form>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold">Profile Picture</h2>
        <button className="text-lg text-blue-600 mt-4">Change Profile Picture</button>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold">Delivery Address</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">Address Line 1</label>
            <input
              type="text"
              className="w-4/12 p-3 mt-2 border rounded-md focus:outline-none text-lg"
              value="D-11, Akurli Road-4"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">City</label>
            <input
              type="text"
              className="w-4/12 p-3 mt-2 border rounded-md focus:outline-none text-lg"
              value="Mumbai"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Postal Code</label>
            <input
              type="text"
              className="w-4/12 p-3 mt-2 border rounded-md focus:outline-none text-lg"
              value="400101"
            />
          </div>
        </form>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold">Subscription Preferences</h2>
        <label className="flex items-center mt-4 text-lg">
          <input type="checkbox" className="mr-2" /> Subscribe to weekly promotions
        </label>
      </div>
    </div>
  );
};

export default ProfilePage;
