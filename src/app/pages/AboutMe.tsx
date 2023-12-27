import './aboutme.css';
import Navbar, { Menu } from '@app/components/Navbar.tsx';
import { Canvas } from '@react-three/fiber';
import AboutMeBanner from '@scene/components/about_me/AboutMeBanner.tsx';
import { useEffect, useState } from 'react';
import ProjectDrawer from '@app/components/ProjectDrawer.tsx';
import { projectData } from '@app/data/ProjectData.tsx';

const menu: Array<Menu> = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/car-overview',
    label: 'Car Overview',
  },
  {
    label: 'Who am I',
    href: '',
  },
  {
    label: 'Stack',
    href: '',
  },
  {
    label: 'Project',
    href: '',
  },
];

const AboutMe = () => {
  const [isScrollUp, setIsScrollUp] = useState(false);

  const handleScrollUp = (e: WheelEvent) => {
    if (e.deltaY < 0) setIsScrollUp(true);
    else setIsScrollUp(false);
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScrollUp);

    return () => {
      window.removeEventListener('wheel', handleScrollUp);
    };
  }, []);

  return (
    <main className={'main'}>
      <Navbar menu={menu} isShowed={isScrollUp} />
      <section className={'banner vh-100'}>
        <div id="canvas-about-me-banner">
          <Canvas gl={{ alpha: true, antialias: false }} dpr={[1, 2]}>
            <AboutMeBanner
              count={300}
              pointSize={[10, 10, 10]}
              sphereArgs={[1, 40, 40]}
            />
          </Canvas>
        </div>

        <h1>About Me</h1>
        <div className={'name'}>- Hugues Hertout -</div>
      </section>

      <section id={'who-am-i'} className={'who-i-am-container'}>
        <div className={'w-50 vh-100 who-i-am-wrapper-left'}></div>
        <div className={'w-50 vh-100 who-i-am-wrapper-right'}>
          <div className={'py-4'}>
            First, welcome to my personal website ! I hope you enjoy your
            previous experience !
          </div>

          <h2 className={'mt-5'}>- Who am I ? -</h2>

          <article>
            <div>
              I am a full-stack developer with 2 years of professional
              experience in the field of web technologies.
            </div>

            <div>
              In a professional context, I mainly work with JavaScript -
              TypeScript and PHP. I have participated in several projects, and
              other professional projects developed during my training which you
              can find below.
            </div>

            <div>
              Outside of the professional context, my attraction to the
              different technologies linked to development encourages me to
              perfect my knowledge and carry out extensive and constant
              technological watch. So, I regularly practice technologies like GO
              and Rust for personal use. With these lower level languages that I
              enjoy, I continue to progress in my general knowledge of
              development concepts.
            </div>

            <div>
              Another point of interest that I particularly appreciate is the
              DevOps side of the product development process, and more broadly
              server architecture in the deployment of application services. So,
              I'm also exploring technologies like Docker and Kubernetes to be
              able to work on these technology if needed. In this ever-changing
              (and fast-paced) landscape, I am committed to honing my skills to
              stay current in my knowledge and development skill.
            </div>
          </article>
        </div>
      </section>

      <section id={'stack'}>
        <div className={'hero-banner'}>
          <h2>Stack</h2>
        </div>
        <div className={'stack-container container'}>
          <article>
            <h3>Professional usage</h3>
            <div>
              <h4>Languages</h4>
              <ul>
                <li>Javascript - Typescript</li>
                <li>PHP</li>
                <li>GO</li>
              </ul>

              <h4>Framework</h4>
              <ul>
                <li>React</li>
                <li>Node.js</li>
                <li>Laravel</li>
                <li>Symfony</li>
              </ul>
              <h4>Other technology</h4>
              <ul>
                <li>Docker</li>
                <li>Git - GitHub - Gitlab</li>
                <li>CI / CD</li>
                <li>REST - GraphQL</li>
              </ul>
            </div>
          </article>

          <article>
            <h3>Personal usage</h3>
            <div>
              <h4>Languages</h4>
              <ul>
                <li>GO</li>
                <li>Rust</li>
                <li>Typescript</li>
              </ul>

              <h4>Library - Framework</h4>
              <ul>
                <li>Three.js</li>
                <li>React Three Fiber</li>
              </ul>

              <h4>Other technology</h4>
              <ul>
                <li>Docker</li>
                <li>Kubernetes</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section id={'project'}>
        <div className={'project-hero-banner'}>
          <h2>Projects</h2>
        </div>
        <div className={'project-container p-5'}>
          {projectData.map((project, index) => {
            return <ProjectDrawer key={index} {...project} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default AboutMe;
