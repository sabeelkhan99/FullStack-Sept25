import './App.css';
import JSXDemo from './components/JSXDemo';
import Product from './components/Product';

function App() {

    const products = [
        {
            name: "Macbook Air",
            price: 100,
            description: "This is some random description about this product",
            image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            name: "Macbook Pro",
            price: 200,
            description: "This is some random description about this product",
            image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            name: "Macbook Pro M1",
            price: 300,
            description: "This is some random description about this product",
            image: "https://plus.unsplash.com/premium_photo-1681666713728-9ed75e148617?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            name: "Macbook Pro M4",
            price: 400,
            description: "This is some random description about this product",
            image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D"
        },
         {
            name: "Macbook Air M1",
            price: 500,
            description: "This is some random description about this product",
            image: "https://images.unsplash.com/photo-1597673030062-0a0f1a801a31?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY2Jvb2t8ZW58MHx8MHx8fDA%3D"
        }
    ]


    return <section>

        <JSXDemo/>


        {
            products.map((product) => {
                return <Product
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    image={product.image}
                />
            })
        }
    </section>
}

export default App
