"use client";
import Link from "next/link";
import "./Hero.scss";
import { ConfigProvider, Button } from "antd";
import theme from "@/theme/themeConfig";
import Navbar from "../Navbar/Page";

const Hero = () => {
  return (
    <ConfigProvider theme={theme}>
      <Navbar />
      <div className="hero">
        <div className="hero-line"> Store Your DSA Questions at 1 place. </div>
        <Link href="/dsa" className="font-bold">
          <Button
            defaultBg="#000"
            defaultColor="#d5b263"
            type="primary"
            size={"large"}
          >
            Get Started
          </Button>
        </Link>
      </div>
    </ConfigProvider>
  );
};

export default Hero;
