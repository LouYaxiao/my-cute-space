import './style.css'

// 动态背景生成逻辑
function createFloatingBubbles() {
  const container = document.getElementById('floating-container');
  // 定义我们的马卡龙色系
  const colors = ['bg-sakura', 'bg-sky', 'bg-matcha', 'bg-lavender'];

  // 生成 15 个漂浮泡泡
  for (let i = 0; i < 15; i++) {
    const bubble = document.createElement('div');
    
    // 随机属性
    const size = Math.random() * 60 + 20; // 大小 20px - 80px
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100; // 水平位置 0% - 100%
    const top = Math.random() * 100;  // 垂直位置
    const duration = Math.random() * 10 + 10; // 动画时长 10s - 20s
    
    // 设置样式
    bubble.className = `absolute rounded-full opacity-40 ${color}`;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${left}%`;
    bubble.style.top = `${top}%`;
    
    // 添加简单的 CSS 动画效果 (利用 style 注入 keyframes 比较麻烦，这里我们用 transition 模拟一种简单的漂浮)
    // 为了更简单的动画，我们给每个泡泡加一个 style 动画
    bubble.animate([
      { transform: 'translate(0, 0) rotate(0deg)' },
      { transform: `translate(${Math.random()*100 - 50}px, ${Math.random()*100 - 50}px) rotate(360deg)` }
    ], {
      duration: duration * 1000,
      direction: 'alternate',
      fill: 'both',
      iterations: Infinity,
      easing: 'ease-in-out'
    });

    container.appendChild(bubble);
  }
}

// 页面加载后执行
createFloatingBubbles();

// ... 之前的泡泡代码保持不变 ...

// 打字机特效逻辑
const words = ["一名探索者 🔭", "热爱前端代码 💻", "喜欢可爱事物 🧸", "正在学习全栈 🚀"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeSpeed = 100; // 打字速度
const deleteSpeed = 50; // 删除速度
const delayNext = 2000; // 打完字停留多久

function typeWriter() {
  const element = document.getElementById('typewriter');
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    // 删除文字
    element.innerText = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    // 输入文字
    element.innerText = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  // 速度控制
  let typeDelay = isDeleting ? deleteSpeed : typeSpeed;

  if (!isDeleting && charIndex === currentWord.length) {
    // 打字完成，暂停一下
    typeDelay = delayNext;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    // 删除完成，切换到下一个词
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeWriter, typeDelay);
}

// 启动打字机
document.addEventListener('DOMContentLoaded', typeWriter);