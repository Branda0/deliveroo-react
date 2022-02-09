const Pricing = ({ pricing }) => {
  return (
    <div className="bill">
      <div className="costs">
        <div>
          <span>Sous-total</span>
          <span>{pricing.subTotal.toFixed(2)} €</span>
        </div>
        <div>
          <span>Frais de livraison</span>
          <span>{pricing.delivery.toFixed(2)} €</span>
        </div>
      </div>
      <div className="total">
        <span>Total</span>
        <span>{(pricing.subTotal + pricing.delivery).toFixed(2)} €</span>
      </div>
    </div>
  );
};

export default Pricing;
