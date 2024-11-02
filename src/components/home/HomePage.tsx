/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import UserInput from "./UserInput";

const HomePage = () => {
  const [firstPlayerStat, setFirstPlayerStat] = useState<any>();
  const [secondPlayerState, setSecondPlayerStat] = useState<any>();
  const [playerSwap, setPlayerSwap] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-center gap-8 min-h-screen w-full max-w-screen-lg mx-auto">
      <div className="border rounded-lg p-6">
        {/* for user 1  */}
        <UserInput setPlayerSwap={setPlayerSwap} playerSwap={playerSwap} />
      </div>

      <div className="border rounded-lg p-6">
        {/* for user 2  */}
        <UserInput setPlayerSwap={setPlayerSwap} playerSwap={playerSwap} />
      </div>
    </div>
  );
};

export default HomePage;
