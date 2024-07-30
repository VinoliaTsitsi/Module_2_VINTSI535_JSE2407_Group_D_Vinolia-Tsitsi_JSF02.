<!-- src/routes/ProductDetail.svelte -->
<script>
    import { onMount } from 'svelte';
    import { navigate } from 'svelte-routing';
  
    export let productId;
    let product = null;
    let loading = true;
    let error = null;
  
    const fetchProduct = async () => {
      loading = true;
      error = null;
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        product = await response.json();
      } catch (err) {
        error = err.message;
      } finally {
        loading = false;
      }
    };
  
    onMount(() => {
      fetchProduct();
    });
  
    const goBack = () => {
      navigate('/')
    };
  </script>
  
  <div class="product-detail">
    {#if loading}
      <p>Loading...</p>
    {:else if error}
      <p class="text-red-500">{error}</p>
    {:else if !product}
      <p>Product not found.</p>
    {:else}
      <button on:click={goBack} class="back-button">Back to Products</button>
      <img src={product.image} alt={product.title} class="product-image" />
      <h1 class="product-title">{product.title}</h1>
      <p class="product-description">{product.description}</p>
      <p class="product-price">${product.price}</p>
      <p class="product-category">Category: {product.category}</p>
      <p class="product-rating">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
    {/if}
  </div>
  
  <style>
    .product-detail {
      padding: 1rem;
      background-color: #f9f9f9;
      max-width: 800px;
      margin: 0 auto;
    }
  
    .product-image {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }
  
    .product-title {
      font-size: 2rem;
      font-weight: bold;
      margin-top: 1rem;
    }
  
    .product-description {
      margin: 1rem 0;
      font-size: 1rem;
    }
  
    .product-price {
      font-size: 1.2rem;
      color: #333;
    }
  
    .product-category {
      font-size: 1rem;
      color: #555;
    }
  
    .product-rating {
      font-size: 1rem;
      color: #777;
    }
  
    .back-button {
      background-color: #007bff;
      color: white;
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      cursor: pointer;
      margin-bottom: 1rem;
      display: inline-block;
    }
  
    .back-button:hover {
      background-color: #0056b3;
    }
  </style>
  