import React from "react";
import UserInput from "./UserInput";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center gap-8 min-h-screen w-full max-w-screen-lg mx-auto">
      <div className="border rounded-lg p-6">
        {/* for user 1  */}
        <UserInput />
      </div>

      <div className="border rounded-lg p-6">
        {/* for user 2  */}
        <UserInput />
      </div>
    </div>
  );
};

export default HomePage;
