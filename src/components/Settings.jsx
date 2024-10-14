// SettingsPage.js
import React from "react";

const SettingsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold">Notification Preferences</h2>
        <label className="flex items-center mt-4 text-lg">
          <input type="checkbox" className="mr-2" /> Receive email notifications for promotions
        </label>
        <label className="flex items-center mt-4 text-lg">
          <input type="checkbox" className="mr-2" /> Receive SMS alerts for order status
        </label>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold">Theme</h2>
        <select className="p-3 mt-4 border rounded-md text-lg w-4/12">
          <option>Light</option>
          <option>Dark</option>
          <option>System Default</option>
        </select>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold">Language</h2>
        <select className="p-3 mt-4 border rounded-md text-lg w-4/12">
          <option>English</option>
          <option>Spanish</option>
          <option>French</option>
        </select>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold">Password Management</h2>
        <button className="text-lg text-blue-600 mt-4">Change Password</button>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-red-600">Danger Zone</h2>
        <button className="text-lg text-red-600 mt-4">Delete Account</button>
      </div>
    </div>
  );
};

export default SettingsPage;
