import {Box, TextField, useMediaQuery} from "@mui/material";
import {getIn} from "formik";


const AddressForm = ({type, values, errors, touched, handleBlur, handleChange}) => {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const formattedName = field => `${type}.${field}`;
    const hasError = field =>
        Boolean(
            getIn(touched, formattedName(field)) && getIn(errors, formattedName(field))
        );
    const formattedError = field =>
        getIn(touched, formattedName(field)) && getIn(errors, formattedName(field))
    ;

    return (
        <Box
            display="grid"
            gap="15px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
                "& > div": {
                    gridColumn: isNonMobile ? undefined : "span 4"
                }
            }}
        >
            <TextField
                fullWidth
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name={formattedName("firstName")}
                error={hasError("firstName")}
                helperText={formattedError("firstName")}
                sx={{gridColumn: "span 2"}}
                />
            <TextField
                fullWidth
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name={formattedName("lastName")}
                error={hasError("lastName")}
                helperText={formattedError("lastName")}
                sx={{gridColumn: "span 2"}}
                />
            <TextField
                fullWidth
                type="text"
                label="Country"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.country}
                name={formattedName("country")}
                error={hasError("country")}
                helperText={formattedError("country")}
                sx={{gridColumn: "span 4"}}
                />
            <TextField
                fullWidth
                type="text"
                label="Street Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.street1}
                name={formattedName("street1")}
                error={hasError("street1")}
                helperText={formattedError("street1")}
                sx={{gridColumn: "span 2"}}
            />
            <TextField
                fullWidth
                type="text"
                label="Street Address 2 (optional)"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.street2}
                name={formattedName("street2")}
                error={hasError("street2")}
                helperText={formattedError("street2")}
                sx={{gridColumn: "span 2"}}
            />
            <TextField
                fullWidth
                type="text"
                label="City"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.city}
                name={formattedName("city")}
                error={hasError("city")}
                helperText={formattedError("city")}
                sx={{gridColumn: "span 2"}}
            />
            <TextField
                fullWidth
                type="text"
                label="State"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.state}
                name={formattedName("state")}
                error={hasError("state")}
                helperText={formattedError("state")}
                sx={{gridColumn: "1fr"}}
            />
            <TextField
                fullWidth
                type="text"
                label="ZIP Code"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.zipCode}
                name={formattedName("zipCode")}
                error={hasError("zipCode")}
                helperText={formattedError("zipCode")}
                sx={{gridColumn: "1fr"}}
            />
        </Box>
    )
}

export default AddressForm;