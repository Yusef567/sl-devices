import { Palette, PaletteOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    gray?: Palette["primary"];
  }

  interface PaletteOptions {
    gray?: PaletteOptions["primary"];
  }
}
