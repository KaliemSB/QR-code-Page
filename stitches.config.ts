import { createStitches } from "@stitches/core";

const { css, globalCss } = createStitches({
  theme: {
    colors: {
      lightGray: "hsl(212, 45%, 89%)",
      grayishBlue: "hsl(220, 15%, 55%)",
      darkBlue: "hsl(218, 44%, 22%)"
    },
    radii: {
      1: "4px",
      2: "8px",
      3: "12px",
      4: "16px"
    }
  }
})

const globalStyles = globalCss({
  "*": {
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
    fontFamily: "'Outfit', sans-serif",
    fontSize: 15,
  },
  body: {
    background: "$lightGray",
    width: "100vw",
    height: "100vh",
    padding: "0 1rem"
  },
  "#app": {
    width: "100%",
    height: "100%"
  }
});

export { css, globalStyles };