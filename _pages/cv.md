---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

## Education

* **B.S.** in Your Department, Your University, 2024

## Research Experience

* **Research Intern** — Lab Name, University (2024)
  * Brief description of your work

## Skills

* Programming: Python, C++
* Frameworks: PyTorch, TensorFlow
* Tools: Git, Docker, Linux

## Publications

  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
