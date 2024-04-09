import {useParams} from "react-router-dom";
import {Box, Button, IconButton, Tab, Tabs, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {shades} from "../../theme";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import {addToCart} from "../../state";
import Item from "../../components/Item";

const ItemDetails = () => {
    const dispatch = useDispatch();
    const {itemId} = useParams();
    const [value, setValue] = useState("description");
    const [count, setCount] = useState(1);
    const [item, setItem] = useState(null);
    const [items, setItems] = useState([]);

    const changeHandler = (event, newValue) => {
        setValue(newValue);
    }

    async function getItem(itemId) {
        const itemResponse = await fetch(`http://localhost:1337/api/items/${itemId}?populate=image`);
        const item = await itemResponse.json();

        setItem(item.data);
    }

    async function getRelatedItems() {
        // Just grab first several items, no sophisticated algorithm applies :)
        const itemsResponse = await fetch('http://localhost:1337/api/items?populate=image');    // Populate includes images in the item response
        const items = await itemsResponse.json();

        setItems(items.data);
    }

    useEffect(() => {
        getItem(itemId);
        getRelatedItems();
    }, [itemId]);

    return (
        <Box
            width="80%"
            m="80px auto"
        >
            <Box
                display="flex"
                flexWrap="wrap"
                columnGap="40px"
            >
                {/* IMAGE SECTION */}
                <Box flex="1 1 40%" mb="40px">
                    <img
                        alt={item?.attributes?.name}
                        width="100%"
                        height="100%"
                        src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                        style={{objectFit: "contain"}}
                    />
                </Box>

                {/* ACTIONS SECTION */}
                <Box flex="1 1 50%" mb="40px">
                    <Box dispaly="flex" justifyContent="space-between">
                        <Box>Home/Item</Box>
                        <Box>Prev Next</Box>
                    </Box>

                    <Box m="65px 0 25px 0">
                        <Typography variant="h3">{item?.attributes?.name}</Typography>
                        <Typography>{item?.attributes?.price}</Typography>
                        <Typography sx={{mt: "20px"}}>
                            {item?.attributes.longDescription[0].children[0].text}
                        </Typography>
                    </Box>

                    <Box
                        display="flex"
                        alignItems="center"
                        minHeight="50px"
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            border={`1.5px solid ${shades.neutral[300]}`}
                            mr="20px"
                            p="2px 5px"
                        >
                            <IconButton onClick={() => setCount(currentCount => Math.max(currentCount - 1, 1))}>
                                <RemoveIcon/>
                            </IconButton>
                            <Typography sx={{p: "0 5px"}}>{count}</Typography>
                            <IconButton onClick={() => setCount(currentCount => currentCount + 1)}>
                                <AddIcon/>
                            </IconButton>
                        </Box>

                        <Button
                            sx={{
                                backgroundColor: "#222222",
                                color: "white",
                                borderRadius: 0,
                                minWidth: "150px",
                                padding: "10px 40px"
                            }}
                            onClick={(() => dispatch(addToCart({item: {...item, count}})))}
                        >
                            ADD TO CART
                        </Button>
                    </Box>

                    <Box>
                        <Box m="20px 0 5px 0" display="flex">
                            <FavoriteBorderOutlinedIcon />
                            <Typography sx={{ml: "5px"}}>ADD TO WISHLIST</Typography>
                        </Box>
                        <Typography>CATEGORIES: {item?.attributes.category}</Typography>
                    </Box>
                </Box>
            </Box>

            {/* INFORMATION */}
            <Box m="20px 0">
                <Tabs value={value} onChange={changeHandler}>
                    <Tab label="DESCRIPTION" value="description" />
                    <Tab label="REVIEWS" value="reviews" />
                </Tabs>

                <Box display="flex" flexWrap="wrap" gap="15px">
                    {value === "description" && (
                        <div>{item?.attributes.longDescription[0].children[0].text}</div>
                    )}
                    {value === "reviews" && (
                        <div>Reviews ... ... ...</div>
                    )}
                </Box>
            </Box>

            {/* RELATED PRODUCTS */}
            <Box mt="50px" width="100%">
                <Typography variant="h3" fontWeight="bold">
                    RELATED PRODUCTS
                </Typography>
                <Box
                    mt="20px"
                    display="flex"
                    flexWrap="wrap"
                    columnGap="1.33%"
                    justifyContent="space-between"
                    >
                    {items.slice(0, 4).map(item => (
                        <Item key={item.id} item={item} />
                    ))}
                </Box>
            </Box>
        </Box>
    )
};

export default ItemDetails;