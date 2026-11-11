const tracks=[
['The Greening','작곡  |  미끼 미노루',`더 그리닝(The Greening)은 작곡가 미끼 미노루가 1976년 작곡한 21현 고토 독주곡 ‘Ballades for Koto Solo’ 중 제2집 ‘봄’의 마지막 곡이다. 이 곡은 봄을 지나 여름에 가까워진 초록색 자연의 생명을 구가(謳歌)하는 역동적이고 다이나믹한 곡이며, 한국의 25현뿐만 아니라 일본의 고토(箏), 중국의 고쟁(古箏), 몽골의 야탁 등 비슷한 형태의 악기를 통해 연주되고 있다.`],
['Sound of Silence [침묵의 소리]','작곡  |  손다혜',`침묵이라는 단어는 아주 조용하고, 또 정적이며 잠잠한 상태의 우리 사회의 겉모습을 표현하고 있다. 그러나 우리 내면 속 깊은 곳에 말하지 못하는 수만 가지의 이야기들을 하나씩 꺼내본다면 어떨까. 이 곡은 그러한 침묵의 소리가 만드는 갈등과 해결의 반복으로 구성되어 있다. 침묵의 소리는 두 마디의 짧은 모티브로부터 다양하게 변주되고 있으며 때로는 아주 정적이고 갑자기 고요했다가, 때로는 또 아주 역동적으로 급변한다. 현 시대에 나를 마음을 움직이는 원동력은 과연 무엇인가에 대해 생각하며 이 곡을 감상하기 바란다.`],
['먼 동이 틀 무렵 ver. 4','작곡  |  서정민　 편곡  |  김보경　 소리  |  김민지',`문화예술평론가 故 박용구 선생이 백수를 맞이해 출간한, ‘먼동이 틀 무렵, 박용구 백년의 편력’을 읽고 20세기 척박했던 한반도의 문화예술계에 새로운 변화의 바람을 불러일으킨 고인의 인생 여정을 담은 작품이다. 천체 장단을 중심으로 전통적인 선율과 현대적인 선율을 자유롭게 넘나드는 다채로운 주법을 통해서 르네상스적인 문화예술인의 길을 걸어온 고인의 삶을 극적으로 표현하였다. 오늘 공연에서는 경기잡가 ‘방물가’를 얹어 새롭게 편곡한 버전을 선보인다.`],
['파도','작곡  |  김보경',`가끔 생각이 파도처럼 밀려와 잠에 들지 못할 때가 있다.
그것은 틀에 박혔다 자유로워지기를 반복하며 제멋대로 나를 휩쓸고 지나간다. 쉴 새 없이 밀려오는 생각, 감정, 파도, 그 모든 것들에 대하여.

경기도당굿 장단을 베이스로 하여 가야금의 선율을 얹은 작품이다. 도당굿이 진행되면서 점점 고조되고 빨라지는 리듬이 마치 파도와 생각이 밀려오는 것과 비슷하다고 생각했다. 중간의 도살풀이 장단에서는 6박을 지키며 연주하다가 한 번씩 rubato(자유로운 박자)로 연주하여서 틀에 박혔다 자유로워지기도 하는 생각의 모습을 표현하였다.`],
['어느새','작곡  |  김보경',`시간은 나의 턱 밑까지 차올랐다.

나의 꿈, 나의 열망을 향해 뒤도 돌아볼 새 없이 그 많던 시간을 건너서,
어느새 나는 이곳에 서 있게 되었다.

이 곡은 시간과 현실에 쫓기지만, 그 과정들이 있었기 때문에 결국 원하는 목표에 도달했다는 메시지를 담고 있다. 곡의 마지막에서는 지나왔던 시간을 되짚어 보는 것을 표현하기 위해 앞부분에 사용했던 선율을 차용하여 카덴차 선율을 구성하였다.`],
['잔상 [사라진 것들에 대하여]','작곡  |  김보경',`한 번씩 사라진 것들이 꿈에 나올 때가 있다.

현실에서 그것의 잔상이 보이면 말로 할 수 없는 그리움이 밀려와 막연히 떠올리게 된다.
그것이 물건이든, 추억이든, 아니면 사람이든.`]
];
const container=document.querySelector('#tracks');
tracks.forEach(([title,meta,copy],i)=>{const article=document.createElement('article');article.className='track';const number=document.createElement('span');number.className='number';number.textContent=String(i+1).padStart(2,'0');const body=document.createElement('div');const heading=document.createElement('h3');heading.textContent=title;const credit=document.createElement('div');credit.className='meta';credit.textContent=meta;const p=document.createElement('p');p.textContent=copy;body.append(heading,credit,p);article.append(number,body);container.append(article)});
const dialog=document.querySelector('dialog');const labels=['표지 · 도움주신 분들','인사말','프로그램','출연진 소개'];labels.forEach((label,i)=>{const button=document.createElement('button');const img=document.createElement('img');img.src=`assets/spread-${i+1}.${i===0?'png':'jpg'}`;img.alt=label+' 원본 펼침면';img.loading='lazy';const caption=document.createElement('span');caption.textContent=`0${i+1} / ${label} ↗`;button.append(img,caption);button.addEventListener('click',()=>{dialog.querySelector('img').src=img.src;dialog.querySelector('img').alt=img.alt;dialog.showModal()});document.querySelector('.spreads').append(button)});document.querySelector('.close').onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});

const floatingBooking = document.querySelector('.floating-booking');
const cover = document.querySelector('#home');
const siteHeader = document.querySelector('header');

function updateFloatingBooking() {
  const headerBottom = siteHeader.getBoundingClientRect().bottom;
  const coverBottom = cover.getBoundingClientRect().bottom;
  floatingBooking.hidden = coverBottom > headerBottom;
}

let bookingFrame = 0;
function scheduleBookingUpdate() {
  if (bookingFrame) return;
  bookingFrame = requestAnimationFrame(() => {
    bookingFrame = 0;
    updateFloatingBooking();
  });
}

window.addEventListener('scroll', scheduleBookingUpdate, { passive: true });
window.addEventListener('resize', scheduleBookingUpdate);
window.addEventListener('pageshow', scheduleBookingUpdate);
scheduleBookingUpdate();
