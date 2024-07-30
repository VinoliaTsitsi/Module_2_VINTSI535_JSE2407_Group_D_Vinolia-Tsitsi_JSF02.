<script>
    export let product;
  </script>
  
  <div class="product-card">
    <img src={product.image} alt={product.title} class="product-image" />
    <h2 class="product-title">{product.title}</h2>
    <p class="product-price">R{product.price}</p>
    <p class="product-category">Category: {product.category}</p>
  </div>
  
  <style>
    .product-card {
      border: 1px solid #ccc;
      border-radius: 8px;
      padding:0.5rem 1rem;
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s;
      max-height: 400px;
      overflow: hidden;
    }
  
    .product-card:hover {
      transform: scale(1.05);
      background-color: #6b7280;
    }
  
    .product-image {
      width: 60%;
      height: auto;
      border-radius: 8px 8px 0 0;
    }
  
    .product-title {
      font-size: 1.2rem;
      margin: 0.5rem 0;
    }
  
    .product-price {
      color: #2c3e50;
      font-weight: bold;
      margin-bottom: 1rem;
    }
  </style>
  