---
title: "Depth-Up Scaling을 활용한 언어 모델 증강과 소규모 데이터 학습 성능 비교"
collection: publications
category: conferences
permalink: /publication/2024-depth-up-scaling
date: 2024-12-01
venue: '한국정보과학회 학술발표논문집 (KSC 2024)'
citation_authors: '<strong>Jaesung Kim</strong>, Suan Lee'
paperurl: 'https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12042288'
excerpt: ''
---

<style>
/* arXiv-style layout */
.arxiv-wrap { display: flex; gap: 0; margin-top: -10px; }
.arxiv-sidebar {
  flex: 0 0 200px;
  border-right: 1px solid #ddd;
  padding-right: 20px;
  font-size: 0.85em;
  line-height: 1.7;
}
.arxiv-main {
  flex: 1;
  padding-left: 24px;
  min-width: 0;
}
.arxiv-label {
  font-weight: 600;
  color: #333;
  display: block;
  margin-top: 14px;
  font-size: 0.78em;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.arxiv-label:first-child { margin-top: 0; }
.arxiv-value {
  color: #555;
  display: block;
}
.arxiv-value a { color: #333; text-decoration: none; }
.arxiv-value a:hover { text-decoration: underline; }
.arxiv-btn {
  display: inline-block;
  margin-top: 4px;
  padding: 5px 14px;
  font-size: 0.82em;
  font-weight: 500;
  color: #333;
  background: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 3px;
  text-decoration: none;
  transition: background 0.2s;
}
.arxiv-btn:hover { background: #e0e0e0; color: #333; }
.arxiv-abstract {
  font-size: 0.95em;
  line-height: 1.75;
  color: #333;
  margin-bottom: 28px;
  text-align: justify;
}
.arxiv-section-title {
  font-size: 0.95em;
  font-weight: 700;
  color: #333;
  margin: 24px 0 10px;
  padding-bottom: 6px;
  border-bottom: 1px solid #eee;
}
.arxiv-keywords {
  display: flex; flex-wrap: wrap; gap: 6px; margin-top: 6px;
}
.arxiv-keywords span {
  background: #f0f0f0; color: #555; font-size: 0.8em;
  padding: 3px 10px; border-radius: 3px;
}
@media (max-width: 700px) {
  .arxiv-wrap { flex-direction: column; }
  .arxiv-sidebar { flex: none; border-right: none; border-bottom: 1px solid #ddd; padding: 0 0 16px 0; margin-bottom: 16px; }
  .arxiv-main { padding-left: 0; }
}
</style>

<div class="arxiv-wrap">
  <div class="arxiv-sidebar">
    <span class="arxiv-label">Authors</span>
    <span class="arxiv-value"><strong>Jaesung Kim</strong>, Suan Lee</span>

    <span class="arxiv-label">Published</span>
    <span class="arxiv-value">December 2024</span>

    <span class="arxiv-label">Venue</span>
    <span class="arxiv-value">KSC 2024<br><span style="font-size:0.88em;color:#888;">한국정보과학회 학술발표논문집</span></span>

    <span class="arxiv-label">Links</span>
    <a class="arxiv-btn" href="https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12042288">Paper</a>
  </div>

  <div class="arxiv-main">
    <div class="arxiv-section-title">Abstract</div>
    <div class="arxiv-abstract">
      본 연구에서는 SOLAR 모델에서 제안된 Depth-Up Scaling(DUS) 기법을 활용하여 사전학습된 소규모 한국어 언어 모델의 레이어를 확장(증강)하고, 소규모 데이터셋 환경에서의 학습 성능을 비교 분석하였다. DUS는 기존 모델의 Transformer 블록을 복제·적층하여 모델의 깊이를 늘리는 방법으로, Mixture-of-Experts와 달리 추가적인 아키텍처 변경 없이 효율적으로 모델을 확장할 수 있다. 실험에서는 DUS를 적용한 모델과 원본 모델을 소규모 한국어 데이터셋으로 파인튜닝한 뒤, 다양한 자연어 이해 태스크에서의 성능 변화를 비교하여 DUS 기반 모델 증강의 효과와 한계를 분석하였다.
    </div>

    <div class="arxiv-section-title">Keywords</div>
    <div class="arxiv-keywords">
      <span>Depth-Up Scaling</span>
      <span>Language Model</span>
      <span>Small Data</span>
      <span>Fine-tuning</span>
      <span>Korean NLP</span>
    </div>

  </div>
</div>
