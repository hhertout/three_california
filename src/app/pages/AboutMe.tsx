import './aboutme.css';
import Navbar, { Menu } from '@app/components/Navbar.tsx';
import { Canvas } from '@react-three/fiber';
import AboutMeBanner from '@scene/components/about_me/AboutMeBanner.tsx';

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
  return (
    <main className={'main'}>
      <Navbar menu={menu} />
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
          <h2>Project</h2>
        </div>
        <div className={'project-container p-5'}>
          <div className={'project-wrapper'}>
            <h3>Externatic rework</h3>
            <h4>Presentation</h4>
            <article>
              <div>
                <div>
                  My first large professional project made in 2022-2023.
                </div>

                <div>
                  Externatic is an innovative french recruitment platform
                  committed to connecting the brightest talents with companies
                  in search of exceptional skills. This platform offers a
                  personalized approach to recruitment by utilizing cutting-edge
                  technological tools to identify, assess, and attract the best
                  profiles. By combining human expertise and technological
                  innovation, Externatic streamlines the recruitment process,
                  providing companies access to a pool of qualified talents
                  while offering candidates enriching professional opportunities
                  perfectly tailored to their skills and aspirations.
                </div>
              </div>
            </article>
          </div>
          <div className={'project-wrapper'}>
            <h3>Eco-Challenge</h3>

            <h4>Presentation</h4>
            <article>
              <div>
                The environmental issue is at the forefront of current affairs,
                and everyone can take action in their own way to reduce its
                impact and preserve our planet. The project is built on the
                desire to develop a platform that launches "eco-gesture"
                challenges within a group.
              </div>

              <div>
                Eco-Challenge has been developed with this aim in mind to meet
                this demand. It's a french community platform designed to
                promote eco-friendly actions where individuals can challenge
                themselves to earn points and complete various challenges.
              </div>

              <div>
                The platform is also open to businesses, allowing them to create
                customized eco-tasks and challenges for their employees.
              </div>

              <div>
                The goal is to create a smooth and engaging user experience. The
                platform will enable users to register, create groups,
                participate in challenges, and validate eco-tasks with just a
                few clicks.
              </div>
            </article>
          </div>
          <div className={'project-wrapper'}>
            <h3>Eco-Challenge | Mobile App</h3>

            <h4>Presentation</h4>
            <article>
              <div>
                The environmental issue is at the forefront of current affairs,
                and everyone can take action in their own way to reduce its
                impact and preserve our planet. The project is built on the
                desire to develop a platform that launches "eco-gesture"
                challenges within a group.
              </div>

              <div>
                Eco-Challenge has been developed with this aim in mind to meet
                this demand. It's a french community platform designed to
                promote eco-friendly actions where individuals can challenge
                themselves to earn points and complete various challenges.
              </div>

              <div>
                The platform is also open to businesses, allowing them to create
                customized eco-tasks and challenges for their employees.
              </div>

              <div>
                The goal is to create a smooth and engaging user experience. The
                platform will enable users to register, create groups,
                participate in challenges, and validate eco-tasks with just a
                few clicks.
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutMe;
