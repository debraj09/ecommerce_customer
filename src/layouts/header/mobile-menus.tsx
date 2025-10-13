"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { mobile_menus } from "@/data/menu-data";

const MobileMenus = () => {
  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  return (
    <ul>
      {mobile_menus.map((menu) => (
        <li
          key={menu.id}
          className={`${menu.has_dropdown ? "has-dropdown" : ""} ${
            menu.home_menus ? "has-homemenu" : ""
          }`}
        >
          <Link href={menu.link}>{menu.name}</Link>
          {menu.home_menus ? (
            <>
              <ul
                className="sub-menu home-menu-style"
                style={{
                  display: navTitle === menu.name ? "block" : "none",
                }}
              >
                {menu.home_menus.map((home_menu, i) => (
                  <li key={i}>
                    <Link href={home_menu.link}>
                      <Image
                        src={home_menu.img}
                        alt="home-img"
                        width={208}
                        height={219}
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                      {home_menu.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <a
                className={`mean-expand ${
                  navTitle === menu.name ? "mean-clicked" : ""
                }`}
                onClick={() => openMobileMenu(menu.name)}
                style={{ fontSize: "18px", cursor: "pointer" }}
              >
                <i className="fal fa-plus"></i>
              </a>
            </>
          ) : menu.dropdown_menus ? (
            <>
              <ul
                className="sub-menu"
                style={{
                  display: navTitle === menu.name ? "block" : "none",
                }}
              >
                {menu.dropdown_menus.map((dropdown_menu, i) => (
                  <li key={i}>
                    <Link href={dropdown_menu.link}>{dropdown_menu.title}</Link>
                  </li>
                ))}
              </ul>
              <a
                className={`mean-expand ${
                  navTitle === menu.name ? "mean-clicked" : ""
                }`}
                onClick={() => openMobileMenu(menu.name)}
                style={{ fontSize: "18px", cursor: "pointer" }}
              >
                <i className="fal fa-plus"></i>
              </a>
            </>
          ) : null}
        </li>
      ))}
    </ul>
  );
};

export default MobileMenus;
