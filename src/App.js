import ImageSlider from "./component/imageSlider";

function App() {
  return (
    <ImageSlider
      url={"https://picsum.photos/v2/list"}
      page={"1"}
      limit={"10"}
    />
  );
}

export default App;
