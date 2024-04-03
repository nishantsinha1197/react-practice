import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
function FilterProductCard() {
    const [products, setProducts] = useState([])
    const [searchTerm,setSearchTerm] = useState('')
    const [sortOption,setSortOption] = useState('A-Z')
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
    function handleSortChange(e){
        setSortOption(e.target.value)
    }
    const sortedProducts = [...products]
    console.log(sortedProducts);

    switch(sortOption){
        case 'A-Z':
            sortedProducts.sort((a,b)=>a.title.localeCompare(b.title))
            break;
        case 'Z-A':
            sortedProducts.sort((a,b)=>b.title.localeCompare(a.title))
            break;
        case '1-9':
            sortedProducts.sort((a,b)=>a.price-b.price)
            break;
        case '9-1':
            sortedProducts.sort((a,b)=>b.price-a.price)
            break;
        default:
            break
    }
    const filteredProducts = sortedProducts.filter((item) => {
        return item.title.toLowerCase().includes(searchTerm);
    });
    console.log(filteredProducts);
    return (
        <>
            <h1 style={{textAlign:'center'}}>E-COM STORE</h1>
            <input type='text' placeholder='Search your product' style={{marginLeft:"140px"}} onChange={searchHandler}/>
            <select onChange={handleSortChange}>
                <option value='A-Z'>A-Z</option>
                <option value='Z-A'>Z-A</option>
                <option value='1-9'>1-9</option>
                <option value='9-1'>9-1</option>
            </select>
            <div style={{display:'flex',flexWrap:'wrap',justifyContent:"center"}}>
            {
                filteredProducts.map((item, index) => (
                    <Card key={index} style={{ width: '300px' , height:"350px", margin:'10px', border:'1px black solid' }}>
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
