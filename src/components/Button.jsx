import arrowIcon from '../assets/arrow-down.svg';

const Button = ({ text, className }) => {
  return (
    <a className={className}>
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