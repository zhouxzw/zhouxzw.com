import React from "react";
import projects from "../../data/data";
import Navbar from "../../components/Navbar/Navbar";
import Slot from "../../components/Project/Slots/Slot";
import Social from "../../components/Social/Social";
import Footer from "../../components/Footer/Footer";

function project(props) {
  const project = props.project[0];
  return (
    <>
      <Navbar></Navbar>

      <div className="new-slot">
        <div className="new-slot-container">
          <div className="slot-title">
            <h1>{project.title}</h1>
            <hr></hr>
          </div>

          <Slot project={project} page={true}></Slot>
        </div>
      </div>
      <Footer></Footer>
      <Social></Social>
    </>
  );
}

export function getStaticProps({ params }) {
  const project = projects.filter((proj) => {
    return proj.title === params.projectId;
  });
  return {
    props: {
      project: project,
    },
  };
}

//project paths /projects/[projectId]
export function getStaticPaths() {
  return {
    paths: projects.map((project) => {
      const projectId = project.title;
      return {
        params: {
          projectId,
        },
      };
    }),
    fallback: false,
  };
}

export default project;
