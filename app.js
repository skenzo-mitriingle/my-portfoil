/* ============================================================
   FIX: roundRect polyfill (prevents 3D sprite drawing crash)
============================================================ */
(function () {
  const proto =
    window.CanvasRenderingContext2D && CanvasRenderingContext2D.prototype;
  if (!proto || proto.roundRect) return;

  proto.roundRect = function (x, y, w, h, r) {
    r = Math.min(r || 0, w / 2, h / 2);
    this.beginPath();
    this.moveTo(x + r, y);
    this.arcTo(x + w, y, x + w, y + h, r);
    this.arcTo(x + w, y + h, x, y + h, r);
    this.arcTo(x, y + h, x, y, r);
    this.arcTo(x, y, x + w, y, r);
    this.closePath();
    return this;
  };
})();

/* ============================================================
   DATA
============================================================ */
const TYPE_TEXTS = ["the full-stack web developer ✌🏻"];

const BADGES = ["C++", "Three.js", "python", "Node.js", "CSS3", "JavaScript"];

const STATS = [
  ["9+", "Projects"],
  ["3+", "Years Exp."],
  ["10+", "Technologies"],
  ["∞", "Coding"],
];

const SKILLS = [
  { name: "C++", level: 90, color: "#61dafb" },
  { name: "JavaScript", level: 92, color: "#f7df1e" },
  { name: "Three.js", level: 78, color: "#00ffcc" },
  { name: "Tailwind CSS", level: 20, color: "#38bdf8" },
  { name: "HTML5 / CSS3", level: 95, color: "#e44d26" },
  { name: "Node.js", level: 72, color: "#83cd29" },
  { name: "python", level: 70, color: "#3178c6" },
  { name: "Git / GitHub", level: 85, color: "#f05032" },
];

const PROJECTS = [
  {
    name: "Annonymous",
    desc: "Anonymous real-time messaging app",
    emoji: "💬",
    url: "https://skenzo-mitriingle.github.io/annonymous/",
  },
  {
    name: "Mubas Pickleball",
    desc: "Live pickleball project website",
    emoji: "🏓",
    url: "https://skenzo-mitriingle.github.io/mubas-pickleball/",
  },
  {
    name: "Job Search",
    desc: "Job listing & search platform",
    emoji: "💼",
    url: "https://github.com/skenzo-mitriingle/job-search-project",
  },
  {
    name: "Scientific Calculator",
    desc: "Full-featured scientific calculator",
    emoji: "🔬",
    url: "https://github.com/skenzo-mitriingle/scientific-calculator",
  },
  {
    name: "Mubas Cafe",
    desc: "Online cafe ordering system",
    emoji: "☕",
    url: "https://github.com/skenzo-mitriingle/mubas-cafe",
  },
  {
    name: "Streamer",
    desc: "Live streaming dashboard & player",
    emoji: "📡",
    url: "https://github.com/skenzo-mitriingle/streamer",
  },
  {
    name: "SkenzoMovies",
    desc: "Movie discovery, search & reviews",
    emoji: "🎬",
    url: "https://github.com/skenzo-mitriingle/skenzomovies",
  },
  {
    name: "My Website",
    desc: "Personal brand & portfolio site",
    emoji: "🌐",
    url: "https://github.com/skenzo-mitriingle/my-website",
  },
  
  {
    name: "Website",
    desc: "Agency / business landing page",
    emoji: "🏢",
    url: "https://github.com/skenzo-mitriingle/website",
  },
  {
    name: "Musik",
    desc: "Music player & streaming interface",
    emoji: "🎵",
    url: "https://github.com/skenzo-mitriingle/musik",
  },
];

const CARD_COLORS = [
  "#06b6d4",
  "#818cf8",
  "#a78bfa",
  "#34d399",
  "#f472b6",
  "#fb923c",
  "#38bdf8",
  "#c084fc",
  "#4ade80",
];

const CONTACT_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/skenzo-mitriingle",
    external: true,
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M12 .5C5.65.5.5 5.7.5 12.1c0 5.1 3.3 9.4 7.9 11 .6.1.8-.3.8-.6v-2.4c-3.2.7-3.9-1.4-3.9-1.4-.5-1.4-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.6.8 1.9 1.2.9.6 2.4.4 3 .3.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.4-2.3 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 .9-.3 3.2 1.2.9-.3 1.9-.4 2.8-.4.9 0 1.9.1 2.8.4 2.2-1.5 3.2-1.2 3.2-1.2.6 1.7.2 2.9.1 3.2.7.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.6 7.9-5.9 7.9-11C23.5 5.7 18.3.5 12 .5z"></path>
    </svg>`,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/enock-kaphukusi-88532028a/",
    external: true,
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M6.9 8.7H3.8V20h3.1V8.7zM5.3 3.5C4.2 3.5 3.4 4.3 3.4 5.4s.8 1.9 1.9 1.9 1.9-.8 1.9-1.9-.8-1.9-1.9-1.9zM20.6 13.2c0-3.2-1.7-4.7-4-4.7-1.8 0-2.6 1-3.1 1.7V8.7h-3.1c0 1 .1 11.3 0 11.3h3.1v-6.3c0-.3 0-.7.1-.9.2-.7.8-1.5 1.8-1.5 1.2 0 1.7.9 1.7 2.3V20h3.1v-6.8z"></path>
    </svg>`,
  },
  {
    label: "Facebook",
    href: "https://web.facebook.com/nock.kaphukusi",
    external: true,
    icon: `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V9c0-.9.3-1.5 1.6-1.5h1.6V4.8c-.8-.1-1.7-.2-2.5-.2-2.5 0-4.1 1.5-4.1 4.4V11H8v3h2.6v8h2.9z"></path>
    </svg>`,
  },
];

/* ============================================================
   HELPERS
============================================================ */
function hexToRgb(hex) {
  const h = hex.replace("#", "");
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

function renderContactLinks() {
  const links = CONTACT_LINKS.map((link) => {
    const target = link.external ? ` target="_blank"` : "";
    const rel = link.external ? ` rel="noopener noreferrer"` : "";
    return `
      <a class="contact-icon-link"
         href="${link.href}"${target}${rel}
         aria-label="${link.label}"
         data-tooltip="${link.label}"
         title="${link.label}">
        ${link.icon}
      </a>
    `;
  }).join("");

  return `<div class="contact-links" aria-label="Social and contact links">${links}</div>`;
}

/* ============================================================
   NAV
============================================================ */
(function navScroll() {
  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (!nav) return;

  const closeMenu = () => {
    nav.classList.remove("open");
    if (navToggle) navToggle.setAttribute("aria-expanded", "false");
  };

  const onScroll = () => {
    if (window.scrollY > 50) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks
      .querySelectorAll("a")
      .forEach((link) => link.addEventListener("click", closeMenu));

    document.addEventListener("click", (e) => {
      if (window.innerWidth > 760) return;
      if (!nav.classList.contains("open")) return;
      if (nav.contains(e.target)) return;
      closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) closeMenu();
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

/* ============================================================
   TYPEWRITER
============================================================ */
(function typewriter() {
  const el = document.getElementById("typewriter");
  const cursor = document.getElementById("typeCursor");
  if (!el || !cursor) return;

  let textIdx = 0;
  let charIdx = 0;
  let phase = "typing";

  const typingSpeed = 70;
  const deleteSpeed = 45;
  const pauseAfterType = 900;
  const pauseAfterDelete = 500;

  setInterval(() => {
    cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
  }, 530);

  function tick() {
    const current = TYPE_TEXTS[textIdx];

    if (phase === "typing") {
      if (charIdx < current.length) {
        charIdx++;
        el.textContent = current.slice(0, charIdx);
        setTimeout(tick, typingSpeed);
      } else {
        setTimeout(() => {
          phase = "deleting";
          tick();
        }, pauseAfterType);
      }
      return;
    }

    if (phase === "deleting") {
      if (charIdx > 0) {
        charIdx--;
        el.textContent = current.slice(0, charIdx);
        setTimeout(tick, deleteSpeed);
      } else {
        setTimeout(() => {
          textIdx = (textIdx + 1) % TYPE_TEXTS.length;
          phase = "typing";
          tick();
        }, pauseAfterDelete);
      }
    }
  }

  tick();
})();

/* ============================================================
   RENDER BADGES
============================================================ */
(function renderBadges() {
  const root = document.getElementById("badges");
  if (!root) return;
  root.innerHTML = BADGES.map((b) => `<span class="badge">${b}</span>`).join(
    "",
  );
})();

/* ============================================================
   RENDER STATS
============================================================ */
(function renderStats() {
  const root = document.getElementById("statsGrid");
  if (!root) return;
  const statLinks = {
    Projects: {
      href: "#projects",
      ariaLabel: "Go to projects section",
    },
    Technologies: {
      href: "#skills",
      ariaLabel: "Go to skills section",
    },
  };

  root.innerHTML = STATS.map(
    ([v, l]) => {
      const statLink = statLinks[l];
      return `
    ${
      statLink
        ? `
    <a class="stat stat-link" href="${statLink.href}" aria-label="${statLink.ariaLabel}">
      <div class="v">${v}</div>
      <div class="l">${l}</div>
    </a>
    `
        : `
    <div class="stat">
      <div class="v">${v}</div>
      <div class="l">${l}</div>
    </div>
    `
    }
  `;
    },
  ).join("");
})();

/* ============================================================
   RENDER PROJECTS + HOVER
============================================================ */
(function renderProjects() {
  const root = document.getElementById("projectsGrid");
  if (!root) return;

  root.innerHTML = PROJECTS.map((p, i) => {
    const color = CARD_COLORS[i % CARD_COLORS.length];
    const { r, g, b } = hexToRgb(color);
    const num = String(i + 1).padStart(2, "0");
    return `
      <a class="project-card"
         href="${p.url}" target="_blank" rel="noopener noreferrer"
         style="background:rgba(255,255,255,0.026);border:1px solid rgba(255,255,255,0.075);box-shadow:0 4px 22px rgba(0,0,0,0.3);transform:translateY(0) scale(1);transition:all .38s cubic-bezier(.22,1,.36,1);">
        <div class="project-top">
          <span style="font-size:1.4rem">${p.emoji}</span>
          <span class="project-num" style="border:1px solid ${color}40;border-radius:4px;padding:2px 8px;color:${color};background:rgba(${r},${g},${b},0.12)">${num}</span>
        </div>
        <h3 class="project-title">${p.name}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-cta" style="color:${color};margin-top:14px;font-size:.62rem;font-family:monospace;display:flex;gap:4px;opacity:.0;transform:translateX(-12px);transition:all .32s">
          VIEW ON GITHUB <span>→</span>
        </div>
      </a>
    `;
  }).join("");

  const cards = root.querySelectorAll(".project-card");
  cards.forEach((card, idx) => {
    const color = CARD_COLORS[idx % CARD_COLORS.length];
    const { r, g, b } = hexToRgb(color);
    const cta = card.querySelector(".project-cta");

    card.addEventListener("mouseenter", () => {
      card.style.background = `linear-gradient(135deg,rgba(${r},${g},${b},0.14),rgba(${r},${g},${b},0.04))`;
      card.style.border = `1px solid ${color}55`;
      card.style.boxShadow = `0 0 38px rgba(${r},${g},${b},0.28),0 14px 44px rgba(0,0,0,0.5)`;
      card.style.transform = "translateY(-9px) scale(1.03)";
      if (cta) {
        cta.style.opacity = "1";
        cta.style.transform = "translateX(0)";
      }
    });

    card.addEventListener("mouseleave", () => {
      card.style.background = "rgba(255,255,255,0.026)";
      card.style.border = "1px solid rgba(255,255,255,0.075)";
      card.style.boxShadow = "0 4px 22px rgba(0,0,0,0.3)";
      card.style.transform = "translateY(0) scale(1)";
      if (cta) {
        cta.style.opacity = "0";
        cta.style.transform = "translateX(-12px)";
      }
    });
  });
})();

/* ============================================================
   CONTACT (mailto fallback)
============================================================ */
(function renderContactForm() {
  const root = document.getElementById("contactRoot");
  if (!root) return;

  const CONTACT_EMAIL = "enockkaphukusi24@gmail.com";

  root.innerHTML = `
    <form class="form" id="contactForm">
      <input class="input" name="name" type="text" placeholder="Your Name" required />
      <input class="input" name="email" type="email" placeholder="Your Email" required />
      <textarea class="textarea" name="message" rows="5" placeholder="Your Message" required></textarea>
      <button class="send-btn" id="sendBtn" type="submit">Email Me ✈</button>
      <p id="formStatus" style="color:#64748b;font-size:.85rem;margin-top:.25rem;"></p>
      ${renderContactLinks()}
    </form>
  `;

  const form = document.getElementById("contactForm");
  const btn = document.getElementById("sendBtn");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const subject = `Portfolio message from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      message,
    ].join("\n");

    btn.disabled = true;
    btn.style.opacity = "0.75";
    status.style.color = "#94a3b8";
    status.textContent = "Opening your email app...";

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.setTimeout(() => {
      btn.disabled = false;
      btn.style.opacity = "1";
      status.style.color = "#22d3ee";
      status.textContent =
        "If your email app opened, press send there to finish.";
    }, 600);
  });
})();

/* ============================================================
   SKILLS (IntersectionObserver animation)
============================================================ */
(function renderSkills() {
  const root = document.getElementById("skillsGrid");
  if (!root) return;

  root.innerHTML = SKILLS.map(
    (s, i) => `
    <div class="skill" data-level="${s.level}" data-color="${s.color}" data-delay="${i * 85}">
      <div class="skill-top">
        <span class="skill-name">${s.name}</span>
        <span class="skill-pct">${s.level}%</span>
      </div>
      <div class="skill-track">
        <div class="skill-fill" style="width:0%"></div>
      </div>
    </div>
  `,
  ).join("");

  const skillsEls = root.querySelectorAll(".skill");

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const lvl = Number(el.dataset.level);
        const color = el.dataset.color;
        const delay = Number(el.dataset.delay);

        const fill = el.querySelector(".skill-fill");
        fill.style.background = `linear-gradient(90deg,${color}77,${color})`;
        fill.style.boxShadow = `0 0 10px ${color}55`;
        fill.style.transition = `width 1.15s cubic-bezier(0.22,1,0.36,1) ${delay}ms`;
        fill.style.width = `${lvl}%`;

        obs.unobserve(el);
      });
    },
    { threshold: 0.3 },
  );

  skillsEls.forEach((el) => obs.observe(el));
})();

/* ============================================================
   THREE.JS SCENE — FULL DEVELOPER 3D BACKGROUND (UNCHANGED)
============================================================ */
(function threeScene() {
  const canvas = document.getElementById("bg");
  if (!canvas || typeof THREE === "undefined") return;

  // ── Renderer ──────────────────────────────────────────────
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);

  // ── Scene & Camera ────────────────────────────────────────
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    68,
    window.innerWidth / window.innerHeight,
    0.1,
    300,
  );
  camera.position.set(0, 0, 22);

  // Exponential fog for depth
  scene.fog = new THREE.FogExp2(0x000814, 0.019);

  // 1) Circuit grid floor
  const grid = new THREE.GridHelper(150, 70, 0x003344, 0x001520);
  grid.position.y = -10;
  grid.material.opacity = 0.5;
  grid.material.transparent = true;
  scene.add(grid);

  const grid2 = new THREE.GridHelper(150, 200, 0x001a28, 0x001018);
  grid2.position.y = -10.01;
  grid2.material.opacity = 0.25;
  grid2.material.transparent = true;
  scene.add(grid2);

  // 2) Wireframe tech shapes
  const mkWire = (color, opacity = 0.18) =>
    new THREE.MeshBasicMaterial({
      color,
      wireframe: true,
      transparent: true,
      opacity,
    });

  const shapes = [];
  const addShape = (geo, color, count, scaleRange, opacity) => {
    for (let i = 0; i < count; i++) {
      const m = new THREE.Mesh(geo, mkWire(color, opacity));
      m.position.set(
        (Math.random() - 0.5) * 55,
        (Math.random() - 0.5) * 28,
        (Math.random() - 0.5) * 25 - 4,
      );
      m.scale.setScalar(scaleRange[0] + Math.random() * scaleRange[1]);
      m.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      );
      m.userData.spin = {
        rx: (Math.random() - 0.5) * 0.009,
        ry: (Math.random() - 0.5) * 0.013,
        rz: (Math.random() - 0.5) * 0.007,
      };
      scene.add(m);
      shapes.push(m);
    }
  };

  addShape(new THREE.IcosahedronGeometry(1, 1), 0x00ffcc, 12, [0.6, 1.8], 0.16);
  addShape(new THREE.OctahedronGeometry(1, 0), 0x38bdf8, 10, [0.4, 1.2], 0.18);
  addShape(
    new THREE.TorusGeometry(1.1, 0.04, 8, 60),
    0xa78bfa,
    7,
    [1.0, 2.0],
    0.15,
  );
  addShape(new THREE.BoxGeometry(1, 1, 1), 0x06b6d4, 8, [0.5, 1.5], 0.14);
  addShape(new THREE.TetrahedronGeometry(1, 0), 0xf472b6, 6, [0.5, 1.3], 0.16);

  // 3) Tech symbol sprites
  const techTokens = [
    { txt: "</>", color: "#00ffcc" },
    { txt: "{ }", color: "#38bdf8" },
    { txt: "[ ]", color: "#a78bfa" },
    { txt: "λ", color: "#a78bfa" },
    { txt: "∑", color: "#34d399" },
  ];

  const mkSprite = ({ txt, color }) => {
    const cv = document.createElement("canvas");
    cv.width = 280;
    cv.height = 120;
    const ctx = cv.getContext("2d");
    ctx.clearRect(0, 0, 280, 120);

    ctx.fillStyle = color + "18";
    ctx.beginPath();
    ctx.roundRect(10, 15, 260, 90, 14);
    ctx.fill();

    ctx.strokeStyle = color + "40";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(10, 15, 260, 90, 14);
    ctx.stroke();

    ctx.font = "bold 52px 'Courier New', monospace";
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.85;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(txt, 140, 62);

    const tex = new THREE.CanvasTexture(cv);
    const mat = new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      depthWrite: false,
    });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(3.6, 1.55, 1);
    return sprite;
  };

  const tokenSprites = techTokens.map((tok) => {
    const s = mkSprite(tok);
    s.position.set(
      (Math.random() - 0.5) * 60,
      (Math.random() - 0.5) * 30,
      (Math.random() - 0.5) * 20 - 3,
    );
    s.userData = {
      baseY: s.position.y,
      speed: 0.003 + Math.random() * 0.004,
      phase: Math.random() * Math.PI * 2,
      driftX: (Math.random() - 0.5) * 0.0015,
    };
    scene.add(s);
    return s;
  });

  // 4) Code rain
  const rainChars =
    "01アイウエオカキクケコサシスセソABCDEFabcdef{}[]<>/=+-*#@$%";
  const mkRainTex = () => {
    const cv = document.createElement("canvas");
    cv.width = 64;
    cv.height = 64;
    const ctx = cv.getContext("2d");
    ctx.clearRect(0, 0, 64, 64);
    const hue = 150 + Math.random() * 70;
    ctx.font = `bold ${34 + Math.floor(Math.random() * 12)}px monospace`;
    ctx.fillStyle = `hsl(${hue},100%,${55 + Math.random() * 25}%)`;
    ctx.globalAlpha = 0.45 + Math.random() * 0.45;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
      rainChars[Math.floor(Math.random() * rainChars.length)],
      32,
      36,
    );
    return new THREE.CanvasTexture(cv);
  };

  const rainSprites = [];
  const RAIN_COLS = 26;
  const RAIN_ROWS = 14;

  for (let col = 0; col < RAIN_COLS; col++) {
    const x = -34 + col * 2.65;
    for (let row = 0; row < RAIN_ROWS; row++) {
      const sp = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: mkRainTex(),
          transparent: true,
          depthWrite: false,
        }),
      );
      sp.scale.set(0.65, 0.65, 1);
      sp.position.set(
        x + (Math.random() - 0.5) * 0.4,
        16 - row * 2.4,
        -14 - Math.random() * 10,
      );
      sp.userData = {
        speed: 0.011 + Math.random() * 0.018,
        refreshTimer: Math.floor(Math.random() * 70),
      };
      scene.add(sp);
      rainSprites.push(sp);
    }
  }

  // 5) Particle cloud
  const PARTICLES = 1400;
  const pPos = new Float32Array(PARTICLES * 3);
  const pCol = new Float32Array(PARTICLES * 3);

  for (let i = 0; i < PARTICLES; i++) {
    pPos[i * 3] = (Math.random() - 0.5) * 80;
    pPos[i * 3 + 1] = (Math.random() - 0.5) * 50;
    pPos[i * 3 + 2] = (Math.random() - 0.5) * 50;
    const t = Math.random();
    if (t < 0.33) {
      pCol[i * 3] = 0.0;
      pCol[i * 3 + 1] = 1.0;
      pCol[i * 3 + 2] = 0.8;
    } else if (t < 0.66) {
      pCol[i * 3] = 0.2;
      pCol[i * 3 + 1] = 0.6;
      pCol[i * 3 + 2] = 1.0;
    } else {
      pCol[i * 3] = 0.6;
      pCol[i * 3 + 1] = 0.2;
      pCol[i * 3 + 2] = 1.0;
    }
  }

  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
  pGeo.setAttribute("color", new THREE.BufferAttribute(pCol, 3));

  const pCloud = new THREE.Points(
    pGeo,
    new THREE.PointsMaterial({
      size: 0.055,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
    }),
  );
  scene.add(pCloud);

  // 6) Circuit trace lines + node dots
  const traceMat = new THREE.LineBasicMaterial({
    color: 0x003355,
    transparent: true,
    opacity: 0.4,
  });
  for (let i = 0; i < 40; i++) {
    const pts = [];
    let x = (Math.random() - 0.5) * 70,
      y = (Math.random() - 0.5) * 35,
      z = -12 - Math.random() * 12;
    pts.push(new THREE.Vector3(x, y, z));
    const segs = 3 + Math.floor(Math.random() * 5);
    for (let s = 0; s < segs; s++) {
      if (Math.random() > 0.5) x += (Math.random() - 0.5) * 10;
      else y += (Math.random() - 0.5) * 6;
      pts.push(new THREE.Vector3(x, y, z));
    }
    scene.add(
      new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), traceMat),
    );
  }

  const dotGeo = new THREE.SphereGeometry(0.08, 6, 6);
  const dotMat = new THREE.MeshBasicMaterial({
    color: 0x00ffcc,
    transparent: true,
    opacity: 0.5,
  });
  for (let i = 0; i < 50; i++) {
    const dot = new THREE.Mesh(dotGeo, dotMat);
    dot.position.set(
      (Math.random() - 0.5) * 70,
      (Math.random() - 0.5) * 35,
      -12 - Math.random() * 12,
    );
    scene.add(dot);
  }

  // 7) Big background torus knots
  const knot = new THREE.Mesh(
    new THREE.TorusKnotGeometry(8, 0.28, 200, 16, 2, 3),
    new THREE.MeshBasicMaterial({
      color: 0x001133,
      wireframe: true,
      transparent: true,
      opacity: 0.09,
    }),
  );
  knot.position.set(16, 2, -28);
  scene.add(knot);

  const knot2 = new THREE.Mesh(
    new THREE.TorusKnotGeometry(5, 0.2, 150, 12, 3, 5),
    new THREE.MeshBasicMaterial({
      color: 0x200040,
      wireframe: true,
      transparent: true,
      opacity: 0.07,
    }),
  );
  knot2.position.set(-18, -4, -24);
  scene.add(knot2);

  // 8) Ambient light orbs
  const mkOrb = (x, y, z, color, r) => {
    const m = new THREE.Mesh(
      new THREE.SphereGeometry(r, 16, 16),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.035 }),
    );
    m.position.set(x, y, z);
    scene.add(m);
  };
  mkOrb(-6, 4, -8, 0x00ffcc, 5);
  mkOrb(8, -3, -10, 0x7c3aed, 7);
  mkOrb(0, 0, -15, 0x0ea5e9, 9);

  // Resize
  const onResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  window.addEventListener("resize", onResize);

  // Animate
  let t = 0;
  const animate = () => {
    requestAnimationFrame(animate);
    t += 0.01;

    shapes.forEach((m) => {
      m.rotation.x += m.userData.spin.rx;
      m.rotation.y += m.userData.spin.ry;
      m.rotation.z += m.userData.spin.rz;
    });

    tokenSprites.forEach((s) => {
      s.position.y =
        s.userData.baseY +
        Math.sin(t * s.userData.speed * 60 + s.userData.phase) * 0.7;
      s.position.x += s.userData.driftX;
      if (s.position.x > 30) s.position.x = -30;
      if (s.position.x < -30) s.position.x = 30;
    });

    rainSprites.forEach((s) => {
      s.position.y -= s.userData.speed;
      s.userData.refreshTimer--;
      if (s.position.y < -18 || s.userData.refreshTimer <= 0) {
        s.position.y = 18;
        s.userData.refreshTimer = 15 + Math.floor(Math.random() * 90);
        s.material.map = mkRainTex();
        s.material.needsUpdate = true;
      }
    });

    pCloud.rotation.y = t * 0.012;
    pCloud.rotation.x = t * 0.005;

    knot.rotation.x = t * 0.005;
    knot.rotation.y = t * 0.008;
    knot2.rotation.x = -t * 0.007;
    knot2.rotation.z = t * 0.004;

    grid.material.opacity = 0.3 + Math.sin(t * 0.5) * 0.12;

    camera.position.x = Math.sin(t * 0.12) * 1.5;
    camera.position.y = Math.cos(t * 0.09) * 0.8;

    // Scroll → camera pull-in (same as your original)
    const scrollY = window.scrollY || 0;
    camera.position.z = Math.max(8, 22 - scrollY * 0.01);

    renderer.render(scene, camera);
  };

  animate();
})();
