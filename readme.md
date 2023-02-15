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

## Run effects only once

    Todo :
    1.  component/ClassMouse.jsx
        - constructor
        - function logMousePosition
        - componentDidMount
        - tampilkan korn=dinat mose
    2.  component/HookMouse.jsx
        - buat deklarasi hook
        - function logMousePosition
        - use effect
        - tampilkan korn=dinat mose
    3.  App.js
        - import dan panggil ClassMouse
        - import dan panggil HookMouse
    4.  pengujian pada browser
        - gerakan mouse , jika setup yang kita lakukan berhasil maka nilai kordinat akan berubah2
        - liat juga pada console,

## useEffect with cleanup

    Todo :
    1.  component/MouseContainer.jsx
        - deklarasi hook
        - button setDisplay  dengan kondisi
        - panggil dan import HookMouse
    2.  App.js
        - import dan panggil MouseContainer
    3.  component/HookMouse.jsx
        - component will mount
    4.  component/ClassMouse.jsx
        - component will mount
          component will mount sama seperti yang kita lakukan diatas
        - function logMousePosition
        - use effect
        - tampilkan korn=dinat mose
    5.  pengujian pada browser
        - gerakan mouse , jika setup yang kita lakukan berhasil maka nilai kordinat akan berubah2
        - liat juga pada console,
        - klik button toggle display, jika cotent menghilang maka setup yang kita lakukan berhasil

## useEffect with correct dependency

    Todo :
    1.  component/IntervalClassCounter.jsx
        - constructor
        - buat componentDidMount
        - buat componentWillUnmount
        - buat function tick
        - mencetak nilai count
    2.  component/IntervalHookCounter.jsx
        - deklarasikan hook
        - deklarasikan fungsi tick
        - buat useEffect
        - cetak count
    3.  App.js
        - import dan panggil IntervalClassCounter
        - import dan panggil IntervalHookCounter
    4.  pengujian pada browser
        - buka browser dan lihat ada nilai yang bertambah setiap 1detik

## fetching data with useEffect Part 1

    Todo :
    1.  install axios
        - npm install axios
    2. components/DataFetching.js
        - buat functional component DataFetching
        - buat deklarasi hook
        - buat useEffect yang didalamnya kita panggil api dari json place holder dengan get
        - tampilkan data dalam bentuk un order list dengan map
    3.  App.js
        - import dan panggil DataFetching
    4.  pengujian pada browser :
        - akan ada data yang tampil yakni data title, liat juga pada console

## fetching data with useEffect Part 2

    Todo :

    1. components/DataFetching.js
        - buat deklarasi hook untuk id
        - edit useEffect yang didalamnya kita panggil api dari json place holder dengan get berdasarkan id
        - pasang setId didalam onChange pada input text
        - tampilkan data dalam bentuk heading
    2.  pengujian pada browser :
        - akan ada data yang tampil yakni data title, masukan nilai 1d pada form
