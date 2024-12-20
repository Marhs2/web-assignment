const $ = element => document.querySelector(element);
const $$ = element => [...document.querySelectorAll(element)];

/*
find:value
findIndex:number
map : array
forEach:void
filter:array
some:boolean
every :boolean
reduce : any
includes:boolean
with :void
at :value
join:string
indexOf :number
reverse:array
slice:array
sort:void , toSorted:array
splice:array
*/

const $booksContent = $('.books-content')
const $bookAddBtn = $('.add-book')
const $bookAddLayer = $('.layer')
const $bookSearch = $('.book-search-section')
const $GenerRadio = $('.Gener-radio')
const $addLayerCloseBtn = $('.close')


// querySelector를 사용해서 미친놈 처럼 코딩을 안할수 있다
// if(!$bookAddLayer.children[0].children[1].children[1].children[1].value.trim() || !$bookAddLayer.children[0].children[1].children[0].childNodes[3].value.trim()){



let $bookNumber = `book${$booksContent.children.length + 1}`

const $bookObject = JSON.parse(localStorage.getItem("book")) || {
  book1: {
    name: "해리포터",
    price: '15000',
    Genre: "판타지"
  },
  book2: {
    name: "사마아",
    price: '12000',
    Genre: "디스토피아"
  },
  book3: {
    name: "코딩의 정석",
    price: '11000',
    Genre: "코딩"
  },
  book4: {
    name: "해리포터2",
    price: '15000',
    Genre: "판타지"
  },
}



function bookCreat() {
  $bookAddBtn.addEventListener('click', () => {
    $bookAddLayer.style.display = "flex"
  })
  const $addBookPrice = $bookAddLayer.querySelector('#book-price')
  const $addBookName = $bookAddLayer.querySelector('#book-name')
  const $GenreArray = $bookAddLayer.querySelector('.add-book-gener')


  function bookCreat() {
    Object.keys($bookObject).forEach(book => {
      let $newBook = document.createElement('div')

      const $bookInfo = $bookObject[book];


      [...$booksContent.children].forEach(element => {
        const $bookName = element.querySelector('.book-title')
        if ($bookInfo.name == $bookName.textContent) {
          return
        } else {

          $newBook.innerHTML = `
          <img src="../images/Book-img/해리_포터와_마법사의_돌_표지.jpg" alt="hari">
          <div class="price-about">
            <h2 class="book-title">${$bookInfo.name}</h2>
            <p>${$bookInfo.price}원</p>
            <span class="genreName">${$bookInfo.Genre}</span>
          </div>`





          $booksContent.appendChild($newBook)



        }


      });



    });








  }
  bookCreat()





  $bookAddLayer.children[0].children[2].addEventListener('click', () => {

    $bookNumber = `book${$booksContent.children.length + 1}`


    if (!$addBookPrice.value.trim() || !$addBookName.value.trim()) {
      return alert('이름과 가격을 써주세요 또는 장르를 골라주세요')
    }

    const $newBook = document.createElement('div')
    $newBook.className = 'book'

    Array.from($GenreArray.children).forEach(gener => {
      if (gener.children[1].checked) {

        $newBook.innerHTML = `
         <img src="./images/Book-img/해리_포터와_마법사의_돌_표지.jpg" alt="hari">
         <div class="price-about">
           <h2 class="book-title">${$addBookName.value}</h2>
           <p>${$addBookPrice.value}원</p>
           <span class="genreName">${gener.children[0].textContent}</span>
         </div>
         `








        Array.from($GenreArray.children).forEach(gener => {
          if (gener.children[1].checked) {
            console.log();
            $bookObject[$bookNumber] = {
              name: $addBookName.value,
              price: $addBookPrice.value,
              Genre: gener.children[0].textContent
            }
          }
        })




        $addBookName.value = ""
        $addBookPrice.value = ""
        gener.children[1].checked = false
        $bookAddLayer.style.display = "none"
      }


    });
    $booksContent.appendChild($newBook)
    localStorage.setItem("book", JSON.stringify($bookObject))
  }




  )

  $addLayerCloseBtn.addEventListener('click', () => {
    $bookAddLayer.style.display = "none"
    Array.from($GenreArray.children).forEach(genre => { genre.children[1].checked = false });
    $addBookName.value = ""
    $addBookPrice.value = ""
  })

}



function delBook() {


}


function Genre() {
  $GenerRadio.addEventListener('click', () => {
    const $bookChildren = Array.from($booksContent.children)
    const $genArray = Array.from($GenerRadio.children)
    $genArray.forEach(radio => {
      if (radio.children[0].checked) {
        $bookChildren.forEach(books => {
          const $genreName = books.querySelector(".genreName")
          books.style.display = radio.children[1].innerHTML == $genreName.textContent ? "flex" : "none"
        });
      }
    });
  })
}

function bookSearch() {
  // onclick 은 덥어쓰여질수 있다
  // addEventListener 은 중첩된다 (싸인다)
  $bookSearch.children[0].addEventListener('keypress', (e) => {
    const $bookchild = Array.from($booksContent.children)

    if (e.key !== 'Enter') return;

    if (!$bookSearch.children[0].value.trim()) {
      return $bookchild.forEach(($book) => $book.style.display = 'flex');
    }

    $bookchild.forEach(books => {
      const $bookName = books.querySelector('.book-title')
      // console.log($bookSearch.children[1].value == books.children[0].children[0].textContent ? "같음" : "다름");
      books.style.display = $bookSearch.children[0].value == $bookName.textContent ? 'flex' : 'none'
    });

  })

}


Genre()
bookSearch()
bookCreat()

// TODO
// 1. querySeletor로 미친 코딩 바꾼다
// 2. Genre함수를 bookSearch 느낌으로 리펙토링
// 3. Genre 메번 호출하는 방식이 아니라 한번 호출해서 끝네도록 리펙토링