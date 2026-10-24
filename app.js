// 1. 初始化默认商品数据
const defaultProducts = [
    { id: 1, name: "pH-Neutral High Foam Car Wash Shampoo (1L)", nameZh: "中性高泡洗车香波原液 (1L)", price: 24.99, stock: 35, status: "ACTIVE", img: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=400&q=80" },
    { id: 2, name: "Plush Edgeless Microfiber Drying Towels (3-Pack)", nameZh: "无边加厚超细纤维收水毛巾 (3条装)", price: 16.99, stock: 28, status: "ACTIVE", img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80" },
    { id: 3, name: "Ceramic Graphene Quick Detailer Spray (500ml)", nameZh: "纳米石墨烯快速镀晶维护喷雾 (500ml)", price: 29.99, stock: 2, status: "ACTIVE", img: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=400&q=80" },
    { id: 4, name: "Custom 3D All-Weather Waterproof Floor Mats", nameZh: "专车开模 3D 全包围防水脚垫套组", price: 139.00, stock: 12, status: "ACTIVE", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80" }
];

if (!localStorage.getItem('apex_products')) {
    localStorage.setItem('apex_products', JSON.stringify(defaultProducts));
}

// 语言状态跨页面持久化 ('en' 或 'zh')
function isZh() {
    return localStorage.getItem('pl_lang') === 'zh';
}

// 2. 自动渲染公共顶部导航栏、页脚、登录弹窗及招聘详情弹窗
function initSharedLayout(activePage) {
    // 渲染顶部导航栏
    const navPlaceholder = document.getElementById('sharedNavbar');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark navbar-custom sticky-top shadow-sm py-2">
            <div class="container-fluid px-lg-4">
                <a class="navbar-brand fw-bold fs-4 d-flex align-items-center text-white" href="index.html">
                    <span class="me-2">🏎️</span>
                    <span>Pit Lane <span class="text-warning">Car Detailing</span></span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto align-items-center gap-1">
                        <li class="nav-item">
                            <a class="nav-link-custom ${activePage === 'home' ? 'nav-active' : ''}" href="index.html" data-zh="首页">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link-custom ${activePage === 'services' ? 'nav-active' : ''}" href="services.html" data-zh="服务与会员">Services & Memberships</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link-custom ${activePage === 'booking' ? 'nav-active' : ''}" href="services.html#booking-section" data-zh="预约工位">Book a Bay</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link-custom ${activePage === 'shop' ? 'nav-active' : ''}" href="shop.html" data-zh="汽美商城">Parts & Shop</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link-custom position-relative ${activePage === 'cart' ? 'nav-active' : ''}" href="shop.html?view=cart">
                                🛒 <span data-zh="购物车">Cart</span>
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" id="cartCountBadge">0</span>
                            </a>
                        </li>
                        <li class="nav-item ms-lg-1 notranslate">
                            <button class="btn btn-outline-warning btn-sm fw-bold px-3 py-1" onclick="toggleLanguage()" id="langToggleBtn">
                                中文
                            </button>
                        </li>
                        <li class="nav-item ms-lg-1 notranslate" id="authNavArea"></li>
                    </ul>
                </div>
            </div>
        </nav>`;
    }

    // 渲染底部页脚
    const footerPlaceholder = document.getElementById('sharedFooter');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
        <footer class="bg-dark text-white py-4 mt-auto border-top border-secondary">
            <div class="container text-center">
                <p class="fw-bold mb-1" data-zh="🏎️ Pit Lane Car Detailing（King's Auto Spa Ltd 旗下官方直营分店）">
                    🏎️ Pit Lane Car Detailing (Official Sister Branch of King's Auto Spa Ltd)
                </p>
                <p class="small text-white-50 mb-1" data-zh="📍 地址：#195 - 4551 No. 3 Road, Richmond, BC V6X 2C3 | 📞 电话：(604) 303-8885 | ✉️ 邮箱：info@pitlanedetailing.ca">
                    📍 #195 - 4551 No. 3 Road, Richmond, BC V6X 2C3 | 📞 (604) 303-8885 | ✉️ info@pitlanedetailing.ca
                </p>
                <p class="small text-secondary mb-0" data-zh="© 2026 Pit Lane Car Detailing & King's Auto Spa Ltd. 版权所有。">
                    © 2026 Pit Lane Car Detailing & King's Auto Spa Ltd. All Rights Reserved.
                </p>
            </div>
        </footer>`;
    }

    // 注入登录/注册模态框 & Indeed 招聘详情模态框
    const modalsContainer = document.createElement('div');
    modalsContainer.innerHTML = `
    <!-- 登录/注册/员工申请 模态框 (保持中英双语对照 notranslate) -->
    <div class="modal fade notranslate" id="authModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content border-0 shadow">
                <div class="modal-header border-bottom-0 pb-0">
                    <ul class="nav nav-pills w-100 justify-content-center gap-1">
                        <li class="nav-item">
                            <button class="nav-link active fw-bold px-3 py-1" data-bs-toggle="pill" data-bs-target="#login-pane">Login / 登录</button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link fw-bold px-3 py-1" data-bs-toggle="pill" data-bs-target="#register-pane">Register / 注册</button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link fw-bold px-3 py-1 text-warning border border-warning" data-bs-toggle="pill" data-bs-target="#employee-pane">
                                👔 Employee Only / 员工通道
                            </button>
                        </li>
                    </ul>
                    <button type="button" class="btn-close ms-0" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body p-4">
                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="login-pane">
                            <form onsubmit="handleLogin(event)">
                                <div class="mb-3">
                                    <label class="form-label small fw-bold">Email Address / 电子邮箱</label>
                                    <input type="email" class="form-control" id="loginEmail" placeholder="name@example.com" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label small fw-bold">Password / 密码</label>
                                    <input type="password" class="form-control" id="loginPassword" placeholder="••••••••" required>
                                </div>
                                <button type="submit" class="btn btn-dark w-100 fw-bold py-2">Log In / 登录账户</button>
                            </form>
                        </div>

                        <div class="tab-pane fade" id="register-pane">
                            <form onsubmit="handleRegister(event)">
                                <div class="mb-3">
                                    <label class="form-label small fw-bold">Full Name / 姓名</label>
                                    <input type="text" class="form-control" id="regName" placeholder="e.g. Alex" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label small fw-bold">Email Address / 电子邮箱</label>
                                    <input type="email" class="form-control" id="regEmail" placeholder="name@example.com" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label small fw-bold">Password / 密码</label>
                                    <input type="password" class="form-control" id="regPassword" placeholder="••••••••" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label small fw-bold">Confirm Password / 再次确认密码</label>
                                    <input type="password" class="form-control" id="regConfirmPassword" placeholder="••••••••" required>
                                </div>
                                <button type="submit" class="btn btn-success w-100 fw-bold py-2">Create Customer Account / 创建客户账户</button>
                            </form>
                        </div>

                        <div class="tab-pane fade" id="employee-pane">
                            <div class="alert alert-warning py-2 small mb-3">
                                ⚠️ <strong>Employee Registration / 员工注册须知:</strong><br>
                                Submissions require owner approval before backend access is activated.<br>
                                提交后需老板在后台批准后方可凭工位密码登录。
                            </div>
                            <form onsubmit="handleEmployeeRegister(event)">
                                <div class="mb-2">
                                    <label class="form-label small fw-bold">Staff Full Name / 员工姓名</label>
                                    <input type="text" class="form-control" id="empName" placeholder="e.g. Yuanpeng" required>
                                </div>
                                <div class="mb-2">
                                    <label class="form-label small fw-bold">Staff Email / 员工邮箱</label>
                                    <input type="email" class="form-control" id="empEmail" placeholder="staff@pitlane.ca" required>
                                </div>
                                <div class="mb-2">
                                    <label class="form-label small fw-bold">Station Number / 工位编号</label>
                                    <input type="text" class="form-control" id="empStation" placeholder="e.g. Bay-01" required>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label small fw-bold">Station Password / 工位登录密码</label>
                                    <input type="password" class="form-control" id="empPassword" placeholder="••••••••" required>
                                </div>
                                <button type="submit" class="btn btn-warning w-100 fw-bold py-2">Submit Staff Application / 提交员工申请</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Indeed 完整招工信息弹窗 (支持一键中英切换) -->
    <div class="modal fade" id="hiringModal" tabindex="-1">
        <div class="modal-dialog modal-lg modal-dialog-scrollable">
            <div class="modal-content border-0 shadow">
                <div class="modal-header bg-dark text-white">
                    <h5 class="modal-title fw-bold" data-zh="📢 诚聘洗车与汽美技师 (Car Wash Attendant)">📢 Now Hiring: Car Wash Attendant</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body p-4">
                    <div class="d-flex flex-wrap gap-2 mb-3">
                        <span class="badge bg-warning text-dark fs-6" data-zh="时薪：$19.00 / 小时起">Pay: From $19.00 per hour</span>
                        <span class="badge bg-primary fs-6" data-zh="工作类型：全职 / 兼职">Job Types: Full-time, Part-time</span>
                        <span class="badge bg-secondary fs-6" data-zh="预计工时：每周 40.0 小时">Expected hours: 40.0 per week</span>
                        <span class="badge bg-success fs-6" data-zh="工作地点：到店实地工作 (Richmond)">Work Location: In person</span>
                    </div>

                    <h6 class="fw-bold text-uppercase text-primary mt-3" data-zh="职位概述 (Overview)">Overview</h6>
                    <p class="text-secondary small" data-zh="我们正在寻找一位友好且敬业的洗车技师（Car Wash Attendant）加入我们的团队。该职位负责提供卓越的客户服务，同时确保车辆按照最高标准得到彻底的清洁与维护。理想的候选人应注重细节、工作可靠，并热衷于为客户带来积极的体验。">
                        We are seeking a friendly and dedicated Car Wash Attendant to join our team. This role involves providing exceptional customer service while ensuring vehicles are thoroughly cleaned and maintained to the highest standards. The ideal candidate will be detail-oriented, reliable, and passionate about delivering a positive experience for our customers.
                    </p>

                    <h6 class="fw-bold text-uppercase text-primary mt-3" data-zh="工作职责 (Responsibilities)">Responsibilities</h6>
                    <ul class="small text-secondary lh-lg">
                        <li data-zh="热情接待客户，并协助解决其车辆清洁需求">Greet customers warmly and assist with their vehicle cleaning needs</li>
                        <li data-zh="安全、高效地操作洗车及汽美设备">Operate car wash equipment safely and efficiently</li>
                        <li data-zh="执行车辆外部与内部清洁，包括手工精洗、吸尘及深度细节护理">Perform exterior and interior cleaning of vehicles, including washing, vacuuming, and detailing</li>
                        <li data-zh="保持工作区域与设备的整洁，确保施工环境安全">Maintain cleanliness of the work area and equipment to ensure a safe environment</li>
                        <li data-zh="及时解答客户疑问或关切，提供优质的客户服务">Provide excellent customer service by addressing questions or concerns promptly</li>
                        <li data-zh="在清洁过程中悉心呵护所有车辆，防止任何磕碰或损伤">Ensure all vehicles are handled with care to prevent damage during cleaning process</li>
                    </ul>

                    <h6 class="fw-bold text-uppercase text-primary mt-3" data-zh="任职要求 (Requirements)">Requirements</h6>
                    <ul class="small text-secondary lh-lg">
                        <li data-zh="有清洁或客户服务经验者优先，但非硬性要求；店内提供完整带薪培训">Prior experience in cleaning or customer service is preferred but not required; training will be provided</li>
                        <li data-zh="能够在快节奏的环境中工作，同时保持对细节的专注">Ability to work in a fast-paced environment while maintaining attention to detail</li>
                        <li data-zh="具备良好的沟通能力与友善的服务态度">Strong communication skills and a friendly demeanor</li>
                        <li data-zh="能够长时间站立并完成弯腰、提举及移动设备等体力工作">Ability to stand for extended periods and perform physical tasks such as bending, lifting, and moving equipment</li>
                        <li data-zh="排班出勤必须具备可靠的交通方式并严格守时">Reliable transportation and punctuality are essential for scheduled shifts</li>
                        <li data-zh="态度积极，愿意学习新的汽车美容技能">A positive attitude and willingness to learn new skills</li>
                    </ul>

                    <h6 class="fw-bold text-uppercase text-primary mt-3" data-zh="福利待遇 (Benefits)">Benefits</h6>
                    <ul class="small text-secondary mb-0">
                        <li data-zh="提供员工店内免费停车位 (On-site parking)">On-site parking</li>
                        <li data-zh="享受员工店内服务与商品内部折扣 (Store discount)">Store discount</li>
                    </ul>
                </div>
                <div class="modal-footer bg-light">
                    <div class="me-auto small text-muted" data-zh="📍 应聘方式：请直接到店 (#195 - 4551 No. 3 Rd) 或致电 (604) 303-8885 联系经理">
                        📍 Apply in person at #195 - 4551 No. 3 Rd or call (604) 303-8885
                    </div>
                    <button type="button" class="btn btn-dark fw-bold" data-bs-dismiss="modal" data-zh="关闭窗口">Close</button>
                </div>
            </div>
        </div>
    </div>`;
    document.body.appendChild(modalsContainer);

    checkCurrentUser();
    updateCartBadge();
    applyCurrentLanguage();
}

// 3. 100% 全覆盖中英文翻译引擎（基于 data-zh 属性与表单占位符）
function toggleLanguage() {
    const nextLang = isZh() ? 'en' : 'zh';
    localStorage.setItem('pl_lang', nextLang);
    applyCurrentLanguage();
    if (typeof onLanguageChanged === 'function') {
        onLanguageChanged();
    }
}

function applyCurrentLanguage() {
    const zhMode = isZh();
    const btn = document.getElementById('langToggleBtn');
    if (btn) btn.innerText = zhMode ? 'EN' : '中文';

    // 翻译所有带 data-zh 的元素
    document.querySelectorAll('[data-zh]').forEach(el => {
        if (!el.dataset.en) {
            el.dataset.en = el.innerText.trim();
        }
        el.innerText = zhMode ? el.dataset.zh : el.dataset.en;
    });

    // 翻译所有带 data-ph-zh 的输入框 Placeholder
    document.querySelectorAll('[data-ph-zh]').forEach(input => {
        if (!input.dataset.phEn) {
            input.dataset.phEn = input.placeholder;
        }
        input.placeholder = zhMode ? input.dataset.phZh : input.dataset.phEn;
    });
}

// 4. 账户登录、注册、员工申请与购物车数量角标
function getCart() {
    const user = JSON.parse(localStorage.getItem('apex_user'));
    if (!user) return [];
    return JSON.parse(localStorage.getItem('apex_cart_' + user.email) || "[]");
}

function saveCart(cart) {
    const user = JSON.parse(localStorage.getItem('apex_user'));
    if (user) {
        localStorage.setItem('apex_cart_' + user.email, JSON.stringify(cart));
        updateCartBadge();
    }
}

function updateCartBadge() {
    const count = getCart().reduce((acc, item) => acc + item.qty, 0);
    const navBadge = document.getElementById('cartCountBadge');
    if (navBadge) navBadge.innerText = count;
    const shopBadge = document.getElementById('shopCartBadge');
    if (shopBadge) shopBadge.innerText = count;
}

function checkCurrentUser() {
    const user = JSON.parse(localStorage.getItem('apex_user'));
    const authArea = document.getElementById('authNavArea');
    if (!authArea) return;

    if (user) {
        const isStaffOrAdmin = (user.role === 'ADMIN' || user.role === 'STAFF');
        authArea.innerHTML = `
            <div class="dropdown">
                <button class="btn btn-warning btn-sm dropdown-toggle fw-bold text-dark" type="button" data-bs-toggle="dropdown">
                    👤 ${user.name}
                </button>
                <ul class="dropdown-menu dropdown-menu-end shadow">
                    ${isStaffOrAdmin ? `<li><a class="dropdown-item text-primary fw-bold" href="admin.html">🛠️ Admin Portal / 管理后台</a></li><li><hr class="dropdown-divider"></li>` : ''}
                    <li><a class="dropdown-item" href="shop.html?view=orders">📦 My Orders / 我的订单</a></li>
                    <li><a class="dropdown-item" href="shop.html?view=cart">🛒 My Cart / 购物车</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item text-danger" href="javascript:void(0)" onclick="handleLogout()">Logout / 退出登录</a></li>
                </ul>
            </div>
        `;
    } else {
        authArea.innerHTML = `
            <button class="btn btn-warning btn-sm fw-bold px-3 py-1 text-dark shadow-sm" data-bs-toggle="modal" data-bs-target="#authModal">
                👤 Login / Register
            </button>
        `;
    }
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const pwd = document.getElementById('loginPassword').value.trim();

    let userObj = null;
    if ((email === 'boss@pitlane.ca' || email === 'boss@kingsautospa.ca') && pwd === '123456') {
        userObj = { name: "Anson (Owner)", email, role: "ADMIN" };
    } else {
        const staffList = JSON.parse(localStorage.getItem('apex_approved_staff') || "[]");
        const staff = staffList.find(s => s.email === email && s.password === pwd);
        if (staff) {
            userObj = { name: staff.name, email: staff.email, station: staff.station, role: "STAFF" };
        } else {
            const pendingStaff = JSON.parse(localStorage.getItem('apex_pending_staff') || "[]");
            if (pendingStaff.some(s => s.email === email)) {
                alert('⏳ Your staff account is still pending owner approval!\n您的员工账号仍在等待老板批准中！');
                return;
            }
            const registered = JSON.parse(localStorage.getItem('apex_registered_users') || "[]");
            const found = registered.find(u => u.email === email && u.password === pwd);
            if (found) userObj = { name: found.name, email: found.email, role: "CUSTOMER" };
        }
    }

    if (userObj) {
        localStorage.setItem('apex_user', JSON.stringify(userObj));
        bootstrap.Modal.getInstance(document.getElementById('authModal')).hide();
        if (userObj.role === 'ADMIN' || userObj.role === 'STAFF') {
            window.location.href = "admin.html";
        } else {
            checkCurrentUser();
            updateCartBadge();
            if (typeof onUserStatusChanged === 'function') onUserStatusChanged();
        }
    } else {
        alert('Invalid Email or Password / 邮箱或密码错误');
    }
}

function handleRegister(event) {
    event.preventDefault();
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const pwd = document.getElementById('regPassword').value.trim();
    const confirmPwd = document.getElementById('regConfirmPassword').value.trim();

    if (pwd !== confirmPwd) {
        alert('⚠️ Password confirmation does not match! / 两次输入的密码不一致！');
        return;
    }

    let registered = JSON.parse(localStorage.getItem('apex_registered_users') || "[]");
    if (registered.some(u => u.email === email) || email === 'boss@pitlane.ca') {
        alert('This email address is already registered! / 该邮箱已被注册！');
        return;
    }

    registered.push({ name, email, password: pwd });
    localStorage.setItem('apex_registered_users', JSON.stringify(registered));
    localStorage.setItem('apex_user', JSON.stringify({ name, email, role: "CUSTOMER" }));

    alert(
        `📧 [Pit Lane Car Detailing] - Welcome Email
--------------------------------------------------
To: ${email}
Subject: Welcome to Pit Lane Car Detailing!

Dear ${name},

Your customer account has been successfully created. 
You can now book indoor detailing bays, manage memberships, and order car care products online.

Location: #195 - 4551 No. 3 Road, Richmond, BC V6X 2C3`
    );

    bootstrap.Modal.getInstance(document.getElementById('authModal')).hide();
    checkCurrentUser();
    updateCartBadge();
    if (typeof onUserStatusChanged === 'function') onUserStatusChanged();
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

    alert(`✅ Staff application submitted for station [${station}]!\nThe owner has been notified.`);
    bootstrap.Modal.getInstance(document.getElementById('authModal')).hide();
    event.target.reset();
}

function handleLogout() {
    localStorage.removeItem('apex_user');
    window.location.href = 'index.html';
}