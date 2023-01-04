import Banner from "../components/Banner";
import MenuBar from "../components/MenuBar";
import ResultPicture from "../components/ResultPicture";

function Gallery() {
  return (
    <>
      <Banner text="Gallery" />
      <div class="container">
        <section class="wrapper">
          <MenuBar />
          <div class="itemWrap">
            <ResultPicture title="내가 만든 사진 1" />
            <ResultPicture title="내가 만든 사진 2" />
            <ResultPicture title="내가 만든 사진 3" />
            <ResultPicture title="내가 만든 사진 4" />
            <ResultPicture title="내가 만든 사진 5" />
            <ResultPicture title="내가 만든 사진 6" />
          </div>
        </section>
      </div>
    </>
  );
}

export default Gallery;
