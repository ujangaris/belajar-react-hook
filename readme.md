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

