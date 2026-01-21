declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: Record<'white' | 'white10' | 'white50' | 'white60' | 'black', string>;
  fontFamily: Record<'involve' | 'theater' | 'ubuntu', string>;
  breakpoints: Record<'mob' | 'tablet' | 'desk', number>;
  transitionDurationAndFunc: string;
  spacing: (value?: number) => number;
}

const theme: ITheme = {
  colors: {
    white: '#ffffff',
    white10: 'rgba(255,255,255,0.1)',
    white50: 'rgba(255,255,255,0.5)',
    white60: 'rgba(255,255,255,0.6)',
    black: '#000000',
  },
  fontFamily: {
    ubuntu: 'Ubuntu Mono',
    involve: 'Involve',
    theater: 'Theater',
  },
  breakpoints: {
    mob: 810,
    tablet: 1200,
    desk: 1600,
  },
  transitionDurationAndFunc: '400ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => value * 4,
};

export default theme;
