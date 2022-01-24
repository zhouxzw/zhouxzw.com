import React from "react";

import { BsGithub, BsEnvelope } from "react-icons/bs";

function Social(props) {
  return (
    <div className="social-container">
      <div className="social-links">
        <a
          className="github-button"
          href="https://github.com/zhouxzw"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub size="1.8rem"></BsGithub>
        </a>
        <a className="email-button" href="mailto:ucwill.zhou@gmail.com">
          <BsEnvelope size="1.8rem"></BsEnvelope>
        </a>
        <span></span>
      </div>
    </div>
  );
}

export default Social;
