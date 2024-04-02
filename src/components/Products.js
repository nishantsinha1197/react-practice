import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
function ProductCard() {
    const [products, setProducts] = useState([])
    async function fetchProduct() {
        try {
            let response = await axios.get('https://dummyjson.com/products');
            setProducts(response.data.products);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchProduct()
    }, [])
    return (
        <>
            <h1 style={{textAlign:'center'}}>E-COM STORE</h1>
            {console.log(products)}
            <div style={{display:'flex',flexWrap:'wrap',justifyContent:"center"}}>
            {
                products.map((item, index) => (
                    // <div class="card" style={{width:'18rem'}} key={index}>
                    // <img src={item.images[0]} className="card-img-top" alt="..."/>
                    // <div class="card-body">
                    //     <h5 class="card-title">{item.title}</h5>
                    //     <p class="card-text">{item.description}</p>
                    //     <a href="#" class="btn btn-primary">Go somewhere</a>
                    // </div>
                    // </div>
                    <Card key={index} style={{ width: '300px' , height:"300px", margin:'10px', border:'1px black solid' }}>
                        <CardMedia
                            component="img"
                            alt="Image"
                            height="140"
                            image={item.images[0]}
                            title="Image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {item.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {item.description}
                            </Typography>
                            <Typography variant="body2" color="error" component="p">
                               $ {item.price}
                            </Typography>
                        </CardContent>
                    </Card>
                ))
            }
            </div>
        </>
    )
}

export default ProductCard
