"use client";

import * as React from "react";

export const Button = () => {
  return <button className="text-xl px-4 py-2 bg-red-600 text-white rounded-full m-4 hover:bg-red-500 hover:ring-8 ring-indigo-900" onClick={() => alert("boop")}>Boop</button>;
};
