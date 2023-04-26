export type icon = (typeof iconOptions)[number];

export const iconOptions = <const>[
  'logo',
  'dashboard',
  'product',
  'customers',
  'income',
  'promote',
  'help',
  'menuArrow',
  'search',
];

export interface StyledSvgIconProps {
  className?: string;
  type?: icon;
  width?: string;
  height?: string;
  fillChildren?: string | 'none';
  strokeWidth?: number;
}
