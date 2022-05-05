//내 이미지 부분
//텍스트 박스 클릭 후 스타일 변경(하트 스타일 변경)
const movetxt = document.getElementById("movingHeart");
movetxt.addEventListener("dblclick",()=>{
  movetxt.style.color = 'red';
  movetxt.style.fontSize='45px';
});
movetxt.addEventListener("click",()=>{
  movetxt.style.color = '#2d2929';
  movetxt.style.fontSize='40px';
});


//textarea부분
//글자 수 세기
function txtcounter(){
  const msg = document.getElementById('send-txt').value;
  if(msg.length > 50){
  msg = msg.substring(0,50);
  document.getElementById('send-txt').value=msg;
  }
document.getElementById('count').innerHTML = '('+msg.length+'/50)';
}
const sendTxtCount = document.getElementById('send-txt');
sendTxtCount.onkeydown=txtcounter;
//메시지(방명록) send버튼 클릭 이벤트
const send = document.getElementById('send-btn');
send.addEventListener("click",()=>{
  alert("진짜 전달되는건 아니지만 마음은 전달됐을거예요❤");
  document.getElementById('result-txt').innerHTML = document.getElementById('send-txt').value;
  document.getElementById('send-txt').value = "";
  document.getElementById('count').innerHTML = '(0/50)';
});

//숨김 텍스트 박스(접고 펼치기)
function openClose(){
  if(document.getElementById('secretContent').style.display === 'block'){
    document.getElementById('secretContent').style.display = 'none';
    document.getElementById('secrets').textContent='Top Secret!';
  }else{
    document.getElementById('secretContent').style.display = 'block';
    document.getElementById('secrets').textContent = '조민지 꼬시는 법';
  }
}//코드출처:https://joshua-dev-story.blogspot.com/2020/09/javascript-collapse.html
const hideContent = document.getElementById("secrets");
hideContent.onclick=openClose;

//레서판다 이미지 변경
//이미지 변경버튼 클릭 이벤트
let imgNum =1;
function changeImg(){
  if(imgNum === 6){
    imgNum =1;
  }else{
    imgNum++;
  }
  const img = document.getElementById("redPanda");
  img.setAttribute("src","image/redPanda/redpanda"+imgNum+".jpg");
}
const changeBtn = document.getElementById("change-btn");
changeBtn.onclick = changeImg;

//가보자고 이미지 줌인/줌아웃처럼
const goimg = document.getElementById('gabojago');
goimg.addEventListener("mouseover",()=>{
  goimg.style.width="500px";
  goimg.style.height="500px";
  goimg.style.transition = ".5s";
});
goimg.addEventListener("mouseout",()=>{
  goimg.style.width="50px";
  goimg.style.height="50px";
  goimg.style.transition = ".4s";
});