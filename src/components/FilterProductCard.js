import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
function FilterProductCard() {
    const [products, setProducts] = useState([])
    const [searchTerm,setSearchTerm] = useState('')
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
    function searchHandler(e){
        setSearchTerm(e.target.value)
        console.log(e.target.value);
    }

    const filteredProducts = products.filter((item) => {
        return item.title.toLowerCase().includes(searchTerm);
    });
    console.log(filteredProducts);
    return (
        <>
            <h1 style={{textAlign:'center'}}>E-COM STORE</h1>
            <input type='text' placeholder='Search your product' style={{marginLeft:"130px"}} onChange={searchHandler}/>
            <div style={{display:'flex',flexWrap:'wrap',justifyContent:"center"}}>
            {
                filteredProducts.map((item, index) => (
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
                                {item.title}
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

export default FilterProductCard
