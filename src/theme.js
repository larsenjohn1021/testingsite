
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme(

    {
        
        palette:
        {
            common: { "black": "#000", "white": "#fff" },
            background: { "paper": "#fff", "default": "#fafafa" },
            primary: {
                light: "rgba(173, 91, 93, 1)",
                main: "rgba(118, 52, 53, 1)",
                dark: "rgba(82, 29, 30, 0)",
                contrastText: "#fff"
            },

            secondary:
            {
                light: "rgba(181, 93, 123, 1)",
                main: "rgba(152, 68, 98, 1)",
                dark: "rgba(93, 23, 54, 1)",
                contrastText: "#fff"
            },

            error: {
                light: "#e57373",
                main: "rgba(208, 2, 27, 1)",
                dark: "#d32f2f",
                contrastText: "#fff"
            },

            text:
            {
                primary: "rgba(0, 0, 0, 0.87)",
                secondary: "rgba(0, 0, 0, 0.54)",
                disabled: "rgba(0, 0, 0, 0.38)",
                hint: "rgba(0, 0, 0, 0.38)"
            }
        }
    }


);

export default theme;



// import { createMuiTheme } from "@material-ui/core/styles";

// export default function theme() extends React.Component{


//         const theme = createMuiTheme(

//             {
//                 palette: {
//                     common: { black: "#000", white: "#fff" },
//                     background: { paper: "#fff", default: "#fafafa" },
//                     primary: {
//                         light: "#7986cb",
//                         main: "rgba(34, 34, 109, 1)",
//                         dark: "#303f9f", "contrastText": "#fff"
//                     },
//                     secondary: {
//                         light: "rgba(220, 252, 242, 1)",
//                         main: "rgba(89, 139, 189, 1)",
//                         dark: "rgba(17, 27, 197, 1)",
//                         contrastText: "#fff"
//                     },
//                     error: {
//                         light: "#e57373",
//                         main: "rgba(235, 25, 28, 1)",
//                         dark: "#d32f2f",
//                         contrastText: "#fff"
//                     },
//                     text: {
//                         primary: "rgba(0, 0, 0, 0.87)",
//                         secondary: "rgba(0, 0, 0, 0.54)",
//                         disabled: "rgba(0, 0, 0, 0.38)",
//                         hint: "rgba(0, 0, 0, 0.38)"
//                     }
//                 }
//             }

//         );


// }
