// 1. 店内商标高清矢量 SVG
const PIT_LANE_LOGO_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 64" width="68" height="40" style="border-radius:6px; border:1px solid #dc2626; background:#050505; flex-shrink:0;">
    <line x1="34" y1="30" x2="54" y2="6" stroke="#e2e8f0" stroke-width="2.2"/>
    <line x1="62" y1="30" x2="42" y2="6" stroke="#e2e8f0" stroke-width="2.2"/>
    <g transform="translate(20, 5) rotate(-14)">
        <rect x="0" y="0" width="20" height="13" fill="#ffffff" stroke="#94a3b8" stroke-width="0.6"/>
        <rect x="0" y="0" width="5" height="4.3" fill="#000000"/>
        <rect x="10" y="0" width="5" height="4.3" fill="#000000"/>
        <rect x="5" y="4.3" width="5" height="4.3" fill="#000000"/>
        <rect x="15" y="4.3" width="5" height="4.3" fill="#000000"/>
        <rect x="0" y="8.6" width="5" height="4.4" fill="#000000"/>
        <rect x="10" y="8.6" width="5" height="4.4" fill="#000000"/>
    </g>
    <g transform="translate(54, 3) rotate(14)">
        <rect x="0" y="0" width="20" height="13" fill="#ffffff" stroke="#94a3b8" stroke-width="0.6"/>
        <rect x="0" y="0" width="5" height="4.3" fill="#000000"/>
        <rect x="10" y="0" width="5" height="4.3" fill="#000000"/>
        <rect x="5" y="4.3" width="5" height="4.3" fill="#000000"/>
        <rect x="15" y="4.3" width="5" height="4.3" fill="#000000"/>
        <rect x="0" y="8.6" width="5" height="4.4" fill="#000000"/>
        <rect x="10" y="8.6" width="5" height="4.4" fill="#000000"/>
    </g>
    <path d="M10 48 L10 35 L22 35 L25 41 L46 36 L60 31 L84 41 L98 44 L100 49 L10 49 Z" fill="#dc2626" stroke="#ffffff" stroke-width="1"/>
    <path d="M46 36 L54 27 L63 32 Z" fill="#ef4444" stroke="#ffffff" stroke-width="0.8"/>
    <rect x="8" y="32" width="12" height="4" fill="#b91c1c" stroke="#ffffff" stroke-width="0.8"/>
    <path d="M84 44 L102 44 L104 49 L84 49 Z" fill="#ef4444" stroke="#ffffff" stroke-width="0.8"/>
    <circle cx="26" cy="49" r="9" fill="#111827" stroke="#e2e8f0" stroke-width="2"/>
    <circle cx="26" cy="49" r="4" fill="#94a3b8"/>
    <circle cx="76" cy="49" r="9" fill="#111827" stroke="#e2e8f0" stroke-width="2"/>
    <circle cx="76" cy="49" r="4" fill="#94a3b8"/>
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
    <!-- 经理与老板专用后台登录窗口 (Manager & Owner Login Only) -->
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