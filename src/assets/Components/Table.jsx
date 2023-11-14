import products from '../script/data.js';

function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Rate</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {
            products.map((product,i) => (
                <tr key={i}>
                    <td>{product.id}</td>
                    <td>{product.title}</td>
                    <td>$ {product.price}</td>
                    <td>{product.category}</td>
                   

                </tr>
            ))
        }
      </tbody>
    </table>
   
  )
}

export default Table;
