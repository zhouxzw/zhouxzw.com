import React from "react";

import { BsGithub, BsEnvelope } from "react-icons/bs";

function Socialfooter(props) {
  return (
    <div className="social-footer">
      <a
        className="github-button"
        href="https://github.com/zhouxzw"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub size="1.5rem"></BsGithub>
      </a>
      <a className="email-button" href="mailto:ucwill.zhou@gmail.com">
        <BsEnvelope size="1.5rem"></BsEnvelope>
      </a>
    </div>
  );
}

export default Socialfooter;
