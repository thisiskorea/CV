/* ───────── Publication Circular Gallery ───────── */
(function () {
  var papers = [
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

  var CNT = papers.length;
  var stage = document.getElementById('lpStage');
  var preview = document.getElementById('preview');
  var modal = document.getElementById('pubModal');
  var closeBtn = document.getElementById('pubCloseModal');

  if (!stage) return;

  var RADIUS, CARD_W, CARD_H, STEP, rot = 0;
  var cards = [];
  var badgeClass = { award: 'badge-award', journal: 'badge-journal', conf: 'badge-conf' };

  function computeSizes() {
    var vw = stage.parentElement.offsetWidth;
    RADIUS = Math.min(500, vw * 0.40);
    CARD_W = RADIUS * 0.37;
    CARD_H = RADIUS * 0.50;
    STEP = 360 / CNT;
  }
  computeSizes();

  for (var i = 0; i < CNT; i++) {
    var p = papers[i];
    var el = document.createElement('div');
    el.className = 'lp-item';
    el.style.width = CARD_W + 'px';
    el.style.height = CARD_H + 'px';
    el.innerHTML =
      '<span class="card-badge ' + badgeClass[p.badge] + '">' + p.badgeText + '</span>' +
      '<p class="card-title">' + p.title + '</p>' +
      '<p class="card-venue">' + p.venue + '</p>' +
      '<p class="card-year">' + p.year + '</p>';
    var base = STEP * i;
    el.dataset.baseAngle = base;
    el.dataset.idx = i;
    el.style.transform =
      'translate(-50%, -50%) rotate(' + base + 'deg) translate(0, -' + RADIUS + 'px)';
    stage.appendChild(el);
    cards.push(el);

    (function (idx) {
      el.addEventListener('click', function () {
        var paper = papers[idx];
        document.getElementById('modalTitle').textContent = paper.title;
        document.getElementById('modalAuthors').innerHTML = paper.authors;
        document.getElementById('modalVenue').textContent = paper.venue + ', ' + paper.year;
        var link = document.getElementById('modalLink');
        if (paper.url) {
          link.href = paper.url;
          link.style.display = 'inline-block';
        } else {
          link.style.display = 'none';
        }
        modal.classList.remove('pub-hidden');
      });
    })(i);
  }

  /* 상단 카드 강조 */
  function highlight() {
    var norm = ((rot % 360) + 360) % 360;
    var best = 0, bestDiff = 360;
    cards.forEach(function (el, idx) {
      var vis = (parseFloat(el.dataset.baseAngle) + norm) % 360;
      var diff = Math.min(vis, 360 - vis);
      if (diff < bestDiff) { bestDiff = diff; best = idx; }
    });
    cards.forEach(function (el, idx) {
      var base = parseFloat(el.dataset.baseAngle);
      var scale = idx === best ? 1.2 : 1;
      var z = idx === best ? 1000 : 100;
      el.style.transform =
        'translate(-50%, -50%) rotate(' + base + 'deg) translate(0, -' + RADIUS + 'px) scale(' + scale + ')';
      el.style.zIndex = z;
      el.style.boxShadow = idx === best
        ? '0 8px 25px rgba(59,130,246,.35)'
        : '0 4px 12px rgba(0,0,0,.08)';
    });
    var p = papers[best];
    var content = document.getElementById('previewContent');
    content.innerHTML =
      '<p class="preview-title">' + p.title + '</p>' +
      '<p class="preview-authors">' + p.authors + '</p>' +
      '<p class="preview-venue">' + p.venue + ', ' + p.year + '</p>';
    preview.classList.remove('hidden');
  }

  function rotate(dir) {
    rot += dir * STEP;
    stage.style.transform = 'translate(-50%, -50%) rotate(' + rot + 'deg)';
    highlight();
  }

  highlight();

  /* 드래그 / 터치 */
  var sx = 0, dragging = false;
  function start(x) { dragging = true; sx = x; }
  function move(x) {
    if (!dragging) return;
    var dx = x - sx;
    if (Math.abs(dx) > 40) {
      rotate(dx > 0 ? -1 : 1);
      sx = x;
    }
  }
  function end() { dragging = false; }

  stage.parentElement.addEventListener('mousedown', function (e) { e.preventDefault(); start(e.clientX); });
  window.addEventListener('mousemove', function (e) { move(e.clientX); });
  window.addEventListener('mouseup', end);
  stage.parentElement.addEventListener('touchstart', function (e) { start(e.touches[0].clientX); }, { passive: true });
  stage.parentElement.addEventListener('touchmove', function (e) { move(e.touches[0].clientX); }, { passive: true });
  stage.parentElement.addEventListener('touchend', end);

  window.addEventListener('resize', function () {
    computeSizes();
    cards.forEach(function (el) {
      var base = parseFloat(el.dataset.baseAngle);
      el.style.width = CARD_W + 'px';
      el.style.height = CARD_H + 'px';
      el.style.transform =
        'translate(-50%, -50%) rotate(' + base + 'deg) translate(0, -' + RADIUS + 'px)';
    });
    stage.style.transform = 'translate(-50%, -50%) rotate(' + rot + 'deg)';
    highlight();
  });

  closeBtn.onclick = function () { modal.classList.add('pub-hidden'); };
  window.addEventListener('click', function (e) {
    if (e.target === modal) modal.classList.add('pub-hidden');
  });
})();
