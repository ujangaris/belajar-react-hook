// rfce
import React, { useState } from "react"

function HookCounterFour() {
  // deklarasi hook
  const [items, setItems] = useState([])
  //   buat function addItem
  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        // mengalikan bilangan acak, Hasil nya dibulatkan ke bilangan integer,
        //kemudian atmbahkan 1 pada hasil di atas agar kita mendapatkan nilai integer antara 1 dan 10
        value: Math.floor(Math.random() * 10) + 1,
      },
    ])
  }
  return (
    <div>
      {/* panggilfunction addItem di dalam buton onClick */}
      <button onClick={addItem}>Add a number</button>
      <ul>
        {/* buat setiap elemen list item (li) sesuai dengan data yang ada pada array. */}
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  )
}

export default HookCounterFour
