import { Dialog, DialogContent } from "@mui/material";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";

const App3 = () => (
    <Box bgcolor={{ sm: "red", md: 'green' }}>Test</Box>
)

const App2 = () => {
    const md = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const sm = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    return <>
        <Box sx={{ backgroundColor: sm ? "red" : "green" }}>
            Hello
        </Box>
        <Dialog open fullScreen={sm}>
            <DialogContent>
            </DialogContent>
        </Dialog>
    </>
}

const App = () => (
    <Box sx={(theme) => ({
        [theme.breakpoints.down("md")]: {
            backgroundColor: "green"
        },
        [theme.breakpoints.down("sm")]: {
            backgroundColor: "red"
        }
    })}>Hello everyone!</Box>
)


export default App;