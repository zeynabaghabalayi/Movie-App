import Link from "next/link";
import Meta from "../components/Meta";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa';

const contact = () => {
  return (
    <div className="text-center mt-130">
      <Meta title="Contact Us" />
      <h1 className="text-4xl font-bold pt-20">Follow us here:</h1>

      <div className="flex w-full justify-center mt-10">



      <div className="mx-5 cursor-pointer">
  <Link href="https://www.instagram.com/" passHref>
    <FaInstagram className="text-3xl" />
  </Link>
</div>

<div className="mx-5 cursor-pointer">
  <Link href="https://www.linkedin.com/" passHref className="mx-20">
    <FaLinkedin className="text-3xl" />
  </Link>
</div>

<div className="mx-5 cursor-pointer">
  <Link href="https://github.com/zeynabaghabalayi" passHref className="mx-20">
    <FaGithub className="text-3xl" />
  </Link>
</div>

<div className="mx-5 cursor-pointer">
  <Link href="https://web.telegram.org/a/" passHref className="mx-20">
    <FaTelegram className="text-3xl" />
  </Link>
</div>

      </div>

    </div>


  );
};

export default contact;
