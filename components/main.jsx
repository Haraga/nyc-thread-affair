import ProductTile from "./catalog/product-tile";

export default function Main() {
  return (
    <main className="content">
      <header className="content-header"></header>

      <section className="container">
        <ProductTile></ProductTile>
      </section>

      <section className="content-main">
        <section className="home-catalog-preview container">

        </section>

        <section className="home-newsletter"></section>

        <section className="home-payment container">

          <header>
            <h1 className="section-title">
              <span>How to</span> Pay
            </h1>
          </header>

          <ul>
            <li>
              <img src="/images/payment/amazon.jpg" alt="" />
            </li>

            <li>
              <img src="/images/payment/amazon.jpg" alt="" />
            </li>

            <li>
              <img src="/images/payment/amazon.jpg" alt="" />
            </li>

            <li>
              <img src="/images/payment/amazon.jpg" alt="" />
            </li>

            <li>
              <img src="/images/payment/amazon.jpg" alt="" />
            </li>

            <li>
              <img src="/images/payment/amazon.jpg" alt="" />
            </li>

            <li>
              <img src="/images/payment/amazon.jpg" alt="" />
            </li>
          </ul>

        </section>
      </section>
    </main>);
}
