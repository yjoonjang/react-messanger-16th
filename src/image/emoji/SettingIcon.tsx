import { HomeIconProps } from './ProfileIcon';

const SettingIcon = ({ name, isSelected, onClickIcon }: HomeIconProps) => {
  return (
    <button name={name} onClick={onClickIcon}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className="bi bi-three-dots"
        viewBox="0 0 16 16"
        color={isSelected ? '#222222' : '#a1a1a1'}
      >
        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
      </svg>
    </button>
  );
};

export default SettingIcon;
