# React Hook

## Counter button class conponent

    Todo :
    1.  component/ClassCounter.jsx
        - buat class component ClassCounter
        - buat contructor
        - function incrments dari counter
        - pasang function incrementCount pada buton onClick
    2.  App.jsx
        import dan panggil ClassCounter
    3.  pengujian pada browser
        - klik button count, jika count terdapat penambahan nilai ketika diklik
          maka setup yang kita lakukan berhasil.

## Counter button functional conponent

    Todo :
    1.  component/HookCounter.jsx
        - buat functional component HookCounter
        - buat hook state
        - pasang function setCount pada buton onClick
    2.  App.jsx
        import dan panggil HookCounter
    3.  pengujian pada browser
        - klik button count, jika count terdapat penambahan nilai ketika diklik
          maka setup yang kita lakukan berhasil.

## useState with previous state

    Todo :
    1.  component/HookCounterTwo.jsx
        - buat functional component HookCounterTwo
        - buat function incrementFive yang didalamnya terdapat perulangan for
        - pasang  setCount pada buton onClick
        - pasang function incrementFive pada buton onClick
    2.  component/ClassCounterTwo.jsx
        - buat functional component ClassCounterTwo
        - buat constructor
        - buat function incrementCount
        - pasang function incrementCount pada buton onClick
    3.  App.jsx
        import dan panggil HookCounterTwo
        import dan panggil ClassCounterTwo
    4.  pengujian pada browser
        - klik button count pada Functional Counter , pada count terdapat penambahan  ketika diklik
            * increment menambah 1
            * increment kurang 1
            * increment 5 bertambah 5
        - klik button count pada Class Counter, nilai count akan bertambah 1 ketika di klik
        - jika semua featur diatas berjalan maka setup yang kita lakukan berhasil.

## useState with object

    Todo :
    1.  component/HookCounterThree.jsx
        - buat functional component HookCounterThree
        - buat hook state yang didalamnya object
        - buat sebuah form yang didalamnya ada dua buah form input
        - pasang method onChange yang menjalankan setName
        - Menampilkan teks yang berisi nilai dari state "firstName" & "lastname"
        - Menampilkan nilai dari state "name" dalam bentuk string JSON.
    2.  App.jsx
        import dan panggil HookCounterTree
    3.  pengujian pada browser
        - isi form firstname & lastname
          jika data pada browser tampil sesuai yang di input maka setup yang kita lakukan berhasil
          Your first name is ... , Your last name is...

## useState with array

    Todo :
    1.  component/HookCounterFour.jsx
        - buat functional component HookCounterFour
        - buat hook state yang didalamnya array kosong
        - buat sebuah function addItem
        - panggilfunction addItem di dalam buton onClick
        - buat setiap elemen list item (li) sesuai dengan data yang ada pada array.
    2.  App.jsx
        import dan panggil HookCounterFour
    3.  pengujian pada browser
        - klik button Add a number, jika ada angka rundom yang tambil ketika button di klik,
          maka setup yang kita lakukan berhasil.

## useEffect after render

    Todo :
    1.  component/ClassCounterOne.jsx
        - buat class component ClassCounterOne
        - buat constructor
        - buat component did mount
        - buat component did update
        - panggil setState pada button onClick
    2.  component/HookCounterOne.jsx
        - buat functional component HookCounterOne
        - deklarasi hook
        - use effect
        - pasang setCount pada button onClick
    3.  App.jsx
        import dan panggil ClassCounterOne
        import dan panggil HookCounterOne
    4.  pengujian pada browser
        - klik button click pada class counter one,
          jika ada angka bertambah 1 ketika button di klik,
          dan pada title nilai cunter bertambah 1 maka setup yang kita lakukan berhasil.

        - klik button click pada functional counter one,
          jika ada angka bertambah 1 ketika button di klik,
          dan pada title nilai cunter bertambah 1 maka setup yang kita lakukan berhasil.

## conditionally run effects

    Todo :
    1.  component/ClassCounterOne.jsx
        - buat kondisi untuk handle form input name
        - pasang onChange pada inputan
    2.  component/HookCounterOne.jsx
        - buat deklarasi hook name dan count
        - use effect
        - pasang onChange pada inputan
    3.  pengujian pada browser
        - klik button click pada class counter one,
          jika ada angka bertambah 1 ketika button di klik,
          dan pada title nilai cunter bertambah 1 maka setup yang kita lakukan berhasil.
        - pada form tulis sesuatu inputan , dan liat pada console

        - klik button click pada functional counter one,
          jika ada angka bertambah 1 ketika button di klik,
          dan pada title nilai cunter bertambah 1 maka setup yang kita lakukan berhasil.
        - pada form tulis sesuatu inputan , dan liat pada console
