import { ButtonProps, Scale, variants } from "../Button/types";

export type ButtonMenuItemProps = {
  isActive?: boolean;
  scale?: Scale;
} & ButtonProps;

export interface ButtonMenuProps {
  variant?: typeof variants.PRIMARY | typeof variants.SUBTLE;
  activeIndex?: number;
  onClick?: (index: number) => void;
  scale?: Scale;
  children: React.ReactElement[];
}
