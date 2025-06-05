import React, { useState } from "react";
// import { uuid } from "uuidv4";

const AddRecipi = () => {

   const url ="http://localhost:3000/recipes"

  const [formData, setFormData] = useState({
    pic: "",
    name: "",
    ingredients: "",
    tag: "",
  });

  async function handleForm(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });


    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

  }

  //   async function handleReg() {
  //     try {
  //       const res = await formData(
  //         formData.name,
  //         formData.pic,
  //         formData.tag,
  //         formData.ingredients
  //       );
  //     } catch (error) {
  //       console.log(error.code);
  //       console.log(error.message);
  //     }
  //   }

  return (
    <>
      <div className="container">
        <input type="text" placeholder="pic" name="pic" onChange={handleForm} />
        <input
          type="name"
          placeholder="name"
          name="name"
          onChange={handleForm}
        />
        <input
          type="name"
          placeholder="ingredients"
          name="ingredients"
          onChange={handleForm}
        />
        <input type="name" placeholder="tag" name="tag" onChange={handleForm} />
        <button type="submit" onClick={handleForm}>
          ➕
        </button>
      </div>
    </>
  );
};

export default AddRecipi;
