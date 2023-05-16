import Layout from "@/components/Layout";
import data from "@/utils/data";
import { Button, Card, Grid, List, ListItem, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function Product() {
  const { slug } = useRouter().query;
  const product = data.products.find((item) => item.slug === slug);

  return product ? (
    <Layout title={product.name}>
      <div className="p-2 border-orange-bottom">
        <Link href="/"> Go To Home </Link>
      </div>
      <Grid container spacing={1} className="flex justify-start">
        <Grid item md={6} xs={12}>
          <Image
            src={product?.image}
            alt={product?.name}
            width={450}
            height={450}
          />
        </Grid>
        <Card className="mt-3"  item md={3} xs={12}>
          <List className="font-bold">
            <ListItem>Category : {product?.category}</ListItem>
            <ListItem>Brand : {product?.brand}</ListItem>
            <ListItem>
              Rting : {product?.rating} stars ({product?.numReviews} reviews )
            </ListItem>
            <ListItem>Category : {product?.category}</ListItem>
            <ListItem>
              Description : <Typography> {product?.description} </Typography>
            </ListItem>
          </List>
        </Card>
        <Grid container className="mt-3" item md={3} xs={12}>
          <Grid item>
          <List  className="font-bold w-100">
            <ListItem>Price :$ {product?.price}</ListItem>
            <ListItem>
              Status : {product?.countInStock > 0  ? "In Stock" : "Out of Stock"}
            </ListItem>
            <ListItem>
              <Button className="buttons text-black" variant="contained" >
                Add To Cart
              </Button>
            </ListItem>
          </List>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  ) : (
    <>not found</>
  );
}
