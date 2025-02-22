// Sample dataset of products
const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1200, quantity: 5 },
    { id: 2, name: 'Keyboard', category: 'Electronics', price: 75, quantity: 10 },
    { id: 3, name: 'Notebook', category: 'Stationery', price: 2, quantity: 50 },
    { id: 4, name: 'Mouse', category: 'Electronics', price: 25, quantity: 20 },
    { id: 5, name: 'Pen', category: 'Stationery', price: 1, quantity: 100 },
  ];
  
  // 1. Destructuring Example (Object)
  const { name: firstProductName, price: firstProductPrice } = products[0]; // Renaming keys
  console.log(`First product: ${firstProductName}, Price: ${firstProductPrice}`);
  
  // 2. Destructuring Example (Array - less common, but possible)
  const [,, notebook] = products; // Skipping elements
  console.log("Third Product (Notebook):", notebook.name);
  
  
  // 3. Higher-Order Functions
  
  // a. Filter: Get only electronics products
  const electronics = products.filter(product => product.category === 'Electronics');
  console.log("Electronics Products:", electronics);
  
  // b. Map: Create an array of product names and prices
  const productDetails = products.map(({ name, price }) => ({ name, price })); // Destructuring within map
  console.log("Product Details (Name & Price):", productDetails);
  
  // c. Reduce: Calculate the total value of all products in stock (price * quantity)
  const totalValue = products.reduce((accumulator, { price, quantity }) => accumulator + price * quantity, 0);
  console.log("Total Value of Products in Stock:", totalValue);
  
  
  // 4. Combining filter, map, and reduce: Calculate the total value of electronics products
  const electronicsTotalValue = products
    .filter(product => product.category === 'Electronics')
    .map(({ price, quantity }) => price * quantity) // Extract the value
    .reduce((accumulator, value) => accumulator + value, 0);
  
  console.log("Total Value of Electronics Products:", electronicsTotalValue);
  
  
  
  // Example using const and arrow functions throughout:
  const getStationeryProducts = () => products.filter(product => product.category === 'Stationery');
  const stationeryProducts = getStationeryProducts();
  console.log("Stationery Products:", stationeryProducts);
  
  
  // Example demonstrating const correctly (can't reassign products):
  // products = [];  // This will cause an error!  const prevents reassignment.
  // products.push({id: 6, name: 'New Item'}); // This is fine, as we are modifying the array, not re-assigning it.
  
  let counter = 0;
  counter++; // This is allowed because we used let.