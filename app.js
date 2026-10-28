// 1. 高精度复刻店内方程式赛车+双交叉挥舞旗帜商标 SVG
const PIT_LANE_LOGO_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 120" width="82" height="45" style="border-radius:5px; border:1.5px solid #262626; background:#0b0a09; flex-shrink:0;">
    <defs>
        <clipPath id="leftFlagClip">
            <path d="M48 20 Q68 10 88 16 L100 40 Q80 34 64 45 Q54 34 48 20 Z"/>
        </clipPath>
        <clipPath id="rightFlagClip">
            <path d="M103 22 Q119 24 128 31 L132 48 Q119 42 106 39 Z"/>
        </clipPath>
    </defs>

    <!-- 纯黑底板 -->
    <rect width="220" height="120" fill="#0b0a09"/>

    <!-- 左侧波浪黑白格子旗 -->
    <g clip-path="url(#leftFlagClip)">
        <rect x="45" y="8" width="60" height="42" fill="#f8fafc"/>
        <path d="M45 14 L105 14 M45 21 L105 21 M45 28 L105 28 M45 35 L105 35 M45 42 L105 42" stroke="#0b0a09" stroke-width="3.5" stroke-dasharray="6 6"/>
        <path d="M48 17.5 L108 17.5 M48 24.5 L108 24.5 M48 31.5 L108 31.5 M48 38.5 L108 38.5" stroke="#0b0a09" stroke-width="3.5" stroke-dasharray="6 6"/>
    </g>
    <path d="M48 20 Q68 10 88 16 L100 40 Q80 34 64 45 Q54 34 48 20 Z" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>

    <!-- 右侧斜纹挥舞旗 -->
    <g clip-path="url(#rightFlagClip)">
        <rect x="100" y="20" width="36" height="32" fill="#f8fafc"/>
        <path d="M98 26 L120 16 M100 32 L126 20 M102 38 L132 24 M105 44 L136 30 M110 49 L138 36" stroke="#0b0a09" stroke-width="2.6"/>
    </g>
    <path d="M103 22 Q119 24 128 31 L132 48 Q119 42 106 39 Z" fill="none" stroke="#e2e8f0" stroke-width="1.5"/>

    <!-- 交叉白色旗杆 -->
    <line x1="88" y1="16" x2="115" y2="62" stroke="#f8fafc" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="103" y1="22" x2="94" y2="57" stroke="#f8fafc" stroke-width="2.3" stroke-linecap="round"/>
    <line x1="103" y1="39" x2="92" y2="53" stroke="#cbd5e1" stroke-width="1.6"/>

    <!-- 右前远端车轮 (车鼻后方) -->
    <ellipse cx="168" cy="76" rx="16" ry="16" fill="#0f0f0f" stroke="#e2e8f0" stroke-width="1.5"/>
    <path d="M155 67 A16 15 0 0 1 181 70 L177 64 A15 14 0 0 0 157 63 Z" fill="#f8fafc"/>

    <!-- 左后定风翼 (Rear Wing) -->
    <path d="M35 53 L47 53 L47 70 L35 70 Z" fill="#b91c1c" stroke="#f8fafc" stroke-width="1.5"/>
    <path d="M47 55 L74 55 L72 60 L47 60 Z" fill="#991b1b" stroke="#f8fafc" stroke-width="1.3"/>
    <path d="M47 62 L68 62 L66 67 L47 67 Z" fill="#b91c1c" stroke="#f8fafc" stroke-width="1.2"/>

    <!-- 左后车轮 (带白色胎面高光与双圈轮毂) -->
    <path d="M26 64 C19 64 19 95 26 95 L46 95 C52 95 52 64 46 64 Z" fill="#0f0f0f" stroke="#e2e8f0" stroke-width="1.6"/>
    <path d="M27 64 L46 64 C49 64 50 70 50 74 L35 74 C34 68 31 64 27 64 Z" fill="#f8fafc"/>
    <ellipse cx="27" cy="79.5" rx="7" ry="12.5" fill="#0f0f0f" stroke="#f8fafc" stroke-width="2.2"/>
    <ellipse cx="27" cy="79.5" rx="3" ry="5.5" fill="#f8fafc"/>

    <!-- 引擎盖与座舱 (带车身 PIT LANE 字样) -->
    <path d="M56 70 Q74 56 102 53 L112 63 L74 74 Z" fill="#b91c1c" stroke="#f8fafc" stroke-width="1.5"/>
    <text x="70" y="67" fill="#ffffff" font-family="Arial, sans-serif" font-weight="900" font-style="italic" font-size="7.2" letter-spacing="0.2">PIT LANE</text>

    <!-- 车身侧箱 (白红分色 + 黑色散热口) -->
    <path d="M56 71 L69 71 L68 92 L54 91 Z" fill="#f8fafc" stroke="#f8fafc" stroke-width="1"/>
    <path d="M69 71 L95 70 L95 93 L68 92 Z" fill="#b91c1c" stroke="#f8fafc" stroke-width="1.5"/>
    <rect x="82" y="75" width="5.5" height="13" fill="#0b0a09" stroke="#f8fafc" stroke-width="1"/>

    <!-- 前鼻锥与前定风翼 (红白斜切造型) -->
    <path d="M118 62 L137 56 L178 83 L165 85 L122 67 Z" fill="#f8fafc" stroke="#f8fafc" stroke-width="1"/>
    <path d="M122 67 L165 85 L154 90 L119 76 Z" fill="#b91c1c" stroke="#f8fafc" stroke-width="1.3"/>
    <!-- 前翼左侧端板 -->
    <path d="M128 76 L154 91 L154 96 L124 96 Z" fill="#b91c1c" stroke="#f8fafc" stroke-width="1.5"/>
    <!-- 前翼右侧端板 -->
    <path d="M180 67 L198 79 L201 93 L176 93 L176 83 Z" fill="#b91c1c" stroke="#f8fafc" stroke-width="1.5"/>
    <!-- 前翼横梁 -->
    <path d="M154 88 L180 88 L180 93 L154 93 Z" fill="#b91c1c" stroke="#f8fafc" stroke-width="1.3"/>

    <!-- 中前主车轮 (3/4 立体视角 + 轮胎字母圈 + 多层轮毂) -->
    <ellipse cx="109" cy="81" rx="18" ry="19.5" fill="#0f0f0f" stroke="#e2e8f0" stroke-width="1.6"/>
    <path d="M105 61.5 A18 19.5 0 0 1 126 75 L120 76 A13 14 0 0 0 102 65.5 Z" fill="#f8fafc"/>
    <ellipse cx="105" cy="82" rx="14" ry="15.5" fill="none" stroke="#f8fafc" stroke-width="1.2" stroke-dasharray="2.2 2.8"/>
    <ellipse cx="105" cy="82" rx="10.5" ry="12" fill="#1e293b" stroke="#f8fafc" stroke-width="2.4"/>
    <ellipse cx="105" cy="82" rx="6.5" ry="7.5" fill="#0f0f0f" stroke="#cbd5e1" stroke-width="1.6"/>
    <ellipse cx="105" cy="82" rx="2.8" ry="3.2" fill="#f8fafc"/>
</svg>`;

function injectFavicon() {
    try {
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.head.appendChild(link);
        }
        link.type = 'image/svg+xml';
        link.href = 'data:image/svg+xml;utf8,' + encodeURIComponent(PIT_LANE_LOGO_SVG.trim());
    } catch (e) {
        console.warn('Favicon injection skipped:', e);
    }
}

function isZh() {
    return localStorage.getItem('pl_lang') === 'zh';
}

function initSharedLayout(activePage) {
    injectFavicon();

    const navPlaceholder = document.getElementById('sharedNavbar');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark navbar-custom sticky-top py-2">
            <div class="container-fluid px-lg-4">
                <a class="navbar-brand d-flex align-items-center gap-2 text-white" href="index.html">
                    ${PIT_LANE_LOGO_SVG}
                    <div class="lh-1">
                        <div class="brand-title-red fs-4">PIT LANE</div>
                        <small class="text-white-50 fst-italic" style="font-size:0.75rem;" data-zh="纯手工精洗与汽车美容">Hand Car Wash & Detailing</small>
                    </div>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto align-items-center gap-2">
                        <li class="nav-item">
                            <a class="nav-link-custom ${activePage === 'home' ? 'nav-active' : ''}" href="index.html" data-zh="首页">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link-custom ${activePage === 'services' ? 'nav-active' : ''}" href="services.html" data-zh="洗车与美容价目表">Wash & Detailing Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link-custom" href="services.html#passes-section" data-zh="无限次洗车套票">Car Wash Passes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link-custom" href="services.html#booking-section" data-zh="预约项目">Book a Service</a>
                        </li>
                        <li class="nav-item ms-lg-2 notranslate">
                            <button class="btn btn-outline-primary btn-sm fw-bold px-3 py-1 text-white border-primary" onclick="toggleLanguage()" id="langToggleBtn">
                                中文
                            </button>
                        </li>
                        <li class="nav-item ms-lg-1 notranslate" id="authNavArea"></li>
                    </ul>
                </div>
            </div>
        </nav>`;
    }

    const footerPlaceholder = document.getElementById('sharedFooter');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
        <footer class="py-4 mt-auto" style="background-color:#040609; border-top: 2px solid #1d4ed8;">
            <div class="container text-center">
                <div class="d-flex justify-content-center align-items-center gap-2 mb-2">
                    ${PIT_LANE_LOGO_SVG}
                    <span class="fw-bold fs-5 text-danger">PIT LANE</span>
                    <span class="text-white-50 fst-italic">Hand Car Wash & Detailing</span>
                </div>
                <p class="small text-white-50 mb-1" data-zh="📍 地址：Unit 195 - 4551 No. 3 Road, Richmond, B.C. V6X 2C3 | 📞 电话：(604) 303-8885 | 📠 传真：(604) 303-8887">
                    📍 Unit 195 - 4551 No. 3 Road, Richmond, B.C. V6X 2C3 | 📞 Tel: (604) 303-8885 | 📠 Fax: (604) 303-8887
                </p>
                <p class="small text-secondary mb-0" data-zh="King's Auto Spa Ltd 旗下官方直营分店 · © 2026 Pit Lane Car Detailing 版权所有">
                    Official Sister Branch of King's Auto Spa Ltd · © 2026 Pit Lane Car Detailing. All Rights Reserved.
                </p>
            </div>
        </footer>`;
    }

    const modalsContainer = document.createElement('div');
    modalsContainer.innerHTML = `
    <!-- 经理与老板专用后台登录窗口 -->
    <div class="modal fade notranslate" id="authModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content dark-panel border-danger shadow-lg">
                <div class="modal-header border-bottom border-secondary">
                    <h5 class="modal-title fw-bold text-white">🔒 Admin Portal Login / 经理与老板后台登录</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body p-4">
                    <p class="text-white-50 small text-center mb-3">
                        Authorized access for Pit Lane Manager & Owner only.<br>
                        仅限门店经理与老板登录查看及修改每日/每周/每月预约日历。
                    </p>
                    <form onsubmit="handleAdminLogin(event)">
                        <div class="mb-3">
                            <label class="form-label small fw-bold text-white">Manager / Owner Email (管理员邮箱)</label>
                            <input type="email" class="form-control form-control-dark" id="loginEmail" placeholder="boss@pitlane.ca / manager@pitlane.ca" required>
                        </div>
                        <div class="mb-3">
                            <label class="form-label small fw-bold text-white">Password (登录密码)</label>
                            <input type="password" class="form-control form-control-dark" id="loginPassword" placeholder="••••••••" required>
                        </div>
                        <button type="submit" class="btn btn-danger w-100 fw-bold py-2">Enter Booking Calendar / 进入预约管理后台</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Indeed 完整招工信息弹窗 -->
    <div class="modal fade" id="hiringModal" tabindex="-1">
        <div class="modal-dialog modal-lg modal-dialog-scrollable">
            <div class="modal-content dark-panel border-primary shadow-lg">
                <div class="modal-header border-bottom border-secondary">
                    <h5 class="modal-title fw-bold text-danger" data-zh="📢 诚聘洗车与汽美技师 (Car Wash Attendant)">📢 Now Hiring: Car Wash Attendant</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body p-4">
                    <div class="d-flex flex-wrap gap-2 mb-3">
                        <span class="badge bg-danger fs-6" data-zh="时薪：$19.00 / 小时起">Pay: From $19.00 per hour</span>
                        <span class="badge bg-primary fs-6" data-zh="工作类型：全职 / 兼职">Job Types: Full-time, Part-time</span>
                        <span class="badge bg-secondary fs-6" data-zh="预计工时：每周 40.0 小时">Expected hours: 40.0 per week</span>
                        <span class="badge bg-success fs-6" data-zh="工作地点：列治文门店实地工作">Work Location: In person</span>
                    </div>

                    <h6 class="fw-bold text-uppercase text-info mt-3" data-zh="职位概述 (Overview)">Overview</h6>
                    <p class="text-white-50 small" data-zh="我们正在寻找一位友好且敬业的洗车技师（Car Wash Attendant）加入我们的团队。该职位负责提供卓越的客户服务，同时确保车辆按照最高标准得到彻底的清洁与维护。理想的候选人应注重细节、工作可靠，并热衷于为客户带来积极的体验。">
                        We are seeking a friendly and dedicated Car Wash Attendant to join our team. This role involves providing exceptional customer service while ensuring vehicles are thoroughly cleaned and maintained to the highest standards. The ideal candidate will be detail-oriented, reliable, and passionate about delivering a positive experience for our customers.
                    </p>

                    <h6 class="fw-bold text-uppercase text-info mt-3" data-zh="工作职责 (Responsibilities)">Responsibilities</h6>
                    <ul class="small text-white-50 lh-lg">
                        <li data-zh="热情接待客户，并协助解决其车辆清洁需求">Greet customers warmly and assist with their vehicle cleaning needs</li>
                        <li data-zh="安全、高效地操作洗车及汽美设备">Operate car wash equipment safely and efficiently</li>
                        <li data-zh="执行车辆外部与内部清洁，包括手工精洗、吸尘及深度细节护理">Perform exterior and interior cleaning of vehicles, including washing, vacuuming, and detailing</li>
                        <li data-zh="保持工作区域与设备的整洁，确保施工环境安全">Maintain cleanliness of the work area and equipment to ensure a safe environment</li>
                        <li data-zh="及时解答客户疑问或关切，提供优质的客户服务">Provide excellent customer service by addressing questions or concerns promptly</li>
                        <li data-zh="在清洁过程中悉心呵护所有车辆，防止任何磕碰或损伤">Ensure all vehicles are handled with care to prevent damage during cleaning process</li>
                    </ul>

                    <h6 class="fw-bold text-uppercase text-info mt-3" data-zh="任职要求 (Requirements)">Requirements</h6>
                    <ul class="small text-white-50 lh-lg">
                        <li data-zh="有清洁或客户服务经验者优先，但非硬性要求；店内提供完整带薪培训">Prior experience in cleaning or customer service is preferred but not required; training will be provided</li>
                        <li data-zh="能够在快节奏的环境中工作，同时保持对细节的专注">Ability to work in a fast-paced environment while maintaining attention to detail</li>
                        <li data-zh="具备良好的沟通能力与友善的服务态度">Strong communication skills and a friendly demeanor</li>
                        <li data-zh="能够长时间站立并完成弯腰、提举及移动设备等体力工作">Ability to stand for extended periods and perform physical tasks such as bending, lifting, and moving equipment</li>
                        <li data-zh="排班出勤必须具备可靠的交通方式并严格守时">Reliable transportation and punctuality are essential for scheduled shifts</li>
                        <li data-zh="态度积极，愿意学习新的汽车美容技能">A positive attitude and willingness to learn new skills</li>
                    </ul>

                    <h6 class="fw-bold text-uppercase text-info mt-3" data-zh="福利待遇 (Benefits)">Benefits</h6>
                    <ul class="small text-white-50 mb-0">
                        <li data-zh="提供员工店内免费停车位 (On-site parking)">On-site parking</li>
                        <li data-zh="享受员工店内服务内部折扣 (Store discount)">Store discount</li>
                    </ul>
                </div>
                <div class="modal-footer border-top border-secondary">
                    <div class="me-auto small text-white-50" data-zh="📍 应聘方式：请直接到店 (Unit 195 - 4551 No. 3 Rd) 或致电 (604) 303-8885 联系经理">
                        📍 Apply in person at Unit 195 - 4551 No. 3 Rd or call (604) 303-8885
                    </div>
                    <button type="button" class="btn btn-danger fw-bold" data-bs-dismiss="modal" data-zh="关闭">Close</button>
                </div>
            </div>
        </div>
    </div>`;
    document.body.appendChild(modalsContainer);

    checkCurrentUser();
    applyCurrentLanguage();
}

function toggleLanguage() {
    const nextLang = isZh() ? 'en' : 'zh';
    localStorage.setItem('pl_lang', nextLang);
    applyCurrentLanguage();
}

function applyCurrentLanguage() {
    const zhMode = isZh();
    const btn = document.getElementById('langToggleBtn');
    if (btn) btn.innerText = zhMode ? 'EN' : '中文';

    document.querySelectorAll('[data-zh]').forEach(el => {
        if (!el.dataset.en) {
            el.dataset.en = el.innerText.trim();
        }
        el.innerText = zhMode ? el.dataset.zh : el.dataset.en;
    });

    document.querySelectorAll('[data-ph-zh]').forEach(input => {
        if (!input.dataset.phEn) {
            input.dataset.phEn = input.placeholder;
        }
        input.placeholder = zhMode ? input.dataset.phZh : input.dataset.phEn;
    });
}

function checkCurrentUser() {
    const user = JSON.parse(localStorage.getItem('apex_user'));
    const authArea = document.getElementById('authNavArea');
    if (!authArea) return;

    if (user && user.role === 'ADMIN') {
        authArea.innerHTML = `
            <div class="d-flex align-items-center gap-2">
                <a href="admin.html" class="btn btn-danger btn-sm fw-bold px-3">📅 预约后台 / Admin</a>
                <button class="btn btn-outline-secondary btn-sm text-white" onclick="handleLogout()">Logout</button>
            </div>
        `;
    } else {
        authArea.innerHTML = `
            <button class="btn btn-danger btn-sm fw-bold px-3 py-1 text-white shadow-sm" data-bs-toggle="modal" data-bs-target="#authModal">
                🔒 Admin Login
            </button>
        `;
    }
}

function handleAdminLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value.trim().toLowerCase();
    const pwd = document.getElementById('loginPassword').value.trim();

    if ((email === 'boss@pitlane.ca' || email === 'manager@pitlane.ca' || email === 'boss@kingsautospa.ca') && pwd === '123456') {
        const roleTitle = email.startsWith('manager') ? 'Manager (门店经理)' : 'Owner (老板)';
        localStorage.setItem('apex_user', JSON.stringify({ name: roleTitle, email, role: "ADMIN" }));
        window.location.href = "admin.html";
    } else {
        alert('Invalid Manager/Owner credentials! / 经理或老板账号密码错误！');
    }
}

function handleLogout() {
    localStorage.removeItem('apex_user');
    window.location.href = 'index.html';
}