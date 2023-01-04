import "../css/Main.css";
import Banner from "../components/Banner";
import MenuBar from "../components/MenuBar";
import ItemWrap from "../components/ItemWrap";

function Main() {
  return (
    <>
      <Banner text="Remove Backgrounds" />
      <div class="container">
        <section class="wrapper">
          <MenuBar />
          Put Remove Background components
        </section>
      </div>
    </>
  );
}

export default Main;
