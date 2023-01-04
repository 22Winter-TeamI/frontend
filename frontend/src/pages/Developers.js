import "../css/Main.css";
import Banner from "../components/Banner";
import MenuBar from "../components/MenuBar";
import ItemWrap from "../components/ItemWrap";

function Developers() {
  return (
    <>
      <Banner text="Developers" />
      <div class="container">
        <section class="wrapper">
          <MenuBar />
          <ItemWrap />
        </section>
      </div>
    </>
  );
}

export default Developers;
