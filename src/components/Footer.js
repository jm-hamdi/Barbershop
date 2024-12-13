import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const sections = [
  {
    title: "Hours",
    items: [
      "Monday - Thursday : 9am - 7pm",
      "Friday - Saturday : 9am - 5pm",
      "Sunday : Closed",
    ],
  },
  {
    title: "Policy",
    items: [
      "Privacy Policy",
      "Appointment Cancelation Policy",
      "Refund Policy",
    ],
  },
  {
    title: "Company",
    items: ["About", "Blog", "Jobs"],
  },
];

const socialMedia = [
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/",
  },
];

const Footer = () => {
  return (
    <div className="w-full mt-12 bg-slate-900 text-gray-300 py-1 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 border-b-2 border-gray-600 py-4 gap-4">
        {" "}
        {/* Added gap-4 */}
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className="font-bold uppercase pt-1">{section.title}</h6>
            <ul>
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className={`py-.5 text-gray-500 ${
                    section.title === "Hours"
                      ? ""
                      : "hover:text-white cursor-pointer"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
        {/* Fourth Column: Social Media */}
        <div>
          <h6 className="font-bold uppercase pt-1">Social Media</h6>
          <div className="flex flex-col mt-2 space-y-2">
            {socialMedia.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-500 hover:text-white"
              >
                <item.icon className="text-gray-500 text-2xl" />
                <span className="text-gray-500 hover:text-white">
                  {item.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Centered footer text */}
      <div className="flex justify-center py-2 text-center text-gray-500">
        <p>2024 Jaouad mhamdi</p>
      </div>
    </div>
  );
};

export default Footer;
