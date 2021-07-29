import React from 'react';
import Layout from '../components/Layout';

export const About = (): JSX.Element => {
  return (
    <Layout
      customMeta={{
        title: 'About - Hunter Chang',
      }}
    >
      <h1>About Page</h1>
      <p>Hello there, and welcome to my personal website!</p>

      <p>
        I’m a Computer Science Engineer with an interest in Web development,
        Machine Learning and DevOps !
      </p>

      <p>{`I love learning stuff, so most of the time I'm following an Online Course or doing a project to learn and apply new stuff. `}</p>

      <p>
        {`I'm currently working as a Full Stack Engineer at `}
        <a href="https://ellipsis-drive.com" target="_blank" rel="noreferrer">
          Ellipsis Drive
        </a>
        {`, mostly of the front-end using React.`}
      </p>
    </Layout>
  );
};

export default About;
