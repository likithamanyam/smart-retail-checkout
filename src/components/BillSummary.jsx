function BillSummary({ items }) {
  const cartTotal = items.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const discount =
    cartTotal > 1000
      ? cartTotal * 0.1
      : 0;

  const taxableAmount =
    cartTotal - discount;

  const tax =
    taxableAmount * 0.18;

  const finalBill =
    taxableAmount + tax;

  return (
    <div className="summary-card mt-4">

      <h4 className="mb-3">
        💳 Billing Summary
      </h4>

      {discount > 0 && (
        <div className="alert alert-success mb-3">
          🎉 Special Offer Applied!
          10% Discount on orders above ₹1000
        </div>
      )}

      <div className="d-flex justify-content-between mb-2">
        <span>🛒 Cart Total</span>
        <strong>
          ₹{cartTotal.toFixed(2)}
        </strong>
      </div>

      <div className="d-flex justify-content-between mb-2">
        <span>🏷️ Discount (10%)</span>
        <strong className="text-success">
          - ₹{discount.toFixed(2)}
        </strong>
      </div>

      <div className="d-flex justify-content-between mb-2">
        <span>💰 Taxable Amount</span>
        <strong>
          ₹{taxableAmount.toFixed(2)}
        </strong>
      </div>

      <div className="d-flex justify-content-between mb-2">
        <span>🧾 GST (18%)</span>
        <strong>
          ₹{tax.toFixed(2)}
        </strong>
      </div>

      <hr />

      <div className="d-flex justify-content-between align-items-center">
        <h4>Final Bill</h4>

        <h3 className="text-primary fw-bold">
          ₹{finalBill.toFixed(2)}
        </h3>
      </div>

    </div>
  );
}

export default BillSummary;