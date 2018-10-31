import * as React from 'react';
import { IconProps } from './Icon';

export interface DropdownMenuProps {
  /** The prefix of the component CSS class */
  classPrefix?: string;

  /** Additional classes */
  className?: string;

  /** Primary content */
  children?: React.ReactNode;

  /** Define the title as a submenu */
  title?: React.ReactNode;

  /** The submenu expands from the left and defaults to the right */
  pullLeft?: boolean;

  /** Set the icon */
  icon?: React.ReactElement<IconProps>;
}

declare const DropdownMenu: React.ComponentType<DropdownMenuProps>;

export default DropdownMenu;
