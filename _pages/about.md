---
permalink: /
title: "About"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

Welcome! I am an undergraduate researcher at **Semyung University**, Department of Computer Science, working in the **Data Intelligence Lab** (Advisor: Prof. Suan Lee).

## Research Interests

- Large Language Models (LLMs)
- Natural Language Processing
- Knowledge Distillation & Model Compression
- LLM Safety & Unlearning

## Education

- **B.S.** in Computer Science, Semyung University (2023 - Present)

## News

| Date | Description |
|------|-------------|
| 2026.02 | 🏆 Best Paper Award Runner-Up at IEEE BigComp 2026 |
| 2025.10 | Journal paper accepted in 정보과학회 컴퓨팅의 실제 논문지 |
| 2025.03 | Journal paper accepted in 정보과학회 컴퓨팅의 실제 논문지 |
| 2025 | 총장상 수상, Semyung University |

---

## Selected Publications

<style>
.pub-gallery-section {
  position: relative;
  width: 100%;
  height: 520px;
  overflow: hidden;
  margin-top: 12px;
  border-radius: 16px;
  background: linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0f0f23 100%);
}
.pub-gallery-viewport {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
.pub-gallery-stage {
  position: absolute;
  top: 75%;
  left: 50%;
  width: 0;
  height: 0;
  transform: translate(-50%, -50%) rotate(0deg);
  transform-origin: center center;
  transition: transform 0.6s ease;
}
.pub-gallery-card {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 160px;
  height: 210px;
  transform-origin: center center;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0,0,0,0.4);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: linear-gradient(145deg, #1e293b, #334155);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 14px;
  border: 1px solid rgba(255,255,255,0.08);
}
.pub-gallery-card .card-badge {
  font-size: 0.55em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 2px 6px;
  border-radius: 3px;
  display: inline-block;
  margin-bottom: 8px;
  width: fit-content;
}
.card-badge-award { background: linear-gradient(135deg, #f6d365, #fda085); color: #333; }
.card-badge-journal { background: linear-gradient(135deg, #667eea, #764ba2); color: #fff; }
.card-badge-conf { background: linear-gradient(135deg, #11998e, #38ef7d); color: #1a1a2e; }
.pub-gallery-card .card-title {
  font-size: 0.72em;
  font-weight: 700;
  color: #e2e8f0;
  line-height: 1.35;
  margin: 0 0 8px 0;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.pub-gallery-card .card-venue {
  font-size: 0.58em;
  color: #94a3b8;
  margin: 0;
  margin-top: auto;
}
.pub-gallery-card .card-year {
  font-size: 0.6em;
  color: #60a5fa;
  font-weight: 600;
  margin: 0;
}
/* Preview panel */
.pub-preview {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 10;
  transition: opacity 0.4s;
  pointer-events: none;
  max-width: 80%;
}
.pub-preview .preview-title {
  font-size: 1.1em;
  font-weight: 800;
  color: #fff;
  line-height: 1.3;
  margin: 0 0 6px 0;
  text-shadow: 0 2px 8px rgba(0,0,0,0.5);
}
.pub-preview .preview-authors {
  font-size: 0.82em;
  color: #cbd5e1;
  margin: 0 0 4px 0;
}
.pub-preview .preview-venue {
  font-size: 0.78em;
  color: #60a5fa;
  margin: 0 0 10px 0;
}
.pub-preview .preview-links a {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 5px 14px;
  font-size: 0.75em;
  font-weight: 600;
  color: #fff;
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 20px;
  text-decoration: none;
  pointer-events: auto;
  transition: background 0.2s;
  margin: 0 3px;
}
.pub-preview .preview-links a:hover {
  background: rgba(255,255,255,0.3);
}
.pub-gallery-hint {
  position: absolute;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.72em;
  color: rgba(255,255,255,0.35);
  z-index: 10;
}
</style>

<div class="pub-gallery-section">
  <div class="pub-preview" id="pubPreview">
    <p class="preview-title" id="previewTitle"></p>
    <p class="preview-authors" id="previewAuthors"></p>
    <p class="preview-venue" id="previewVenue"></p>
    <div class="preview-links" id="previewLinks"></div>
  </div>
  <div class="pub-gallery-viewport">
    <div class="pub-gallery-stage" id="pubStage"></div>
  </div>
  <div class="pub-gallery-hint">← drag to rotate →</div>
</div>

<script>
(function() {
  const papers = [
    { title: "Linear Separability and Feature Importance Analysis in LLM Representation Spaces",
      authors: "<strong>Jaesung Kim</strong>, Suan Lee",
      venue: "IEEE BigComp 2026", year: "2026", badge: "award", badgeText: "🏆 Best Paper Runner-Up",
      url: "" },
    { title: "한국어 완곡 코팅을 통한 LLM 안전성 우회 분석",
      authors: "Sanghyun Gil, <strong>Jaesung Kim</strong>, Suan Lee",
      venue: "대한전자공학회 학술대회", year: "2025", badge: "conf", badgeText: "Conference",
      url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12551251" },
    { title: "LLM as a Search: 사용자 의도 분석을 통한 지능형 법률 문서 검색",
      authors: "<strong>Jaesung Kim</strong>, Suyun Ko, Jingeun Jung, Suan Lee",
      venue: "정보과학회 컴퓨팅의 실제 논문지", year: "2025", badge: "journal", badgeText: "Journal",
      url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12417647" },
    { title: "Minimal Tuning, Maximum Gains: 선택적 레이어 파인튜닝 기반 효율적 학습 전략",
      authors: "<strong>Jaesung Kim</strong>, Suan Lee",
      venue: "KCC 2025", year: "2025", badge: "conf", badgeText: "Conference",
      url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12318726" },
    { title: "KO-SmallThinker: Reasoning 기반 소형 언어 모델을 활용한 초거대 언어 모델의 성능 한계 극복",
      authors: "<strong>Jaesung Kim</strong>, Suan Lee",
      venue: "KCC 2025", year: "2025", badge: "conf", badgeText: "Conference",
      url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12318727" },
    { title: "K-GovExam: 한국 공무원 시험 기반 LLM 평가용 데이터셋 구축 및 추론 언어 모델 분석",
      authors: "<strong>Jaesung Kim</strong>, Suan Lee",
      venue: "KCC 2025", year: "2025", badge: "conf", badgeText: "Conference",
      url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12318728" },
    { title: "Efficiently Lightweight Korean Language Model with Post-layer Pruning and Multi-stage Fine-tuning",
      authors: "<strong>Jaesung Kim</strong>, Suan Lee",
      venue: "정보과학회 컴퓨팅의 실제 논문지", year: "2025", badge: "journal", badgeText: "Journal",
      url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12109171" },
    { title: "Depth-Up Scaling을 활용한 언어 모델 증강과 소규모 데이터 학습 성능 비교",
      authors: "<strong>Jaesung Kim</strong>, Suan Lee",
      venue: "KSC 2024", year: "2024", badge: "conf", badgeText: "Conference",
      url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12042288" },
    { title: "파인튜닝, RAG, 프롬프트 기반 언러닝 방법의 성능 비교 분석",
      authors: "<strong>Jaesung Kim</strong>, Suan Lee",
      venue: "KCC 2024", year: "2024", badge: "conf", badgeText: "Conference",
      url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11862398" },
    { title: "법률 QA 데이터셋을 이용한 거대 언어 모델 학습",
      authors: "<strong>Jaesung Kim</strong>, Kangjun Kim, Suan Lee",
      venue: "KCC 2024", year: "2024", badge: "conf", badgeText: "Conference",
      url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11862400" },
    { title: "서로 다른 언어 모델의 상징적 지식 증류를 이용한 경량화된 감정 분석 모델",
      authors: "<strong>Jaesung Kim</strong>, Suan Lee",
      venue: "KSC 2023", year: "2023", badge: "conf", badgeText: "Conference",
      url: "https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11705510" }
  ];

  const CNT = papers.length;
  const stage = document.getElementById('pubStage');
  const preview = document.getElementById('pubPreview');
  if (!stage) return;

  let RADIUS, CARD_W, CARD_H, STEP, rot = 0;
  const cards = [];

  function computeSizes() {
    const vw = stage.parentElement.offsetWidth;
    RADIUS = Math.min(420, vw * 0.38);
    CARD_W = Math.max(130, RADIUS * 0.38);
    CARD_H = Math.max(170, RADIUS * 0.50);
    STEP = 360 / CNT;
  }
  computeSizes();

  const badgeClass = { award: 'card-badge-award', journal: 'card-badge-journal', conf: 'card-badge-conf' };

  papers.forEach((p, i) => {
    const el = document.createElement('div');
    el.className = 'pub-gallery-card';
    el.style.width = CARD_W + 'px';
    el.style.height = CARD_H + 'px';
    el.innerHTML = `
      <span class="card-badge ${badgeClass[p.badge]}">${p.badgeText}</span>
      <p class="card-title">${p.title}</p>
      <p class="card-venue">${p.venue}</p>
      <p class="card-year">${p.year}</p>`;
    const base = STEP * i;
    el.dataset.baseAngle = base;
    el.dataset.idx = i;
    el.style.transform = `translate(-50%,-50%) rotate(${base}deg) translate(0,-${RADIUS}px)`;
    stage.appendChild(el);
    cards.push(el);
    el.addEventListener('click', () => {
      if (p.url) window.open(p.url, '_blank');
    });
  });

  function highlight() {
    const norm = ((rot % 360) + 360) % 360;
    let best = 0, bestDiff = 360;
    cards.forEach((el, idx) => {
      const vis = (parseFloat(el.dataset.baseAngle) + norm) % 360;
      const diff = Math.min(vis, 360 - vis);
      if (diff < bestDiff) { bestDiff = diff; best = idx; }
    });
    cards.forEach((el, idx) => {
      const base = parseFloat(el.dataset.baseAngle);
      const scale = idx === best ? 1.25 : 1;
      const z = idx === best ? 1000 : 100;
      el.style.transform = `translate(-50%,-50%) rotate(${base}deg) translate(0,-${RADIUS}px) scale(${scale})`;
      el.style.zIndex = z;
      el.style.boxShadow = idx === best
        ? '0 8px 30px rgba(96,165,250,0.5)'
        : '0 6px 20px rgba(0,0,0,0.3)';
    });
    const p = papers[best];
    document.getElementById('previewTitle').textContent = p.title;
    document.getElementById('previewAuthors').innerHTML = p.authors;
    document.getElementById('previewVenue').textContent = p.venue + ', ' + p.year;
    const linksEl = document.getElementById('previewLinks');
    linksEl.innerHTML = p.url
      ? `<a href="${p.url}" target="_blank"><i class="fa-solid fa-file-lines"></i> Paper</a>`
      : '';
  }
  highlight();

  function rotate(dir) {
    rot += dir * STEP;
    stage.style.transform = `translate(-50%,-50%) rotate(${rot}deg)`;
    highlight();
  }

  let sx = 0, dragging = false;
  const start = (x) => { dragging = true; sx = x; };
  const move = (x) => {
    if (!dragging) return;
    const dx = x - sx;
    if (Math.abs(dx) > 35) {
      rotate(dx > 0 ? -1 : 1);
      sx = x;
    }
  };
  const end = () => { dragging = false; };

  stage.parentElement.addEventListener('mousedown', e => { e.preventDefault(); start(e.clientX); });
  window.addEventListener('mousemove', e => move(e.clientX));
  window.addEventListener('mouseup', end);
  stage.parentElement.addEventListener('touchstart', e => start(e.touches[0].clientX), {passive:true});
  stage.parentElement.addEventListener('touchmove', e => move(e.touches[0].clientX), {passive:true});
  stage.parentElement.addEventListener('touchend', end);

  window.addEventListener('resize', () => {
    computeSizes();
    cards.forEach(el => {
      const base = parseFloat(el.dataset.baseAngle);
      el.style.width = CARD_W + 'px';
      el.style.height = CARD_H + 'px';
      el.style.transform = `translate(-50%,-50%) rotate(${base}deg) translate(0,-${RADIUS}px)`;
    });
    stage.style.transform = `translate(-50%,-50%) rotate(${rot}deg)`;
    highlight();
  });
})();
</script>

<div style="text-align:center; margin-top:20px;">
  <a href="/cv/publications/" style="display:inline-block; padding:10px 28px; font-size:0.9em; font-weight:600; color:var(--link-color-hover, #3b9cba); border:2px solid var(--link-color-hover, #3b9cba); border-radius:25px; text-decoration:none;">See All Publications →</a>
</div>
