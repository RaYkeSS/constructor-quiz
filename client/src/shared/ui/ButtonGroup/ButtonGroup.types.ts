export default interface ButtonGroupProps {
  buttons: ButtonGroupArray[];
}

interface ButtonGroupArray {
  label: string;
  onClick: () => void;
  className?: string;
}
