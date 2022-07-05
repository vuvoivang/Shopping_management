import MyAvatar from '../../assets/images/VoHoangVu.jpg';

const About: React.FC = () => (
  <div
    className="c-about"
  >
    <img className="c-about__image u-border-radius--round" src={MyAvatar} width="200" alt="the author" />
    <h1 className="c-about__text">
      My name: <span className="c-about__text--primary">Vo Hoang Vu</span>
    </h1>
    <p className="c-about__desc">
      I am a software engineer, currently working at{' '}
      <a className="about-me__link--blue u-color--blue u-font-weight--mid-bold" href="https://kms-technology.com/">
        KMS Technology
      </a>{' '}
      as a Front-End Developer Intern.
    </p>
  </div>
);
export default About;
