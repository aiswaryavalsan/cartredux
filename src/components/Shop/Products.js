import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const productsList=[
    {id:'p1',title:'Test1',price:6.5,description:'This is a first product - amazing!'},
    {id:'p2',title:'Test2',price:10.3,description:'This is a second product - amazing!'},
    {id:'p3',title:'Test3',price:13.3,description:'This is a 3rd product - amazing!'},
]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {productsList.map((item)=>{
        return(
          <ProductItem
          key={item.id}
         id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        />
        )
      })}
        
      </ul>
    </section>
  );
};

export default Products;
