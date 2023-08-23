import { Avatar, Grid, List, ListItem, ListItemAvatar } from "@mui/material";
import { Product } from "../../app/modules/product";
import ProductCard from "./ProductCard";

interface Props{
    products: Product[];
}

export default function ProductList({products}: Props){
    return (
        <Grid container spacing={4}>
            {
                products.map(product => (
                    <Grid item xs={3} key={product.id}>
                        <ProductCard product={product} key={product.id}/>
                    </Grid>
                ))}
        </Grid>
    )
}