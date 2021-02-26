
interface Colors{
    primary: string;
    dark: string[];
    light: string[];
    red: string[];
    green: string[];
    blue: string[];
    yellow: string[];
    orange: string[];
    teal: string[];
    purple: string[];
}
interface BreakPoints{
    phone: string;
    bigPhone: string;
    tabPort: string;
    tabLAnd:string;
    bigDesktop: string
}
export interface Theme {
    colors:Colors;
    gradients:string[];
    evelation:string[];
    breakPoints:BreakPoints;

}



export const theme = {
    colors: {
      primary: ["#3568d4", "#3e7bfa", "#6698fa", "#ccddff"],
      dark: ["#1c1c28", "#28293d", "#555770", "#8f90a6", "#c7c9d9"],
      light: ["#f9f9f9", "#ebebf0", "#f3f2f5", "#fafafc", "#ffffff"],
      red: ["#e53535", "#ff3b3b", "#ff5c5c", "#ff8080", "#ffe5e5"],
      green: ["#05a660", "#06c270", "#39d9ba", "#57EBA1", "#E3FFF1"],
      blue: ["#004FC4", "#0063F7", "#5B8DEF", "#9DBFF9", "#E5F0FF"],
      yellow: ["#E5B800", "#FFCC00", "#FDDD48", "#FDED72", "#FFFEE5"],
      orange: ["#E57A00", "#FF8800", "#FDAC42", "#FCCC75", "#FFF8E5"],
      teal: ["#00B7C4", "#00CFDE", "#73DFE7", "#A9EFF2", "#E5FFFF"],
      purple: ["#4D0099", "#6600CC", "#AC5DD9", "#DDA5E9", "#FFE5FF"],
    },
    gradients: [
      "linear-gradient(147.14deg, #5B8DEF 6.95%, #0063F7 93.05%)",
      "linear-gradient(147.14deg, #FF8800 6.95%, #E63535 93.05%)",
      "linear-gradient(147.14deg, #3E7BFA 6.95%, #6600CC 93.05%)",
      "linear-gradient(147.14deg, #00CFDE 6.95%, #05A660 93.05%)",
      "linear-gradient(145.51deg, #FDDD48 7.21%, #00B7C4 94.47%)",
      "linear-gradient(147.14deg, #FF3B3B 6.95%, #6600CC 93.05%)",
      "linear-gradient(147.14deg, #73DFE7 6.95%, #0063F7 93.05%)",
      "linear-gradient(145.51deg, #AC5DD9 7.21%, #004FC4 94.47%)",
    ],
    elevation: [
        "inset 0px 0.5px 4px rgba(96, 97, 112, 0.32)",
        
        "none",
        
       
          "0px 0px 1px rgba(40, 41, 61, 0.08), 0px 0.5px 2px rgba(96, 97, 112, 0.16)",
        
       
          "0px 0px 1px rgba(40, 41, 61, 0.04), 0px 2px 4px rgba(96, 97, 112, 0.16)",
        
       
          " 0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16)",
        
       
          "0px 2px 4px rgba(40, 41, 61, 0.04), 0px 8px 16px rgba(96, 97, 112, 0.16)",
        
       
          "0px 2px 8px rgba(40, 41, 61, 0.04), 0px 16px 24px rgba(96, 97, 112, 0.16)",
        
       
          "0px 2px 8px rgba(40, 41, 61, 0.08), 0px 20px 32px rgba(96, 97, 112, 0.24)",
    ],
        
    breakpoints: {
      phone: "max-width: 37.5em", // 600px
      bigPhone: "max-width:47.9375em", // 767px;
      tabPort: "max-width: 56.25em", //900px
      tabLAnd: "max-width: 75em", //1200px
      bigDesktop: "min-width: 112.5em", //1800px
    },
  };