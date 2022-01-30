import Header from './Header'
import { useState } from 'react'
function AddProduct() {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  async function addProduct() {
    console.warn(name, file, price, description)
    const formData = new FormData();
    formData.append('file', file);
    formData.append('price', price);
    formData.append('name', name);
    formData.append('description', description);
    let result = await fetch("http://localhost:8000/api/add", {
      method: 'POST',
      body: formData
    });
    alert("Data has been saved")
    }
  return (
    <div>
      <Header />
      <h1>Please fill up the details...!</h1>
      <div className="col-sm-6 offset-sm-3">
        <br />
        <input type="text" className="form-control"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name of the product" /> <br />
        <input type="text" className="form-control"
        
          onChange={(e) => setFile(e.target.value)}

          placeholder="Images URL" /> <br />
        <input type="text" className="form-control"
          onChange={(e) => setPrice(e.target.value)}
          
          placeholder="Price In INR" /> <br />
           {/*  <input id='image' type='text' image={image} onChange={updateImage} /> */}
        <input type="text" className="form-control"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description..Complete details" /> <br />
        <button onClick={addProduct} className="btn btn-primary">Add Product</button>
      </div>
    </div>
  )
}

export default AddProduct