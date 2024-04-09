import {Box, Typography, useTheme} from "@mui/material";
import {shades} from "../../theme";


const Footer = () => {
    const {palette: {neutral}} = useTheme();

    return (
        <Box
            mt="70px"
            p="40px 0"
            backgroundColor={neutral.light}
        >
            <Box
                width="80%"
                m="auto"
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                rowGap="30px"
                columnGap="clamp(20px, 30px, 40px)"
            >
                <Box width="clamp(20%, 30%, 40%)">
                    <Typography variant="h4" fontWeight="bold" mb="30px" color={shades.secondary[500]}>ECOMMER</Typography>
                    <div>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam at arcu a est sollicitudin
                        euismod. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien
                        wisi sed libero. Integer in sapien. Etiam posuere lacus quis dolor. Nemo enim ipsam voluptatem
                        quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                        ratione voluptatem sequi nesciunt.
                    </div>
                </Box>

                <Box>
                    <Typography variant="h4" fontWeight="bold" mb="30px">About Us</Typography>
                    <Typography mb="30px">Carrier</Typography>
                    <Typography mb="30px">Out stores</Typography>
                    <Typography mb="30px">Terms & Conditions</Typography>
                    <Typography mb="30px">Privacy Policy</Typography>
                </Box>

                <Box>
                    <Typography variant="h4" fontWeight="bold" mb="30px">Customer Care</Typography>
                    <Typography mb="30px">Help Center</Typography>
                    <Typography mb="30px">Track Your Order</Typography>
                    <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
                    <Typography mb="30px">Returns & Refunds</Typography>
                </Box>

                <Box>
                    <Typography variant="h4" fontWeight="bold" mb="30px">Contact Us</Typography>
                    <Typography mb="30px">50 north Whatever Blvd, Washington, DC 10501</Typography>
                    <Typography mb="30px">Email: mredwardroh@gmail.com</Typography>
                    <Typography mb="30px">(222)333-4444</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer;