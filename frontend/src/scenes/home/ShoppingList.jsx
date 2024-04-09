import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Box, Tab, Tabs, Typography, useMediaQuery} from "@mui/material";
import {setItems} from "../../state";
import Item from "../../components/Item";


const ShoppingList = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("all");
    const items = useSelector(state => state.cart.items);
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const changeHandler = (event, newValue) => {
        setValue(newValue);
    }

    async function getItems() {
        const itemsResponse = await fetch('http://localhost:1337/api/items?populate=image');    // Populate includes images in the item response
        const items = await itemsResponse.json();

        dispatch(setItems(items.data));
    }

    useEffect(() => {
        getItems();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    // Load only once since there is no paging implemented

    const filteredItems = value === "all" ?
        items :
        items.filter(item => item.attributes.category === value);

    return (
        <Box width="80%" margin="80px auto">
            <Typography variant="h3" textAlign="center">
                Our featured <b>products</b>
            </Typography>

            <Tabs
                textColor="primary"
                indicatorColor="primary"
                value={value}
                onChange={changeHandler}
                centered
                TabIndicatorProps={{ sx: { display: isNonMobile ? "block" : "none" } }}
                sx={{
                    m: "25px",
                    "& .MuiTabs-flexContainer": {
                        flexWrap: "wrap",
                    },
                }}
            >
                <Tab label="ALL" value="all"/>
                <Tab label="NEW ARRIVALS" value="newArrivals"/>
                <Tab label="BEST SELLERS" value="bestSellers"/>
                <Tab label="TOP RANKED" value="topRated"/>
            </Tabs>

            <Box
                margin="0 auto"
                display="grid"
                gridTemplateColumns="repeat(auto-fill, 300px)"
                justifyContent="space-around"
                rowGap="20px"
                columnGap="1.33%"
            >
                {filteredItems.map(item => (
                    <Item key={item.id} item={item} />
                ))}
            </Box>
        </Box>
    )
}

export default ShoppingList;