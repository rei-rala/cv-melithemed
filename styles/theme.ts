export const MEASURES = {
  borders: 'var(--measure-borders)',
  radius: 'var(--measure-radius)',
  shortest: 'var(--measure-shortest)',
  shorter: 'var(--measure-shorter)',
  short: 'var(--measure-short)',
  near: 'var(--measure-near)',
  normal: 'var(--measure-normal)',
  medium: 'var(--measure-medium)',
  long: 'var(--measure-long)',
  longer: 'var(--measure-longer)',
  longest: 'var(--measure-longest)',
  padding: 'var(--measure-padding)',
}

export const COLORS = {
  text: 'var(--color-text)',
  light: 'var(--color-light)',
  dark: 'var(--color-dark)',
  white: 'var(--color-white)',
  lightGray: 'var(--color-lightGray)',
  background: 'var(--color-background)',
  gray: 'var(--color-gray)',
  success: 'var(--color-success)',
  successAlt: 'var(--color-successAlt)',
  danger: 'var(--color-danger)',
  dangerAlt: 'var(--color-dangerAlt)',
  warning: 'var(--color-warning)',
  warningAlt: 'var(--color-warningAlt)',
  blue: 'var(--color-blue)',
  blueAlt: 'var(--color-blueAlt)',
  orange: 'var(--color-orange)',
  orangeAlt: 'var(--color-orangeAlt)',
}


export const FONT_FAMILY = {
  light: 'var(--ff-light)',
  default: 'var(--ff-default)',
  semibold: 'var(--ff-semibold)',
}

export const VARIANTS = {
  info: {
    background: COLORS.blue,
    color: COLORS.white,
  },
  infoAlt: {
    color: COLORS.blue,
    background: COLORS.blueAlt,
  },
  success: {
    background: COLORS.success,
    color: COLORS.white,
  },
  successAlt: {
    color: COLORS.success,
    background: COLORS.successAlt,
  },
  danger: {
    background: COLORS.danger,
    color: COLORS.white,
  },
  dangerAlt: {
    color: COLORS.danger,
    background: COLORS.dangerAlt,
  },
  warning: {
    background: COLORS.warning,
    color: COLORS.white,
  },
  warningAlt: {
    background: COLORS.warningAlt,
    color: COLORS.warning,
  },
  orange: {
    background: COLORS.orange,
    color: COLORS.white,
  },
  orangeAlt: {
    background: COLORS.orangeAlt,
    color: COLORS.orange,
  }
}

export type Variant = keyof typeof THEME.VARIANTS;

const THEME = {
  MEASURES,
  COLORS,
  FONT_FAMILY,
  VARIANTS,
}

export default THEME;