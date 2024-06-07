import './Delivery.css';

function Delivery() {
  return (
    <div className="delivery-container">
      <section className="delivery-options">
        <h2>Delivery options</h2>
        <ul>
          <li>Standard delivery - 3-5 business days</li>
          <li>Express delivery - 24 hours</li>
          <li>Pickup from the store</li>
        </ul>
      </section>
      <section className="delivery-form">
        <h2>Order delivery</h2>
        <form action="submit.php" method="post">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="address">Adress:</label>
          <textarea id="address" name="address" rows="4" required></textarea>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />
          <button type="submit">Order</button>
        </form>
      </section>
    </div>
  );
}

export default Delivery;