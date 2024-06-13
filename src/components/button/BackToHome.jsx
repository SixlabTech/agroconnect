import React from "react";
import { Link } from "react-router-dom";

export default function BackToHome() {

    return (
      <div>
        <Link to="/" className="border rounded-full bg-green text-white p-3">Return to Menu</Link>
      </div>
    );
  }