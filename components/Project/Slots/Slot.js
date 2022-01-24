import React from "react";
import Image from "next/image";

import Content from "./Content/Content";

import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";
import Link from "next/link";

const redirect = (url) => {
  window.open(url, "_blank");
};

function Slot(props) {
  return (
    <>
      <div className="image-link-container">
        <div className="center-image">
          <div className="image-holder">
            <Image
              src={props.project.image}
              alt="menji-thumbnail"
              width={100}
              height={60}
              layout="responsive"
            ></Image>

            <div className="project-socials">
              {props.project.link === "none" ? null : (
                <a onClick={() => redirect(props.project.link)}>
                  <BsBoxArrowUpRight size="1.5rem"></BsBoxArrowUpRight>
                  <p>Link</p>
                </a>
              )}
              <a onClick={() => redirect(props.project.github)}>
                <BsGithub size="1.5rem"></BsGithub>
                <p>Repo</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="desktop-width">
          <h2 className="project-title">
            {props.page ? null : props.project.title}
          </h2>
          <section className="project-info">
            {props.page ? null : <p>{props.project.desc}</p>}

            {props.page ? <Content project={props.project}></Content> : null}

            {props.page ? null : (
              <Link href={props.project.route} passHref={true}>
                <a className="more-content highlight">
                  <b>More...</b>
                </a>
              </Link>
            )}
          </section>
        </div>
      </div>

      <div className="tech-center">
        <div className="tech-stack">
          <ul>
            {props.project.techstack.map((tech, key) => (
              <li key={props.project.title + ": " + key}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Slot;
