const $booksContent = document.querySelector('.books-content')
const $bookAddBtn = document.querySelector('.add-book')
const $bookAddLayer = document.querySelector('.layer')
const $bookSearch = document.querySelector('.book-search-section')
const $GenerRadio = document.querySelector('.Gener-radio')

function bookCreat() {
  $bookAddBtn.addEventListener('click', () => {
    $bookAddLayer.style.display = "flex"
  })
  $bookAddLayer.children[0].children[2].addEventListener('click', () => {
    const $newBook = document.createElement('div')
    $newBook.className = 'book'
    if(!$bookAddLayer.children[0].children[1].children[1].children[1].value.trim() || !$bookAddLayer.children[0].children[1].children[0].childNodes[3].value.trim()){
      alert('장르를 골라주세요');        
    }else{
      Array.from($bookAddLayer.children[0].children[1].children[2].children[1].children).forEach(gener => {
        if (gener.children[1].checked) {
          $newBook.innerHTML = `
          <article>
            <h2 class="book-title">${$bookAddLayer.children[0].children[1].children[0].childNodes[3].value}</h2>
            <a href="#"><img src="./images/Book-img/해리_포터와_마법사의_돌_표지.jpg" alt="hari"></a>
            <div class="price-about">
              <p>가격: ${$bookAddLayer.children[0].children[1].children[1].children[1].value}원</p>
              <span>장르: </span><span>${gener.children[0].textContent}</span>
            </div>
          </article>`
  
  
  
  
          $bookAddLayer.children[0].children[1].children[0].childNodes[3].value = ""
          $bookAddLayer.children[0].children[1].children[1].children[1].value = ""
          gener.children[1].checked = false
          $bookAddLayer.style.display = "none"
        }  
      });
  

    }

    bookSearch() 
    Genre()
    $booksContent.appendChild($newBook)
  })
}

function Genre() {
  $GenArray = Array.from($GenerRadio.children)
  $GenerRadio.addEventListener('click', () => {
    $GenArray.forEach(radio => {
      if (radio.children[0].checked) {
        Array.from($booksContent.children).forEach(books => {
          if(radio.children[1].innerHTML == books.children[0].children[2].children[2].innerHTML){
            books.style.display = "flex"
          }else{
            books.style.display = "none"
          }
        });  
      }

      

    });
  })
}

function bookSearch() {
  $bookchild = Array.from($booksContent.children)

  $bookSearch.children[1].addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {
      $bookchild.forEach(books => {
        if ($bookSearch.children[1].value == books.children[0].children[0].textContent) {
          books.style.display = 'flex'
        } else if (!$bookSearch.children[1].value.trim()) {
          books.style.display = 'flex'
        } else {
          books.style.display = 'none'
        }
      });
    }
  })

}


Genre()
bookSearch()
bookCreat()

