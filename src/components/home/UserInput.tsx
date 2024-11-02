/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const UserInput = () => {
  const [wordName, setWordName] = useState<string>("");
  const [correctWord, setCorrectWord] = useState<boolean>(false);
  const [currentScore, setCurrentScore] = useState<number>(120);
  const [wordList, setWordList] = useState<any>([]);
  const [scoreList, setScoreList] = useState<any>([]);
  const [counter, setCounter] = React.useState(10);
  const [items, setItems] = useState([]);

  React.useEffect(() => {
    const timer: any =
      counter > 1 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  //   useEffect(() => {
  //     if (correctWord) {
  //       if (items) {
  //         const items = JSON.parse(localStorage.getItem("items") as any);
  //         console.log("items", items);

  //         localStorage.setItem("items", JSON.stringify(wordName));

  //         setItems(items);
  //       } else {
  //         setItems([]);
  //         localStorage.setItem("items", JSON.stringify(items) as any);
  //       }
  //     }
  //   }, [correctWord]);

  const correctWordActions = () => {
    setCurrentScore(currentScore - counter - (wordName.length - 4));
    setCounter(0);
    setCorrectWord(true);

    setWordList([...wordList, wordName]);
    setScoreList([...scoreList, counter - (wordName.length - 4)]);
    // set to localstorage
  };

  console.log(wordList);

  const incorrectWordActions = () => {
    setCorrectWord(false);
    setCurrentScore(currentScore + 2);
  };

  // validate the word here
  const handleSubmit = async () => {
    console.log(wordName);

    // checks the api validation, if correct, save to localstorage
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${wordName}`
      );
      console.log(response.data);
      if (response?.data?.[0].word === wordName) {
        correctWordActions();
      } else {
        incorrectWordActions();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setWordName("");
    }

    console.log(currentScore);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between ">
        <div>Score: {currentScore} </div>
        <div>Timer: {counter} </div>
      </div>
      <div>
        <input
          type="text"
          value={wordName}
          onChange={(e) => setWordName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
        />
      </div>
      <div>
        {!correctWord && wordName && (
          <div> {wordName} is not a correct word</div>
        )}
      </div>
      <div>
        {/* word history  */}
        {wordList.map((word: string, index: number) => (
          <div key={index}>
            <div className="border p-2 bg-white text-slate-500 text-xl font-semibold flex justify-between items-center">
              <div> {wordName ? "PASS" : word} </div>
              <div>{correctWord ? scoreList[index] : -2}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserInput;