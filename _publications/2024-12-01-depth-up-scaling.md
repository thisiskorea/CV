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
.pub-detail-meta { margin-bottom: 24px; }
.pub-detail-meta dt { font-weight: 600; color: #333; display: inline; }
.pub-detail-meta dt::after { content: ""; }
.pub-detail-meta dd { display: inline; margin: 0 0 0 4px; color: #555; }
.pub-detail-meta dd::after { content: ""; display: block; margin-bottom: 6px; }
.pub-detail-links { display: flex; gap: 10px; margin: 20px 0 30px; flex-wrap: wrap; }
.pub-detail-links a {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 8px 18px; font-size: 0.9em; font-weight: 500;
  color: #fff; background: #333; border-radius: 5px;
  text-decoration: none; transition: opacity 0.2s;
}
.pub-detail-links a:hover { opacity: 0.8; }
.pub-bibtex { background: #f6f8fa; border: 1px solid #e1e4e8; border-radius: 6px; padding: 16px; font-size: 0.82em; overflow-x: auto; }
</style>

<dl class="pub-detail-meta">
  <dt>Authors</dt>
  <dd><strong>Jaesung Kim</strong>, Suan Lee</dd>
  <dt>Conference</dt>
  <dd>한국정보과학회 학술발표논문집 (KSC 2024)</dd>
  <dt>Date</dt>
  <dd>December 2024</dd>
</dl>

<div class="pub-detail-links">
  <a href="https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE12042288"><i class="fa-solid fa-file-lines"></i> Paper</a>
</div>

## Abstract

본 연구에서는 SOLAR 모델에서 제안된 Depth-Up Scaling(DUS) 기법을 활용하여 사전학습된 소규모 한국어 언어 모델의 레이어를 확장(증강)하고, 소규모 데이터셋 환경에서의 학습 성능을 비교 분석하였다. DUS는 기존 모델의 Transformer 블록을 복제·적층하여 모델의 깊이를 늘리는 방법으로, Mixture-of-Experts와 달리 추가적인 아키텍처 변경 없이 효율적으로 모델을 확장할 수 있다. 실험에서는 DUS를 적용한 모델과 원본 모델을 소규모 한국어 데이터셋으로 파인튜닝한 뒤, 다양한 자연어 이해 태스크에서의 성능 변화를 비교하여 DUS 기반 모델 증강의 효과와 한계를 분석하였다.

## Key Contributions

- **Depth-Up Scaling 적용**: 사전학습된 소규모 한국어 언어 모델에 DUS 기법을 적용하여 모델 깊이를 확장
- **소규모 데이터 학습 비교**: 제한된 데이터 환경에서 증강 모델과 원본 모델의 성능을 체계적으로 비교
- **효율적 스케일링 검증**: 복잡한 아키텍처 변경 없이 Transformer 블록 적층만으로 성능 향상 가능성을 확인

## BibTeX

<div class="pub-bibtex">
<pre>@inproceedings{kim2024depthupscaling,
  title={Depth-Up Scaling을 활용한 언어 모델 증강과 소규모 데이터 학습 성능 비교},
  author={Kim, Jaesung and Lee, Suan},
  booktitle={한국정보과학회 학술발표논문집},
  year={2024}
}</pre>
</div>
