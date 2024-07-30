<script>
  import { navigate } from 'svelte-routing'; 

    export let product;

    const goToDetail = () => {
      navigate ( `/product/${product.id}`);
    };
  </script>
  
  <button class="product-card" on:click={goToDetail} aria-label={`View details for ${product.title}`}>
    <img src={product.image} alt={product.title} class="product-image" />
    <h2 class="product-title">{product.title}</h2>
    <p class="product-price">R{product.price}</p>
    <p class="product-category">Category: {product.category}</p>
  </button>
  
  <style>
.product-card {
  border: 1px solid #e0e0e0; 
  border-radius: 12px;
  padding: 1rem;
  background-color: #ffffff; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  transition: transform 0.3s ease, box-shadow 0.3s ease; 
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 400px; 
  overflow: hidden;
}

.product-card:hover {
  transform: translateY(-5px); 
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 50%;
  height: auto; 
  border-radius: 12px 12px 0 0; 
  object-fit: cover; 
  margin-bottom: 0.5rem; 
}

.product-title {
  font-size: 1.125rem;
  font-weight: 500; 
  color: #333; 
  margin: 0.5rem 0; 
  text-align: center; 
}

.product-price {
  font-size: 1.125rem; 
  color: #e74c3c; 
  font-weight: bold; 
  margin-bottom: 1rem; 
}

  </style>
  