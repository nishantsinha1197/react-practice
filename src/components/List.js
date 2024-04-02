import React, { useState } from 'react'

function List() {
    const array = [
        { id: 1, title: 'Wings of Fire', author: 'Dr. A.P.J. Abdul Kalam' },
        { id: 2, title: 'Pride and Prejudice', author: 'Jane Austen' },
        { id: 3, title: 'Two States', author: 'Chetan Bhagat' }
    ]
    const [blogs, setBlogs] = useState(array)
    return (
        <div>
            {
                blogs.map((item) => {
                    return (
                        <div key={item.id} style={{backgroundColor:item.id%2===0?'red':'blue'}}>
                            <h2>{item.title}</h2>
                            <p>{item.author}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default List
