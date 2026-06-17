import { useState } from "react";
import {
  FaBox,
  FaRupeeSign,
  FaSortNumericUp,
} from "react-icons/fa";

function ItemForm({ addItem }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !name.trim() ||
      price <= 0 ||
      quantity <= 0
    ) {
      alert("Please enter valid values.");
      return;
    }

    addItem({
      name,
      price: Number(price),
      quantity: Number(quantity),
    });

    setName("");
    setPrice("");
    setQuantity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-3 mb-4">

        {/* Item Name */}
        <div className="col-md-4">
          <div className="input-group">
            <span className="input-group-text">
              <FaBox />
            </span>

            <input
              type="text"
              className="form-control"
              placeholder="Item Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />
          </div>
        </div>

        {/* Price */}
        <div className="col-md-3">
          <div className="input-group">
            <span className="input-group-text">
              <FaRupeeSign />
            </span>

            <input
              type="number"
              className="form-control"
              placeholder="Price"
              value={price}
              onChange={(e) =>
                setPrice(e.target.value)
              }
            />
          </div>
        </div>

        {/* Quantity */}
        <div className="col-md-3">
          <div className="input-group">
            <span className="input-group-text">
              <FaSortNumericUp />
            </span>

            <input
              type="number"
              className="form-control"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) =>
                setQuantity(e.target.value)
              }
            />
          </div>
        </div>

        {/* Add Button */}
        <div className="col-md-2">
          <button
            className="btn btn-primary w-100 fw-bold"
            type="submit"
          >
            ➕ Add Item
          </button>
        </div>

      </div>
    </form>
  );
}

export default ItemForm;