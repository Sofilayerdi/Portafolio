import arrowIcon from '../assets/arrow-down.svg';

const Button = ({ text, className, href, download }) => {
  return (
    <a className={className} href={href} download={download}>
      <div className="cta-button">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-icon">
          <img src={arrowIcon} alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;