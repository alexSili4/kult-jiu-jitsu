declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: Record<'white' | 'black', string>;
  fontFamily: Record<'involve' | 'theater', string>;
  padding: {
    container: number;
  };
  containerWidth: {
    desktop: number;
    mobile: number;
  };
  transitionDurationAndFunc: string;
  spacing: (value?: number) => number;
}

const theme: ITheme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
  },
  fontFamily: {
    involve: 'Involve',
    theater: 'Theater',
  },
  // fontWeight: {  },
  // fontSize: {  },
  padding: {
    container: 16,
  },
  // borderRadius: {  },
  containerWidth: {
    desktop: 1376,
    mobile: 375,
  },
  // shadows: {  },
  transitionDurationAndFunc: '400ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => value * 4,
};

export default theme;
