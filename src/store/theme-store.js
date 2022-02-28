import create from 'zustand'

export const useThemeStore = create(() => ({
  theme: {
    background: '#171B20',
    blur: 'blur(31px)',
    backgroundTransparentDarker: 'rgba(41, 50, 61, 0.59)',
    accent: '#FF8C85',
    transparent: 'rgba(255, 255, 255, 0.04)',
    textNormal: '#7D8A9A',
    textDarker: '#4B5765',
    textDarkest: 'rgba(27, 35, 45, 0.9)',
    textBrighter: '#9CADC1',
    textBrightest: '#BDCCE0',
    textLight: '',
    boxBorder: '#2d333c',
    graphicBackground: `url('/mount.jpg')`,
  },
}))
