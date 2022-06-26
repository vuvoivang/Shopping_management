import MyAvatar from '../../assets/images/VoHoangVu.jpg';

const About: React.FC = () => (
  <div
    className="c-about"
    style={{
      borderRadius: '20px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 500
    }}
  >
    <img src={MyAvatar} width="200" style={{ borderRadius: '50%', border: '2px solid #fff', boxShadow: '0 0 10px #fff' }} alt="the author" />
    <h1 className="c-about__text">
      My name: <span className="c-about__text--primary">Vo Hoang Vu</span>
    </h1>
    <p className="c-about__desc">
      I am a software engineer, currently working at{' '}
      <a className="about-me__link--blue" style={{ color: 'blue', fontWeight: 600 }} href="https://kms-technology.com/">
        KMS Technology
      </a>{' '}
      as a Front-End Developer Intern.
    </p>
  </div>
);
export default About;
