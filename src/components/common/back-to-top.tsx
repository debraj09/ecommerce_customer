"use client";
import React, { useEffect } from "react";

const BackToTop = () => {
  useEffect(() => {
    const result = document.querySelector(".scroll-top") as HTMLElement;
    if (result) {
      document.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
          result.classList.add("open");
        } else {
          result.classList.remove("open");
        }
      });
      result.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  }, []);
  return (
    <button className="scroll-top scroll-to-target" data-target="html">
      <i className="icon-chevrons-up"></i>
    </button>
  );
};

export default BackToTop;
