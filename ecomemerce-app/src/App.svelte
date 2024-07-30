<script>
  import Header from './components/Header.svelte';
  import ProductList from "./components/ProductsList.svelte";
  import { Router, Route } from 'svelte-routing';
  //import ProductDetail from './routes/[id].svelte';
</script>

<main>
  <Header />
  <Router>
    <Route path="/" component={ProductList} />
  </Router>
</main>

<style>
  main {
    padding: 1rem;
    background-color: #ebf8ff;
  }
</style>
