import React from "react";
import Image from "next/image";
import Link from "next/link";

import profile from "../../public/images/mof.jpg";
import { BsArrowDownCircle } from "react-icons/bs";

function Intro(props) {
  return (
    <div className="intro-page">
      <div className="intro-container">
        <div className="profile-picture">
          <div className="profile-picture-relative">
            <Image
              src={profile}
              alt="profile-image"
              objectFit="cover"
              quality={100}
            ></Image>
          </div>
        </div>

        <div className="intro">
          <div className="intro-title">
            <h2>Welcome</h2>
            <hr></hr>
          </div>
          <section className="intro-section">
            <p>
              to my website where I showcase my school/personal projects! I am a
              recent computer science graduate from University of Calgary with a
              passion in building web applications.
            </p>
          </section>
        </div>

        <Link href="#projects" passHref={true}>
          <div className="proj-animate">
            <a className="project-arrow">
              <BsArrowDownCircle size={34}></BsArrowDownCircle>
            </a>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Intro;
