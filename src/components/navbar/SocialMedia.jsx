/* eslint-disable no-unused-vars */
import React from "react";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

import { TiSocialFacebookCircular } from "react-icons/ti";

export const SocialMedia = () => {
  const socialLink = [
    {
      id: 1,
      logo: <FaYoutube size={20} color="red" />,
      link: "https://www.youtube.com/@info.bdedujob",
    },

    {
      id: 2,
      logo: <FaFacebook size={20} color="blue" />,
      link: "https://www.facebook.com/info.bdedujob2.0",
    },

    {
      id: 3,
      logo: <AiFillTikTok size={20} />,
      link: "https://www.tiktok.com/@info.bdedujob",
    },

    {
      id: 4,
      logo: <FaDiscord size={20} />,
      link: "https://discord.gg/Pb2fs7Huc3",
    },

    {
      id: 5,
      logo: <TiSocialFacebookCircular size={20} />,
      link: "https://www.facebook.com/groups/info.bdedujob",
    },
  ];
  return (
    <div>
      <ul className="flex gap-2 flex-col items-center">
        {socialLink.map(({ id, logo, link }) => (
          <li
            key={id}
            className=" hover:bg-gray-200 duration-500 px-2 py-1 rounded-md border  cursor-pointer "
          >
            <a
              className="hover:bg-slate-100 duration-300 rounded-md"
              href={link}
            >
              {logo}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
