import React, { ReactElement } from 'react';
import './projectdrawer.css';
import GithubIcon from '@app/components/icons/GithubIcon.tsx';

export type ProjectDrawerProps = {
  title: string;
  resume: ReactElement;
  stack: Array<string>;
  github?: string;
};

const ProjectDrawer = ({
  title,
  resume,
  stack,
  github,
}: ProjectDrawerProps) => {
  return (
    <section className={'project-drawer-wrapper'}>
      <div id={'border-top-left'}></div>
      <div id={'border-bottom-right'}></div>

      <div className={'header-container'}>
        <h4 className={'title'}>{title}</h4>
        {github && (
          <>
            <a href={github} target={'_blank'}>
              <GithubIcon size={40} />
            </a>
          </>
        )}
      </div>

      <div className={'project-content-wrapper'}>
        <article className={'resume-wrapper article-wrapper'}>
          <h5 className={'article-title'}>Resume</h5>
          <div className={'resume-content'}>{resume}</div>
        </article>

        <article className={'stack-wrapper article-wrapper'}>
          <h5 className={'article-title'}>Stack</h5>
          <ul className={'stack-list'}>
            {stack.map((technology, index) => (
              <li key={index} className={'stack-item'}>
                {technology}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default ProjectDrawer;
