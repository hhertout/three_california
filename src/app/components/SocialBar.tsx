import React from 'react';
import GithubIcon from './icons/GithubIcon.tsx';
import LinkedInIcon from './icons/LinkedInIcon.tsx';
import { useNavigate } from '../../router/hooks.tsx';
import './socialbar.css';

const SocialBar = () => {
  const navigate = useNavigate();
  return (
    <div className={'social-bar'}>
      <a
        href={import.meta.env.VITE_GITHUB_LINK}
        target={'_blank'}
        className={'btn icon-btn zi-5'}
      >
        <GithubIcon size={18} color={'white'} />
      </a>
      <a
        href={import.meta.env.VITE_LINKEDIN_LINK}
        target={'_blank'}
        className={'btn icon-btn zi-5'}
      >
        <LinkedInIcon size={18} color={'white'} />
      </a>
      <button
        onClick={() => navigate('/about-me')}
        className={'btn btn-about zi-5'}
      >
        About me
      </button>
    </div>
  );
};

export default SocialBar;
