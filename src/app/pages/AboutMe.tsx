import React from 'react';
import './aboutme.css';

const AboutMe = () => {
  return (
    <main>
      <h1>About Me</h1>

      <section>
        <h2>Who am I</h2>

        <article>
          <div>Welcome to my site!</div>

          <div>
            I am a full-stack developer with 2 years of professional experience
            in the field of web technologies. In a professional context, I
            mainly work with PHP and JavaScript - TypeScript. I have
            participated in several projects, and other professional projects
            developed during my training which you can find below.
          </div>

          <div>
            Outside of the professional context, my attraction to the different
            technologies linked to development encourages me to perfect my
            knowledge and carry out extensive and constant technological
            monitoring. So, I regularly practice technologies like GO and Rust
            for personal use. With these lower level languages that I enjoy, I
            continue to progress in my general knowledge of development
            concepts.
          </div>

          <div>
            {' '}
            Another point of interest that I particularly appreciate is the
            DevOps side of the product development process, and more broadly
            server architecture in the deployment of application services. So,
            I'm also exploring technologies like Docker and Kubernetes to be
            able to work on these technology if needed. In this ever-changing
            (and fast-paced) landscape, I am committed to honing my skills to
            stay current in my knowledge and development skill.
          </div>
        </article>
      </section>

      <section>
        <div className={'hero-section'}>
          <h2>Stack</h2>
        </div>
        <div>
          <h3>Professional usage</h3>
          <div>
            <div>Languages</div>
            <ul>
              <li>GO</li>
              <li>Javascript - Typescript</li>
              <li>PHP</li>
            </ul>

            <div>Framework</div>
            <div>Other technology</div>

            <div>Other technology</div>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>

        <h3>Personal usage</h3>
        <div>
          <div>Languages</div>
          <ul>
            <li>GO</li>
            <li>Rust</li>
            <li>Typescript</li>
          </ul>

          <div>Library - Framework</div>
          <ul>
            <li>Three.js</li>
            <li>React Three Fiber</li>
          </ul>

          <div>Other technology</div>
          <ul>
            <li>Docker</li>
            <li>Kubernetes</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Working project</h2>

        <div>
          <h3>Externatic</h3>
          <h4>Presentation</h4>
          <article>
            <div>
              Externatic is an innovative french recruitment platform committed
              to connecting the brightest talents with companies in search of
              exceptional skills. This platform offers a personalized approach
              to recruitment by utilizing cutting-edge technological tools to
              identify, assess, and attract the best profiles. By combining
              human expertise and technological innovation, Externatic
              streamlines the recruitment process, providing companies access to
              a pool of qualified talents while offering candidates enriching
              professional opportunities perfectly tailored to their skills and
              aspirations.
            </div>
          </article>
        </div>
        <div>
          <h3>Eco-Challenge</h3>

          <h4>Presentation</h4>
          <article>
            <div>
              The environmental issue is at the forefront of current affairs,
              and everyone can take action in their own way to reduce its impact
              and preserve our planet. The project is built on the desire to
              develop a platform that launches "eco-gesture" challenges within a
              group.
            </div>

            <div>
              Eco-Challenge has been developed with this aim in mind to meet
              this demand. It's a french community platform designed to promote
              eco-friendly actions where individuals can challenge themselves to
              earn points and complete various challenges.
            </div>

            <div>
              The platform is also open to businesses, allowing them to create
              customized eco-tasks and challenges for their employees.
            </div>

            <div>
              The goal is to create a smooth and engaging user experience. The
              platform will enable users to register, create groups, participate
              in challenges, and validate eco-tasks with just a few clicks.
            </div>
          </article>
        </div>
        <div>
          <h3>Eco-Challenge | Mobile App</h3>

          <h4>Presentation</h4>
          <article></article>
        </div>
      </section>
    </main>
  );
};

export default AboutMe;
