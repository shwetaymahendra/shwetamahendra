import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter , FaYoutube} from "react-icons/fa";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/mahendrashweta",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Instagram <FaInstagram size={30} />
        </>
      ),
      href: "https://instagram.com/shwetaymahendra?igshid=MzRlODBiNWFlZA==",
    },
    {
      id: 3,
      child: (
        <>
          Facebook <FaFacebook size={30} />
        </>
      ),
      href: "https://www.facebook.com/profile.php?id=100092257607508&mibextid=LQQJ4d",
    },
    {
      id: 4,
      child: (
        <>
          Facebook <FaYoutube size={30} />
        </>
      ),
      href: "https://www.youtube.com/@Shwetaymahendra",
    },
    {
      id: 5,
      child: (
        <>
          Twitter <FaTwitter size={30} />
        </>
      ),
      href: "https://twitter.com/ShwetaYMahendra?t=Ey4v-zJrjKl9r-JYhbTh2g&s=08",
      style: "rounded-br-md",
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 " +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
