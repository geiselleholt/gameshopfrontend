import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateForm() {
  const user = "681a82a2fbcefc8403b765c7";
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    qty: 0,
    price: 0.0,
    desc: "",
    img: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (
        formData.title &&
        formData.category &&
        formData.desc &&
        formData.img
      ) {
        let res = await axios.post("http://localhost:3000/api/game", formData, {
          headers: { token: user },
        });
        nav("/");
      } else {
        return alert(`Fill in ALL Fields`);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} id="create">
        <h3>Add A New Game</h3>
        <label>
          Title:
          <input
            onChange={handleChange}
            type="text"
            name="title"
            placeholder="Ex: Monopoly"
            value={formData.title}
          />
        </label>
        <label>
          Category:
          <select
            onChange={handleChange}
            name="category"
            id="category"
            value={formData.category}
          >
            <option value="">Choose One</option>
            <option value="Board">Board</option>
            <option value="Dice">Dice</option>
            <option value="Card">Card</option>
            <option value="Outdoor">Outdoor</option>
            <option value="Video">Video</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          Quantity:
          <input
            onChange={handleChange}
            type="number"
            name="qty"
            min={0}
            placeholder="Minimun 0"
            value={formData.qty}
          />
        </label>
        <label>
          Price:
          <input
            onChange={handleChange}
            type="number"
            name="price"
            placeholder="Minimun $0.00"
            value={formData.price}
          />
        </label>
        <label>
          {" "}
          Description:
          <input
            onChange={handleChange}
            type="textarea"
            name="desc"
            placeholder="Hustle harder..."
            value={formData.desc}
          />
        </label>
        <label>
          Image:
          <input
            onChange={handleChange}
            type="text"
            name="img"
            placeholder="Image URL"
            value={formData.img}
          />
        </label>
        <input
          id="submit"
          onChange={handleChange}
          type="submit"
          value="Add Game"
        />
        <button>Cancel</button>
      </form>
    </>
  );
}
