const $BookSearch = document.querySelector("#book-search");
const $BookContent = document.querySelector(".books-content");
const $BookBox = $BookContent.getElementsByClassName("book");
const $BookBoxArr = Array.from($BookBox);
const $BookTitle = $BookContent.getElementsByClassName("book-title");
const $BookTitleaArr = Array.from($BookTitle);
const $AddBookBtn = document.querySelector(".add-book > a");
const $Layer = document.querySelector(".layer");
const $AddBtn = document.querySelector(".add");
const $BookName = document.querySelector("#book-name");
const $BookPrice = document.querySelector("#book-price");
const $BookGen = document.querySelectorAll(".add-book-gener > div");
const $BookGenArray = Array.from($BookGen)
const $Bookstyle = document.querySelector(".book-stlye > div");

function Book_search_funtion() {
  $BookBoxArr.forEach((Books) => {
    if (Books.childNodes[1].childNodes[1].innerHTML == $BookSearch.value) {
      Books.style.display = "flex";
    } else {
      Books.style.display = "none";
    }
  });
}

function BookStyleSelect() {
  const $BookGen = $Bookstyle.children;
  const $BookGenArr = Array.from($Bookstyle)
  // $BookGenArr.forEach((Gen) => {
  //   console.log(Gen.innerHTML);
  // });
}

//for 이용버전

// function Book_search_funtion() {
//   for (let i = 0; i < $BookBox.length; i++) {
//     if ($BookTitle[i].innerHTML == $BookSearch.value) {
//       $BookBox[i].style.display = "flex";
//     }

//     if ($BookTitle[i].innerHTML != $BookSearch.value) {
//       $BookBox[i].style.display = "none";
//       console.log($BookTitle[i]);
//     }
//   }
// }

function ShowLayer() {
  $Layer.style.display = "flex";
}

function AddBook() {
  if ($BookName.value == "") {
    alert("책 이름을 입력하세요");
  } else {
    console.log($BookGenArray);
    $BookGenArray.forEach(Gener => {
      if(Gener.childNodes[3].checked){
        $BookContent.innerHTML += `
        <div class="book">
      <article>
        <h2 class="book-title">${$BookName.value}</h2>
        <a href="#"><img src="./images/Book-img/해리_포터와_마법사의_돌_표지.jpg" alt="hari"></a>
        <div class="price-about">
          <p>가격: ${$BookPrice.value}</p>
          <p>장르: ${Gener.childNodes[1].innerHTML}</p>
        </div>
      </article>
    </div>`;

        $BookGen.value = null;
        $BookName.value = null;
        $BookPrice.value = null;

        $Layer.style.display = "none";

      }

    });



  }
}

BookStyleSelect();
$AddBtn.addEventListener("click", AddBook);
$AddBookBtn.addEventListener("click", ShowLayer);
$BookSearch.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    Book_search_funtion();
  }
});
