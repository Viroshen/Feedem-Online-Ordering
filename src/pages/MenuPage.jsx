import React from 'react';

function MenuPage({ addItemToCart }) {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => addItemToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuPage;
