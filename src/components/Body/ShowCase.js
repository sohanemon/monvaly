import React from "react";
import ShowCaseType from "./ShowCaseType";
import Container from "react-bootstrap/Container";
function ShowCase(props) {
  const gros =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKl7rsBk7YuHOIqddl9SPZp3FdoE1p61y9Pbvx68jxUGcGM7njTpj5kgiTJUa8QvSf2qc&usqp=CAU";
  return (
    <Container fluid className="p-0">
      <h5>Mobiles</h5>
      <ShowCaseType
        src1="https://i.gadgets360cdn.com/products/large/redmi-note-10s-db-600x800-1620030866.jpg"
        src2="https://waltonbd.com/image/catalog/category-banner/mobile/smart-phone-half-block.jpg"
        src3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjle9eFZV7xtn1ctg14vXvznjm34R4o3zJ7g&usqp=CAU"
        src5="https://image01.realme.net/general/20210916/1631776475968.png"
        src6="https://cdn.dxomark.com/wp-content/uploads/medias/post-98620/Oppo-Reno6-5Gfeatured-image-packshot-review-Recovered-Recovered.jpg"
        src7="https://i.gadgets360cdn.com/products/large/redmi-note-10s-db-600x800-1620030866.jpg"
        src4="https://image01.realme.net/general/20210916/1631776475968.png"
        src8="https://cdn.dxomark.com/wp-content/uploads/medias/post-98620/Oppo-Reno6-5Gfeatured-image-packshot-review-Recovered-Recovered.jpg"
        src9="https://waltonbd.com/image/catalog/category-banner/mobile/smart-phone-half-block.jpg"
        src10="https://image01.realme.net/general/20210916/1631776475968.png"
        src11="https://cdn.dxomark.com/wp-content/uploads/medias/post-98620/Oppo-Reno6-5Gfeatured-image-packshot-review-Recovered-Recovered.jpg"
        src12="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjle9eFZV7xtn1ctg14vXvznjm34R4o3zJ7g&usqp=CAU"
      />
      <br />
      <h5>Bags</h5>
      <ShowCaseType
        src1="https://image.made-in-china.com/43f34j00DpcUPrazuBqI/Wholesale-China-Bagpack-Waterproof-Laptop-Backpack-Computer-Laptop-Bag-for-Man-Anti-Theft-Backpack.jpg"
        src2="https://sc04.alicdn.com/kf/HTB1CZfPkf2H8KJjy0Fcq6yDlFXaF.jpg"
        src3="https://image.made-in-china.com/2f0j00uQAYcpPGTRrh/2020-New-Hot-Products-Custom-Boy-Girls-Bagpack-Kids-Children-School-Bag-Backpack.jpg"
        src5="https://static-01.daraz.com.bd/p/33a816416e8d0e1ca6f5685d18f55dfe.jpg_340x340q80.jpg_.webp"
        src6="https://image.made-in-china.com/43f34j00DpcUPrazuBqI/Wholesale-China-Bagpack-Waterproof-Laptop-Backpack-Computer-Laptop-Bag-for-Man-Anti-Theft-Backpack.jpg"
        src7="https://sc04.alicdn.com/kf/HTB1CZfPkf2H8KJjy0Fcq6yDlFXaF.jpg"
        src4="https://image.made-in-china.com/2f0j00uQAYcpPGTRrh/2020-New-Hot-Products-Custom-Boy-Girls-Bagpack-Kids-Children-School-Bag-Backpack.jpg"
        src8="https://sc04.alicdn.com/kf/HTB1CZfPkf2H8KJjy0Fcq6yDlFXaF.jpg"
        src9="https://image.made-in-china.com/43f34j00DpcUPrazuBqI/Wholesale-China-Bagpack-Waterproof-Laptop-Backpack-Computer-Laptop-Bag-for-Man-Anti-Theft-Backpack.jpg"
        src10="https://image.made-in-china.com/43f34j00DpcUPrazuBqI/Wholesale-China-Bagpack-Waterproof-Laptop-Backpack-Computer-Laptop-Bag-for-Man-Anti-Theft-Backpack.jpg"
        src11="https://static-01.daraz.com.bd/p/33a816416e8d0e1ca6f5685d18f55dfe.jpg_340x340q80.jpg_.webp"
        src12="https://image.made-in-china.com/43f34j00DpcUPrazuBqI/Wholesale-China-Bagpack-Waterproof-Laptop-Backpack-Computer-Laptop-Bag-for-Man-Anti-Theft-Backpack.jpg"
      />
      <br />
      <h5>Grossary</h5>

      <ShowCaseType
        src2={gros}
        src1={gros}
        src3={gros}
        src5={gros}
        src6={gros}
        src7={gros}
        src4={gros}
        src8={gros}
        src9={gros}
        src10={gros}
        src11={gros}
        src12={gros}
      />
    </Container>
  );
}

export default ShowCase;
