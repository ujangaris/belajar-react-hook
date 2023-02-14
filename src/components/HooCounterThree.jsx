// rfce
import React, { useState } from "react"

function HooCounterThree() {
  // deklarasi hook object
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  })
  return (
    <div>
      {/* buat sebuah form yang didalamnya ada dua buah form input */}
      {/* pasang method onChange yang menjalankan setName */}
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
      </form>
      {/* Menampilkan teks yang berisi nilai dari state "firstName" & "lastname" */}
      <h2>Your first name is - {name.firstName}</h2>
      <h2>Your last name is - {name.lastName}</h2>
      {/* Menampilkan nilai dari state "name" dalam bentuk string JSON. 
      Ini digunakan untuk memeriksa apakah data state telah berhasil diubah ketika nilai input diubah. */}
      <h2>{JSON.stringify(name)}</h2>
    </div>
  )
}

export default HooCounterThree
