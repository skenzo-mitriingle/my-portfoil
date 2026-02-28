/* ============================================================
   DATA (same as your React arrays)
============================================================ */
const TYPE_TEXTS = ["the front end web developer ✌🏻"];

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
    url: "https://github.com/skenzo-mitriingle/annonymous",
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

/* ============================================================
   NAV (scroll blur)
============================================================ */
(function navScroll() {
  const nav = document.getElementById("nav");
  const onScroll = () => {
    if (window.scrollY > 50) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

/* ============================================================
   TYPEWRITER (React -> Vanilla)
============================================================ */
(function typewriter() {
  const el = document.getElementById("typewriter");
  const cursor = document.getElementById("typeCursor");

  let textIdx = 0;
  let charIdx = 0;
  let phase = "typing"; // typing | deleting

  const typingSpeed = 70;
  const deleteSpeed = 45;
  const pauseAfterType = 900;
  const pauseAfterDelete = 500;

  // cursor blink
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
   RENDER STATIC LISTS (badges, stats, projects, contact)
============================================================ */
(function renderBadges() {
  const root = document.getElementById("badges");
  root.innerHTML = BADGES.map((b) => `<span class="badge">${b}</span>`).join(
    "",
  );
})();

(function renderStats() {
  const root = document.getElementById("statsGrid");
  root.innerHTML = STATS.map(
    ([v, l]) => `
    <div class="stat">
      <div class="v">${v}</div>
      <div class="l">${l}</div>
    </div>
  `,
  ).join("");
})();

(function renderProjects() {
  const root = document.getElementById("projectsGrid");

  root.innerHTML = PROJECTS.map((p, i) => {
    const color = CARD_COLORS[i % CARD_COLORS.length];
    const { r, g, b } = hexToRgb(color);
    const num = String(i + 1).padStart(2, "0");
    return `
      <a class="project-card"
         href="${p.url}" target="_blank" rel="noopener noreferrer"
         style="
          --c:${color};
          --cr:${r}; --cg:${g}; --cb:${b};
         ">
        <div class="project-top">
          <span style="font-size:1.4rem">${p.emoji}</span>
          <span class="project-num" style="border-color:${color}40;color:${color};background:rgba(${r},${g},${b},0.12)">${num}</span>
        </div>
        <h3 class="project-title">${p.name}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-cta" style="color:${color}">
          VIEW ON GITHUB <span>→</span>
        </div>
      </a>
    `;
  }).join("");

  // Make hover background/glow like your React version (dynamic per card)
  const cards = root.querySelectorAll(".project-card");
  cards.forEach((card, idx) => {
    const color = CARD_COLORS[idx % CARD_COLORS.length];
    const { r, g, b } = hexToRgb(color);

    card.addEventListener("mouseenter", () => {
      card.style.background = `linear-gradient(135deg,rgba(${r},${g},${b},0.14),rgba(${r},${g},${b},0.04))`;
      card.style.border = `1px solid ${color}55`;
      card.style.boxShadow = `0 0 38px rgba(${r},${g},${b},0.28),0 14px 44px rgba(0,0,0,0.5)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.background = "rgba(255,255,255,0.026)";
      card.style.border = "1px solid rgba(255,255,255,0.075)";
      card.style.boxShadow = "0 4px 22px rgba(0,0,0,0.3)";
    });
  });
})();

(function renderContact() {
  const root = document.getElementById("contactRoot");

  function formView() {
    return `
      <form class="form" id="contactForm">
        <input class="input" name="name" type="text" placeholder="Your Name" required />
        <input class="input" name="email" type="email" placeholder="Your Email" required />
        <textarea class="textarea" name="message" rows="5" placeholder="Your Message" required></textarea>
        <button class="send-btn" type="submit">Send Message ✈</button>
      </form>
    `;
  }

  function sentView() {
    return `
      <div class="sent">
        <div class="emoji">🚀</div>
        <h3>Message Sent!</h3>
        <p>I'll get back to you soon.</p>
      </div>
    `;
  }

  root.innerHTML = formView();

  root.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) return;
    root.innerHTML = sentView();
  });
})();

/* ============================================================
   SKILLS (IntersectionObserver fill animation)
============================================================ */
(function renderSkills() {
  const root = document.getElementById("skillsGrid");

  root.innerHTML = SKILLS.map(
    (s, i) => `
    <div class="skill" data-level="${s.level}" data-color="${s.color}" data-delay="${i * 85}">
      <div class="skill-top">
        <span class="skill-name">${s.name}</span>
        <span class="skill-pct">${s.level}%</span>
      </div>
      <div class="skill-track">
        <div class="skill-fill"></div>
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
        fill.style.transitionDelay = `${delay}ms`;
        fill.style.width = `${lvl}%`;

        obs.unobserve(el);
      });
    },
    { threshold: 0.3 },
  );

  skillsEls.forEach((el) => obs.observe(el));
})();

/* ============================================================
   THREE.JS SCENE (same vibe as your React Scene component)
============================================================ */
(function threeScene() {
  const canvas = document.getElementById("bg");
  if (!canvas || typeof THREE === "undefined") return;

  // Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);

  // Scene & Camera
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    68,
    window.innerWidth / window.innerHeight,
    0.1,
    300,
  );
  camera.position.set(0, 0, 22);

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
  function addShape(geo, color, count, scaleRange, opacity) {
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
  }

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

  // 3) Tech token sprites
  const techTokens = [
    { txt: "</>", color: "#00ffcc" },
    { txt: "git", color: "#f05032" },
  ];

  function mkSprite({ txt, color }) {
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
  }

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
  function mkRainTex() {
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
  }

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

  // 6) Circuit trace lines + dots
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

  // 7) Torus knots
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

  // 8) Ambient orbs
  function mkOrb(x, y, z, color, r) {
    const m = new THREE.Mesh(
      new THREE.SphereGeometry(r, 16, 16),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.035 }),
    );
    m.position.set(x, y, z);
    scene.add(m);
  }
  mkOrb(-6, 4, -8, 0x00ffcc, 5);
  mkOrb(8, -3, -10, 0x7c3aed, 7);
  mkOrb(0, 0, -15, 0x0ea5e9, 9);

  // Resize
  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener("resize", onResize);

  // Animation
  let t = 0;
  function animate() {
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

    // Scroll -> camera pull-in (like your React useEffect)
    const scrollY = window.scrollY || 0;
    // smaller multiplier keeps zoom changes subtle; clamp to avoid 'teleporting' too close
    const desiredZ = 22 - scrollY * 0.003; // tweak this factor to taste
    camera.position.z = THREE.MathUtils.clamp(desiredZ, 8, 22);

    renderer.render(scene, camera);
  }
  animate();
})();
