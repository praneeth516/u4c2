import { useState } from "react"
import './AddHouse.css'

export const AddHouse = (props) => {

  const [form, setform] = useState({ name: "", ownerName: "", address: "", areaCode: "", rent: "", image: "", preferredTenants: "" });
  const [checkbox, setcheckbox] = useState({ bachelor: false, married: false })

  var tenents = ""

  const submithandler = (event) => {
    event.preventDefault();
    if (checkbox.bachelor === false && checkbox.married === false) {
      alert("select atleast one preferredTenant")
    }
    else {

      fetch("http://localhost:8080/houses", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...form, id: Math.floor(Math.random() * 90000) + 10000 })
      }).then(res => res.json()).then(data => console.log(data))
      props.submit();
      console.log(form)
    }
  }

  const changehandler = ({ target: { name, value } }) => {
    console.log(value, name)
    setform((prev) => ({ ...prev, [name]: value }))
  }
  const checkboxhandler = ({ target: { checked, name } }) => {
    setcheckbox((prev) => ({ ...prev, [name]: checked }))
    if (name === "bachelor")
      checked ? tenents = form.preferredTenants + "bachelor " : tenents = form.preferredTenants.replace("bachelor ", "");
    if (name === "married")
      checked ? tenents = form.preferredTenants + "married " : tenents = form.preferredTenants.replace("married ", "");
    setform((prev) => ({ ...prev, preferredTenants: tenents }))
  }
  return (
    <div className="addHouseContainer" onSubmit={submithandler}>
      <form>
        <label>name</label>
        <input type="text" className="name" name="name" value={form.name} onChange={changehandler} required />
        <br />
        <label>ownerName</label>
        <input value={form.ownerName} type="text" className="ownerName" name="ownerName" onChange={changehandler} required />
        <br />
        <label>address</label>
        <input value={form.address} type="text" className="address" name="address" onChange={changehandler} required />
        <br />
        <label>areaCode</label>
        <input value={form.areaCode} type="text" className="areaCode" name="areaCode" onChange={changehandler} required />
        <br />
        <label>rent</label>
        <input value={form.rent} type="text" className="rent" name="rent" onChange={changehandler} required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input checked={checkbox.bachelor} type="checkbox" className="bachelor" name="bachelor" onChange={checkboxhandler} />
        <br />
        <label>married</label>
        <input checked={checkbox.married} type="checkbox" className="married" name="married" onChange={checkboxhandler} />
        <br />
        <label>image</label>
        <input value={form.image} type="text" className="image" name="image" onChange={changehandler} required />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};

