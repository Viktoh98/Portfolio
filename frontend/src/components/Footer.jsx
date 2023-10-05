import React from "react";
import { useMyData } from "../context/UserContext";

const Footer = () => {
  const { myData } = useMyData();
  const socialLink = myData[0].sociallink_set;
  const contact = myData[0].contact_set[0];
  const iconName = [
    "fa-github",
    "fa-linkedin",
    "fa-facebook",
    "fa-google",
    "fa-x-twitter",
  ];
  const menuLinks = ["Skills", "About", "Projects", "Contact"];

  return (
    <footer id="Footer" className="mt-32">
      <div className="bg-primary grid md:grid-cols-2 justify-center md:justify-between items-center  text-white">
        <h4 className="font-semibold text-xl px-4 py-3 vs:px-0 text-center md:text-start vs:text-sm">
          Let's connect on social media
        </h4>
        <div className="flex items-center justify-around md:justify-end vs:gap-6 gap-10 md:pr-12 py-3">
          {socialLink.map((item, index) => (
            <div
              key={item.id}
              className="hover:-translate-y-1  hover:scale-105 "
            >
              <a href={`${item.Page_URL}`}>
                <i
                  className={`fab ${iconName[index]} text-[1.5rem] vs:text-[1.2rem] shadow-lg`}
                ></i>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className=" bg-slate-800">
        <div className="justify-center items-start gap-8 grid sm:grid-cols-2 lg:grid-cols-4 py-20 lg:justify-between font-['system-ui'] text-white bg-slate-800">
          <div className="grid justify-center items-center gap-4 px-1">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-3xl text-center font-semibold">About Us</h2>
              <hr className="w-full bg-primary mt-3 border-none max-w-[180px] pt-[0.15rem]"></hr>
            </div>
            <p className="text-[1rem] text-center">
              Transforming ideas into elegant, functional, and user-friendly
              applications. Turning visions into tangible products.
            </p>
          </div>
          <div className="grid justify-center items-center gap-4">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-3xl text-center font-semibold">Stack</h2>
              <hr className="w-full bg-primary mt-3 border-none max-w-[180px] pt-[0.15rem]"></hr>
            </div>
            <ul className="flex flex-col justify-around items-center gap-4">
              <li>Python</li>
              <li>React</li>
              <li>Django / DRF</li>
              <li>TailwindCSS</li>
            </ul>
          </div>
          <div className="grid justify-center items-center gap-4">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-3xl text-center font-semibold">Links</h2>
              <hr className="w-full bg-primary mt-3 border-none max-w-[180px] pt-[0.15rem]"></hr>
            </div>
            <ul className="flex flex-col justify-around items-center gap-4">
              {menuLinks.map((item, index) => {
                return (
                  <li className="flex hover:text-secondary" key={index}>
                    <a href={`#${item}`}>{item}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="grid justify-center items-center gap-4 max-w-[350px] mx-auto">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-3xl text-center font-semibold">Contact</h2>
              <hr className="w-full bg-primary mt-3 border-none max-w-[180px] pt-[0.15rem]"></hr>
            </div>
            <ul className="flex flex-col justify-around items-start w-fit gap-4 pl-4">
              <li>
                {" "}
                <i className="fa fa-home pr-3"></i> {contact.Address}
              </li>
              <li>
                {" "}
                <a href={`tel:${contact.Phone}`}>
                  <i className="fa fa-phone pr-3"></i> {contact.Phone}
                </a>
              </li>
              <li>
                {" "}
                <a href={`mailto:${contact.Email}`}>
                  <i className="fa fa-envelope pr-1"></i> {contact.Email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-primary text-white py-1 text-[0.9rem] flex justify-center items-center font-semibold">
        <p>&copy; Copyright 2023: All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
