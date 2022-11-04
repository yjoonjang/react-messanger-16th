import { HomeIconProps } from './ProfileIcon';

const MessageIcon = ({ name, isSelected, onClickIcon }: HomeIconProps) => {
  return (
    <button name={name} onClick={onClickIcon}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className="bi bi-chat-fill"
        viewBox="0 0 16 16"
        color={isSelected ? '#222222' : '#a1a1a1'}
      >
        <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"></path>
      </svg>
    </button>
  );
};

export default MessageIcon;
