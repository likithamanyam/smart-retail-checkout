import { useState } from "react";
import { motion } from "framer-motion";

import ItemForm from "../components/ItemForm";
import ItemList from "../components/ItemList";
import BillSummary from "../components/BillSummary";

function Checkout() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (index) => {
    setItems(
      items.filter((_, i) => i !== index)
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <div className="container py-5">

      <motion.div
        className="card shadow-lg p-4"
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
      >
        <div className="text-center mb-5">

          <h1 className="main-title">
            🛒 Smart Retail Checkout
          </h1>

          <p className="sub-title">
            Fast • Accurate • Intelligent Billing
          </p>

        </div>

        <ItemForm addItem={addItem} />

        <ItemList
          items={items}
          deleteItem={deleteItem}
        />

        <BillSummary items={items} />

        {items.length > 0 && (
          <div className="text-center mt-4">

            <button
              className="btn btn-danger"
              onClick={clearCart}
            >
              🗑️ Clear Cart
            </button>

          </div>
        )}

        <div className="footer-text">
          Smart Retail Checkout © 2026
        </div>

      </motion.div>

    </div>
  );
}

export default Checkout;