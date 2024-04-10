module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        black: { 900: "#000000", "900_19": "#00000019" },
        yellow: { 900: "#f07423" },
        gray: { 50: "#f0faff", 100: "#f7f5f4" },
        indigo: { 700: "#2a528e", 900: "#0c397e", "900_01": "#002867", "900_16": "#0c397e16", "900_19": "#0c397e19" },
        blue_gray: { 700: "#535353", 900: "#353535", "900_99": "#35353599" },
        blue: { 600: "#2693d1" },
        gray_800: "#4e483f",
      },
      boxShadow: {
        xs: "0px 3.74px 31px 0px #0c397e",
        sm: "98.39px -17.89px 80px 0px #011534",
        md: "0px 3px 25px 0px #0c397e",
      },
      fontFamily: { raleway: "Raleway", dmsans: "DM Sans", futurapt: "Futura PT", lato: "Lato" },
      backgroundImage: { gradient: "linear-gradient(143deg, #002867,#001940)" },
      opacity: { 0.3: 0.3 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
