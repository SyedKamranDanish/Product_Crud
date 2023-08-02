import React, { useState } from "react";
import "./Operations.css";


const initialProductList = [
  {
    Id: 1,
    product_name: "Laptop",
    price: 7500,
    qty: 10,
    img: "imagepath",
  },
];

const ProductManagement = () => {
  const [productList, setProductList] = useState(initialProductList);
  const [newProduct, setNewProduct] = useState({
    Id: "",
    product_name: "",
    price: 0,
    qty: 0,
    img: "",
  });

  const handleCreate = () => {
    if (newProduct.product_name && newProduct.price && newProduct.qty) {
      setNewProduct({ ...newProduct, Id: productList.length + 1 });
      setProductList([...productList, newProduct]);
      setNewProduct({
        Id: "",
        product_name: "",
        price: 0,
        qty: 0,
        img: "",
      });
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const handleRead = () => {
    console.log("Product List:");
    productList.forEach((product) => {
      console.log(`
        ID: ${product.Id},
        Product Name: ${product.product_name},
        Price: $${product.price},
        Quantity: ${product.qty},
        Image: ${product.img}
      `);
    });
  };



  const handleUpdate = () => {
    if (
      newProduct.Id &&
      newProduct.product_name &&
      newProduct.price &&
      newProduct.qty
    ) {
      const updatedList = productList.map((product) =>
        product.Id === newProduct.Id ? { ...newProduct } : product
      );
      setProductList(updatedList);
      setNewProduct({
        Id: 0,
        product_name: "",
        price: 0,
        qty: 0,
        img: "",
      });
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const handleDelete = () => {
    if (newProduct.Id) {
      const updatedList = productList.filter(
        (product) => product.Id !== newProduct.Id
      );
      setProductList(updatedList);
      setNewProduct({
        Id: 0,
        product_name: "",
        price: 0,
        qty: 0,
        img: "",
      });
    } else {
      alert("Please enter the ID of the product you want to delete.");
    }
  };

  return (
    <div className="maindiv">
      <h1>Product Management</h1>
      <form>
        <div>
          <label className="lblone ">Product Name:</label>
          <input className="pname"
            type="text"
            value={newProduct.product_name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, product_name: e.target.value })
            }
          />
        </div>
        <div>
          <label className="lbltwo">Price:</label>
          <input className="pname"
            type="number"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: Number(e.target.value) })
            }
          />
        </div>
        <div>
          <label className="lblthree ">Quantity:</label>
          <input className="pname"
            type="number"
            value={newProduct.qty}
            onChange={(e) =>
              setNewProduct({ ...newProduct, qty: Number(e.target.value) })
            }
          />
        </div>
        <div>
          <label className="lblfour">Image:</label>
          <input className="pname"
            type="text"
            value={newProduct.img}
            onChange={(e) =>
              setNewProduct({ ...newProduct, img: e.target.value })
            }
          />
        </div>
      </form>
      <div className="d-flex ps-4 pt-2 pb-5">
        <div>
        <button className="btn1" onClick={handleCreate}>Create</button>
        </div>
        <div className="ps-4">
        <button className="btn1" onClick={handleRead}>Read</button>
        </div>
        <div className="ps-4">
        <button className="btn1" onClick={handleUpdate}>Update</button>
        </div>
        <div className="ps-4">
        <button className="btn1" onClick={handleDelete}>Delete</button>
        </div>
      </div>      
      <div style={{ marginBottom: "10px" }}>
        <label>Product ID for Update/Delete:</label>
        <input
          type="number"
          value={newProduct.Id}
          onChange={(e) =>
            setNewProduct({ ...newProduct, Id: Number(e.target.value) })
          }
        />
      </div>

      <div className="list">
        <h2>Product List:</h2>
        {productList.map((product) => (
          <div key={product.Id}>
            <p>ID: {product.Id}</p>
            <p>Product Name: {product.product_name}</p>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.qty}</p>
            <p>Image: {product.img}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductManagement;
