import ProductList from "./ProductList";
import TabComponent from "./TabComponent";

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product Name</h1>
      <p className="text-gray-700 mb-6">Product details go here.</p>

      <TabComponent />
      <ProductList />
    </div>
  );
}

export default App;
