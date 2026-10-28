const products = [
    {
        name: "رژگونه دریم تاچ شیگلم",
        brand: "SHEGLAM",
        price: "۳,۶۰۰,۰۰۰",
        desc: "بافت نرم و مخملی، رنگدانه‌های زیبا، پخش آسان و یکدست، جلوه مات و طبیعی، دارای آینه، مناسب آرایش روزانه و مجلسی. پک ۸ عددی.",
        image: "https://images.unsplash.com/photo-1633169108533-fd6f95a2f3f5?w=600&q=80"
    },
    {
        name: "ادکلن بیلی ایلیش AXSiS",
        brand: "Billie Eilish",
        size: "۳۵ میل",
        price: "۴۸۰,۰۰۰",
        desc: "رایحه گرم، شیرین و وانیلی با نت‌های کاکائو، عنبر و مشک. قیمت عمده (۳ عدد به بالا): ۴۰۰,۰۰۰ تومان.",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80"
    },
    {
        name: "ریمل ایزادورا",
        brand: "Isadora",
        price: "۳۸۰,۰۰۰",
        desc: "حجم‌دهنده و بلندکننده مژه‌ها، بدون ریزش، رنگدانه مشکی قوی، ماندگاری بالا، ضد حساسیت. قیمت عمده (۳ عدد به بالا): ۳۰۰,۰۰۰ تومان.",
        image: "https://images.unsplash.com/photo-1631214540242-3cd8c4b0b3b6?w=600&q=80"
    },
    {name: "دستگاه وکس سیلیکونی تاشو",
        brand: "تاشو",
        price: "۹۵۰,۰۰۰",
        desc: "گرمکن وکس تمام سیلیکونی، نشکن و مقاوم، مدل تاشو، وکس بهش نمی‌چسبه، مناسب خانگی و سالنی. رنگ‌بندی: صورتی، بنفش، آبی. قیمت عمده: ۸۷۰,۰۰۰ تومان.",
        image: "https://images.unsplash.com/photo-1633169108533-fd6f95a2f3f5?w=600&q=80"
    },
    {
        name: "آبرسان تیوپی شیرگاو بارین",
        brand: "شیرگاو بارین",
        price: "۲۹۰,۰۰۰",
        desc: "کیفیت عالی، اورجینال. قیمت‌های عمده: ۳ عدد ۷۲۵,۰۰۰ — ۶ عدد ۱,۴۲۰,۰۰۰ — ۱۲ عدد ۲,۸۰۰,۰۰۰ تومان.",
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80"
    }
];

const TELEGRAM_URL = "https://t.me/haydhNjafy";
const RUBIKA_URL = "https://rubika.ir/haydh74";

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = products.map(p => `
        <div class="product-card">
            <div class="product-image">
                <img src="${p.image/div>
            <div class="product-info">
                <h3 class="product-name">${p.name}</h3>
                ${p.brand ? `<div class="product-brand">${p.brand}${p.size ? ' • ' + p.size : ''}</div>` : ''}
                <p class="product-desc">${p.desc}</p>
                <div class="product-price">${p.price}<span class="currency">تومان</span></div>
                <a href="${TELEGRAM_URL}" target="_blank" rel="noopener" class="btn-buy">تماس برای خرید</a>
            </div>
        </div>
    `).join('');
    document.querySelectorAll('.contact-card.telegram').forEach(el => el.href = TELEGRAM_URL);
    document.querySelectorAll('.contact-card.rubika').forEach(el => el.href = RUBIKA_URL);
}

function setupMenu() {
    const toggle = document.getElementById('menuToggle');
    const links = document.getElementById('navLinks');
    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        links.classList.toggle('active');
    });
    links.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            toggle.classList.remove('active');
            links.classList.remove('active');
        });});
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    setupMenu();
});
