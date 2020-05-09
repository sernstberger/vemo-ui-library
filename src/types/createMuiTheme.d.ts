import * as createMuiTheme from '@material-ui/core/styles/createMuiTheme';

declare module '@material-ui/core/styles/createMuiTheme' {
    interface ThemeOptions {    
        drawerWidth?: number;
    }

    interface Theme {    
      drawerWidth?: number;
  }
}



// export interface ThemeOptions {
//   shape?: ShapeOptions;
//   breakpoints?: BreakpointsOptions;
//   direction?: Direction;
//   mixins?: MixinsOptions;
//   overrides?: Overrides;
//   palette?: PaletteOptions;
//   props?: ComponentsProps;
//   shadows?: Shadows;
//   spacing?: SpacingOptions;
//   transitions?: TransitionsOptions;
//   typography?: TypographyOptions | ((palette: Palette) => TypographyOptions);
//   zIndex?: ZIndexOptions;
// }

// export interface Theme {
//   shape: Shape;
//   breakpoints: Breakpoints;
//   direction: Direction;
//   mixins: Mixins;
//   overrides?: Overrides;
//   palette: Palette;
//   props?: ComponentsProps;
//   shadows: Shadows;
//   spacing: Spacing;
//   transitions: Transitions;
//   typography: Typography;
//   zIndex: ZIndex;
// }