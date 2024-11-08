const $ = (element) => document.querySelector(element);

const $email = $("#email");
const $psw = $("#psword");
const $loginBtn = $(".loginBtn");

const $signEmail = $("#signinemail");
const $signPsw = $("#signinpsword");
const $signinBtn = $(".signinBtn");

const $slideToSign = $('.gotosign')
const $slideToLogin = $('.gotologin')


const $ad = $(".ad");

const user = JSON.parse(localStorage.getItem('user')) || {
  user1: { name: "정동일",psw: "wjdehddlf"},
  user2: { name: "마석두", psw: "aktjren",},
};

if (!localStorage.getItem("user")) {
  localStorage.setItem("user", JSON.stringify(user));
}

let $userInformation = localStorage.getItem('user')

console.log($userInformation.length);


let $rlfdl = $userInformation.length + 1;


let $userNumber = `user${$rlfdl}`;

$loginBtn.addEventListener("click", () => {

  if(!$email.value.trim() || !$psw.value.trim()){
    alert("아이디 또는 비밀번호를 입력해주세요")
  }else{
    Object.keys(JSON.parse(localStorage.getItem("user"))).forEach((element) => {
      const userInfo = user[element];
      if ($email.value == userInfo.name) {
        if ($psw.value == userInfo.psw)
          window.location = "http://127.0.0.1:5500/index.html";
      } else {
        console.log('실패');
      }
    });
  }
  
  
});

$signinBtn.addEventListener("click", () => {
  $rlfdl = Object.keys(user).length + 1;
  $userNumber = `user${$rlfdl}`;

  if(!$signEmail.value.trim() || !$signPsw.value.trim()){
    alert("아이디 또는 비밀번호를 입력해주세요")
  }else{
    user[$userNumber] = {
      name: `${$signEmail.value}`,
      psw: `${$signPsw.value}`,
    };
  
    console.log(Object.keys(user).length);
  
    console.log($userNumber);
  
    
    $userInformation = localStorage.getItem('user')
  
    localStorage.setItem("user", JSON.stringify(user));
  
  }

``
});


let slide = 0;




$slideToSign.addEventListener('click',()=>{
  $ad.animate([{ transform: "translateX(-500px)"}],  {
    duration: 500,
    fill: "forwards",})
})

$slideToLogin.addEventListener('click',()=>{
  $ad.animate([{ transform: "translateX(0)"}], {
    duration: 500,
    fill: "forwards",})
})



// // 2. 객체를 JSON 문자열로 변환하여 저장
// localStorage.setItem("user", JSON.stringify(user));
// console.log("User saved:", localStorage.getItem("user")); // 결과: JSON 문자열로 저장된 객체

// // 3. 저장된 JSON 문자열을 객체로 변환하여 가져오기
// const savedUser = JSON.parse(localStorage.getItem("user"));
// console.log("Loaded user:", savedUser); // 결과: { name: "John Doe", age: 30, city: "New York" }

// // 4. 특정 프로퍼티에 접근하기
// console.log("User's name:", savedUser.name); // 결과: "User's name: John Doe"

// // 5. 데이터 삭제
// localStorage.removeItem("user");
// console.log("User removed:", localStorage.getItem("user")); // 결과: "User removed: null"