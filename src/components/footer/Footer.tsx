"use client";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="p-2 bg-gray-600">

      <div className="footer  w-full text-neutral-content  flex flex-col  ">
        <Image src="/assets/logo/argus_logo.svg" alt="logo" width={240} height={52} className="w-1/4" />
        <div className="social-links flex items-center mt-[-28px] justify-center gap-2 text-lg">
          <BsFacebook color="#1877F2" />
          <BsTwitter color="#1DA1F2" />
          <BsInstagram color="#E4405F" />
          <BsYoutube color="#FF0000" size={22} />
        </div>
      </div>

      <div className="footer grid-rows-2 grid-cols-2 text-neutral-content p-4 ">
        <div>
          <p className="text-lg">Services</p>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <p className="text-lg">Company</p>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <p className="text-lg">Legal</p>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <p className="text-lg">Social</p>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Facebook</a>
          <a className="link link-hover">Github</a>
        </div>
        <div>
          <p className="text-lg">Explore</p>
          <a className="link link-hover">Features</a>
          <a className="link link-hover">Enterprise</a>
          <a className="link link-hover">Security</a>
          <a className="link link-hover">Pricing</a>
        </div>
        <div>
          <p className="text-lg">Apps</p>
          <a className="link link-hover">Mac</a>
          <a className="link link-hover">Windows</a>
          <a className="link link-hover">iPhone</a>
          <a className="link link-hover">Android</a>
        </div>
      </div>

      <div className="footer footer-center p-4 ">
        <aside>
          <p>Copyright © 2024 - All right reserved by kdx Industries Ltd</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;