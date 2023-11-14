import products from '../script/data.js';

function Sortedlist() {
  return (
    <ul>
        {products
            .sort((a, b) => b.price-a.price)
            .map((product, idx) => (
            <li key={idx}> {product.title} </li>
        ))}
    </ul>
  )
}

export default Sortedlist;
