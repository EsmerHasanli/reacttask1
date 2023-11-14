import products from '../script/data.js';

function Card() {
  const highestPriced = products
    .slice()
    .sort((a, b) => b.price - a.price)[0];

  return (
    <div>
      {highestPriced && (
        <div>
          <h3>{highestPriced.title}</h3>
          <h2>{highestPriced.price}</h2>
          <p>{highestPriced.description}</p>
        </div>
      )}
    </div>
  );
}

export default Card;
