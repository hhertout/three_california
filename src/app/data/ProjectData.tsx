import { ProjectDrawerProps } from '@app/components/ProjectDrawer.tsx';

export const projectData: Array<ProjectDrawerProps> = [
  {
    title: 'Externatic rework',
    resume: (
      <>
        <div>
          My first large professional project made in 2022-2023 during my
          training journey.
        </div>
        <div>
          Externatic is an innovative french recruitment platform committed to
          connecting the brightest talents with companies in search of
          exceptional skills. This platform offers a personalized approach to
          recruitment by utilizing cutting-edge technological tools to identify,
          assess, and attract the best profiles. By combining human expertise
          and technological innovation, Externatic streamlines the recruitment
          process, providing companies access to a pool of qualified talents
          while offering candidates enriching professional opportunities
          perfectly tailored to their skills and aspirations.
        </div>
      </>
    ),
    stack: ['PHP - Symfony', 'MySQL', 'Bootstrap'],
    github: 'https://github.com/hhertout/WCS_externatic',
  },
  {
    title: 'Eco-challenge',
    resume: (
      <>
        <div>
          The environmental issue is at the forefront of current affairs, and
          everyone can take action in their own way to reduce its impact and
          preserve our planet. The project is built on the desire to develop a
          platform that launches "eco-gesture" challenges within a group.
        </div>

        <div>
          Eco-Challenge has been developed with this aim in mind to meet this
          demand. It's a french community platform designed to promote
          eco-friendly actions where individuals can challenge themselves to
          earn points and complete various challenges.
        </div>

        <div>
          The platform is also open to businesses, allowing them to create
          customized eco-tasks and challenges for their employees.
        </div>

        <div>
          The goal is to create a smooth and engaging user experience. The
          platform will enable users to register, create groups, participate in
          challenges, and validate eco-tasks with just a few clicks.
        </div>
      </>
    ),
    stack: ['React', 'GraphQl', 'Node.js', 'Docker', 'CI/CD', 'MUI'],
  },
  {
    title: 'Eco-challenge | Mobile app',
    resume: (
      <>
        <div>The dedicated mobile app to Eco-challenge.</div>
      </>
    ),
    stack: ['React Native', 'Paper.js', 'GraphQL'],
  },
];
