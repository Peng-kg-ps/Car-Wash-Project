// 1. 复刻店内商标 SVG（黑底 + 双交叉黑白格子旗 + 红色方程式赛车）
const PIT_LANE_LOGO_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 64" width="66" height="38" style="border-radius:6px; border:1px solid #334155; background:#050505; flex-shrink:0;">
    <!-- 交叉旗杆 -->
    <line x1="34" y1="30" x2="54" y2="8" stroke="#e2e8f0" stroke-width="2"/>
    <line x1="62" y1="30" x2="42" y2="8" stroke="#e2e8f0" stroke-width="2"/>
    <!-- 左侧黑白格子旗 -->
    <g transform="translate(22, 6) rotate(-12)">
        <rect x="0" y="0" width="20" height="13" fill="#ffffff" stroke="#94a3b8" stroke-width="0.6"/>
        <rect x="0" y="0" width="5" height="4.3" fill="#000"/>
        <rect x="10" y="0" width="5" height="4.3" fill="#000"/>
        <rect x="5" y="4.3" width="5" height="4.3" fill="#000"/>
        <rect x="15" y="4.3" width="5" height="4.3" fill="#000"/>
        <rect x="0" y="8.6" width="5" height="4.4" fill="#000"/>
        <rect x="10" y="8.6" width="5" height="4.4" fill="#000"/>
    </g>
    <!-- 右侧黑白格子旗 -->
    <g transform="translate(54, 4) rotate(12)">
        <rect x="0" y="0" width="20" height="13" fill="#ffffff" stroke="#94a3b8" stroke-width="0.6"/>
        <rect x="0" y="0" width="5" height="4.3" fill="#000"/>
        <rect x="10" y="0" width="5" height="4.3" fill="#000"/>
        <rect x="5" y="4.3" width="5" height="4.3" fill="#000"/>
        <rect x="15" y="4.3" width="5" height="4.3" fill="#000"/>
        <rect x="0" y="8.6" width="5" height="4.4" fill="#000"/>
        <rect x="10" y="8.6" width="5" height="4.4" fill="#000"/>
    </g>
    <!-- 红色方程式赛车主体 -->
    <path d="M10 48 L10 35 L22 35 L25 41 L46 36 L60 31 L84 41 L98 44 L100 49 L10 49 Z" fill="#dc2626" stroke="#ffffff" stroke-width="1"/>
    <!-- 赛车座舱与防滚架 -->
    <path d="M46 36 L54 27 L63 32 Z" fill="#ef4444" stroke="#ffffff" stroke-width="0.8"/>
    <!-- 尾翼与前鼻翼纹理 -->
    <rect x="8" y="32" width="12" height="4" fill="#b91c1c" stroke="#ffffff" stroke-width="0.8"/>
    <path d="M84 44 L102 44 L104 49 L84 49 Z" fill="#ef4444" stroke="#ffffff" stroke-width="0.8"/>
    <!-- 后轮 -->
    <circle cx="26" cy="49" r="9" fill="#111827" stroke="#e2e8f0" stroke-width="2"/>
    <circle cx="26" cy="49" r="4" fill="#94a3b8"/>
    <!-- 前轮 -->
    <circle cx="76" cy="49" r="9" fill="#111827" stroke="#e2e8f0" stroke-width="2"/>
    <circle cx="76" cy="49" r="4" fill="#94a3b8"/>
</svg>`;

// 2. 自动将该商标注入为浏览器顶部标签页图标 (Favicon)
function injectFavicon() {
    const svgBase64 = btoa(PIT_LANE_LOGO_SVG.trim());
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.type = 'image/svg+xml';
    link.href = 'data:image/svg+xml;base64,' + svgBase64;
}

function isZh() {
    return localStorage.getItem('pl_lang') === 'zh';
}

// 3. 渲染公共导航栏、页脚、内部员工/管理员登录弹窗及招工弹窗
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
                            <a class="nav-link-custom" href="services.html#booking-section" data-zh="在线预约工位">Book a Bay</a>
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
    <!-- 内部员工 / 经理 / 老板专用登录窗口 (Staff & Admin Portal Only) -->
    <div class="modal fade notranslate" id="authModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content dark-panel border-danger shadow-lg">
                <div class="modal-header border-bottom border-secondary pb-2">
                    <ul class="nav nav-pills w-100 justify-content-center gap-2">
                        <li class="nav-item">
                            <button class="nav-link active fw-bold px-3 py-1 bg-danger text-white" data-bs-toggle="pill" data-bs-target="#login-pane">
                                🔒 Staff / Admin Login (内部登录)
                            </button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link fw-bold px-3 py-1 text-info border border-primary" data-bs-toggle="pill" data-bs-target="#employee-pane">
                                👔 New Staff Apply (员工工位申请)
                            </button>
                        </li>
                    </ul>
                    <button type="button" class="btn-close btn-close-white ms-0" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body p-4">
                    <div class="tab-content">
                        <!-- 员工/经理/老板登录 -->
                        <div class="tab-pane fade show active" id="login-pane">
                            <p class="text-white-50 small text-center mb-3">
                                Internal portal for Pit Lane Owner, Manager & Approved Staff Only.<br>
                                仅限车行老板、经理及已授权员工登录管理预约日历。
                            </p>
                            <form onsubmit="handleStaffLogin(event)">
                                <div class="mb-3">
                                    <label class="form-label small fw-bold text-white">Staff / Admin Email (工作邮箱)</label>
                                    <input type="email" class="form-control form-control-dark" id="loginEmail" placeholder="boss@pitlane.ca" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label small fw-bold text-white">Password / Station Password (登录密码)</label>
                                    <input type="password" class="form-control form-control-dark" id="loginPassword" placeholder="••••••••" required>
                                </div>
                                <button type="submit" class="btn btn-danger w-100 fw-bold py-2">Enter Admin Portal / 进入管理后台</button>
                            </form>
                        </div>

                        <!-- 新员工工位申请 -->
                        <div class="tab-pane fade" id="employee-pane">
                            <div class="alert bg-primary bg-opacity-25 text-info border-primary py-2 small mb-3">
                                ℹ️ <strong>Employee Only / 员工须知:</strong><br>
                                Submit your station number and password. Once approved by the Owner/Manager, you can log in to manage daily bay bookings.
                            </div>
                            <form onsubmit="handleEmployeeRegister(event)">
                                <div class="mb-2">
                                    <label class="form-label small fw-bold text-white">Staff Full Name / 员工姓名</label>
                                    <input type="text" class="form-control form-control-dark" id="empName" placeholder="e.g. Yuanpeng" required>
                                </div>
                                <div class="mb-2">
                                    <label class="form-label small fw-bold text-white">Staff Email / 员工邮箱</label>
                                    <input type="email" class="form-control form-control-dark" id="empEmail" placeholder="staff@pitlane.ca" required>
                                </div>
                                <div class="mb-2">
                                    <label class="form-label small fw-bold text-white">Station Number / 工位编号</label>
                                    <input type="text" class="form-control form-control-dark" id="empStation" placeholder="e.g. Bay-01" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label small fw-bold text-white">Station Password / 工位登录密码</label>
                                    <input type="password" class="form-control form-control-dark" id="empPassword" placeholder="••••••••" required>
                                </div>
                                <button type="submit" class="btn btn-primary w-100 fw-bold py-2">Submit Staff Application / 提交员工申请</button>
                            </form>
                        </div>
                    </div>
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

    if (user && (user.role === 'ADMIN' || user.role === 'STAFF')) {
        authArea.innerHTML = `
            <div class="d-flex align-items-center gap-2">
                <a href="admin.html" class="btn btn-danger btn-sm fw-bold px-3">🛠️ Admin (${user.name})</a>
                <button class="btn btn-outline-secondary btn-sm text-white" onclick="handleLogout()">Logout</button>
            </div>
        `;
    } else {
        authArea.innerHTML = `
            <button class="btn btn-outline-danger btn-sm fw-bold px-3 py-1 text-white" data-bs-toggle="modal" data-bs-target="#authModal">
                🔒 Staff Login
            </button>
        `;
    }
}

function handleStaffLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const pwd = document.getElementById('loginPassword').value.trim();

    let userObj = null;
    if ((email === 'boss@pitlane.ca' || email === 'manager@pitlane.ca' || email === 'boss@kingsautospa.ca') && pwd === '123456') {
        userObj = { name: "Owner / Manager", email, role: "ADMIN" };
    } else {
        const staffList = JSON.parse(localStorage.getItem('apex_approved_staff') || "[]");
        const staff = staffList.find(s => s.email === email && s.password === pwd);
        if (staff) {
            userObj = { name: staff.name, email: staff.email, station: staff.station, role: "STAFF" };
        } else {
            const pendingStaff = JSON.parse(localStorage.getItem('apex_pending_staff') || "[]");
            if (pendingStaff.some(s => s.email === email)) {
                alert('⏳ Your staff account is pending Manager/Owner approval!\n您的员工账号仍在等待经理或老板批准中！');
                return;
            }
        }
    }

    if (userObj) {
        localStorage.setItem('apex_user', JSON.stringify(userObj));
        window.location.href = "admin.html";
    } else {
        alert('Invalid Staff/Admin credentials! / 内部邮箱或密码错误！');
    }
}

function handleEmployeeRegister(event) {
    event.preventDefault();
    const name = document.getElementById('empName').value.trim();
    const email = document.getElementById('empEmail').value.trim();
    const station = document.getElementById('empStation').value.trim();
    const pwd = document.getElementById('empPassword').value.trim();

    let pending = JSON.parse(localStorage.getItem('apex_pending_staff') || "[]");
    let approved = JSON.parse(localStorage.getItem('apex_approved_staff') || "[]");

    if (pending.some(s => s.email === email) || approved.some(s => s.email === email)) {
        alert('This employee email has already been submitted or registered!');
        return;
    }

    pending.push({ id: Date.now(), name, email, station, password: pwd, appliedAt: new Date().toLocaleString() });
    localStorage.setItem('apex_pending_staff', JSON.stringify(pending));

    alert(`✅ Staff application submitted for [${station}]!\nOnce approved by the Manager/Owner, you can log in.`);
    bootstrap.Modal.getInstance(document.getElementById('authModal')).hide();
    event.target.reset();
}

function handleLogout() {
    localStorage.removeItem('apex_user');
    window.location.href = 'index.html';
}