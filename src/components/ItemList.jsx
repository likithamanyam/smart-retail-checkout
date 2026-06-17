function ItemList({
  items,
  deleteItem,
}) {
  if (items.length === 0) {
    return (
      <p className="text-center text-muted">
        No items added yet.
      </p>
    );
  }

  return (
    <table className="table table-bordered">
      <thead className="table-dark">
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>₹{item.price}</td>
            <td>{item.quantity}</td>
            <td>
              ₹
              {item.price *
                item.quantity}
            </td>

            <td>
              <button
                className="btn btn-sm btn-danger"
                onClick={() =>
                  deleteItem(index)
                }
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ItemList;