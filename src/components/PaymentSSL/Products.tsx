import React from 'react'

const products = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function Products() {
    return (
        <div>
            <p> List of all products !! </p>
            {
                products.map(data => {
                    
                })
            }

        </div>
    )
}
