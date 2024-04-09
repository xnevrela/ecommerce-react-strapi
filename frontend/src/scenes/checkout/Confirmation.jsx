import {Alert, AlertTitle, Box} from "@mui/material";


const Confirmation = () => {
    return (
        <Box m="90px auto" width="80%" height="50vh">
            <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                Tou have successfully made an order -{" "}
                <strong>Congrats on making your purchase</strong>
            </Alert>
        </Box>
    )
};

export default Confirmation;