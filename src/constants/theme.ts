declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: Record<'white' | 'white10' | 'white50' | 'white60' | 'black', string>;
  fontFamily: Record<'involve' | 'theater', string>;
  breakpoints: Record<'desk', number>;
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
    involve: 'Involve',
    theater: 'Theater',
  },
  breakpoints: {
    desk: 1600,
  },
  transitionDurationAndFunc: '400ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => value * 4,
};

export default theme;
