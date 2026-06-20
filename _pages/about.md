---
permalink: /
title: ""
excerpt: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

# Welcome to Peilin's homepage!

<!--&emsp-->

## Short Bio

<div class="bio-card">
  <p>
    Peilin (Leo) Chen is a second-year Ph.D. student in the ECE Department of the
    University of Virginia (UVA) under the supervision of Prof.
    <a href="https://engineering.virginia.edu/faculty/xiaoxuan-yang">Xiaoxuan Yang</a>.
    He received the B.E. degree in Integrated Circuit Design and Integration System
    from Xidian University (XDU). His research focuses on algorithm-hardware co-design
    for efficient neural network inference and training.
  </p>

  <div class="bio-tags">
    <div class="tag-row">
      <span>AI Chip</span>
      <span>Computing-in-Memory</span>
      <span>Neuromorphic Computing</span>
    </div>
    <div class="tag-row">
      <span>Computer Architecture</span>
      <span>Machine Learning</span>
    </div>
  </div>
</div>

## News

<div class="news-container">
  <div class="news-item">
    <div class="news-date">May 2026</div>
    <div class="news-content">
      One first-authored paper has been accepted to IEEE/ACM ISLPED 2026
      (Oral presentation)! See you in Evanston, Illinois, USA 🎉!
    </div>
  </div>

  <div class="news-item">
    <div class="news-date">Apr 2026</div>
    <div class="news-content">
      One first-authored paper has been accepted to ACM GLSVLSI 2026!
      See you in Finger Lakes, NY, USA 🎉!
    </div>
  </div>

  <div class="news-item">
    <div class="news-date">Jul 2025</div>
    <div class="news-content">
      Paper “Titanus: Enabling KV Cache Pruning and Quantization On-the-Fly for LLM Acceleration”
      wins <strong>Best Paper Award of GLSVLSI 2025</strong> 🎉!
    </div>
  </div>

  <div class="news-item">
    <div class="news-date">Apr 2025</div>
    <div class="news-content">
      One first-authored paper has been accepted to ACM GLSVLSI 2025!
      See you in New Orleans, USA 🎉!
    </div>
  </div>

  <div class="news-item">
    <div class="news-date">Apr 2025</div>
    <div class="news-content">
      Accepted as a DAC Young Fellow at the 62nd Design Automation Conference!
      See you in San Francisco, USA 🎉!
    </div>
  </div>

  <div class="news-item">
    <div class="news-date">Dec 2024</div>
    <div class="news-content">
      One first-authored paper has been accepted to IEEE AICAS 2025!
      See you in Bordeaux, France 🎉!
    </div>
  </div>

  <div class="news-item">
    <div class="news-date">Jun 2024</div>
    <div class="news-content">
      My dissertation, <strong>Design, logic synthesis and physical implementation of pipeline processor based on RISC-V architecture</strong>,
      has been selected as the excellent graduation project 🎉!
    </div>
  </div>

  <div class="news-item">
    <div class="news-date">Feb 2024</div>
    <div class="news-content">
      I will be a Ph.D. student at the University of Virginia in Fall 2024
      and have been awarded the UVA Provost's Fellowship 🎉!
    </div>
  </div>
</div>

<style>

.bio-card {
    max-width: 100%;
    padding: 18px 22px;
    margin-top: 10px;
    margin-bottom: 46px;

    background: #fafafa;
    border-left: 4px solid #232D4B;
    border-radius: 8px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
}

.bio-card p {
    margin: 0;
    color: #2f3437;
    line-height: 1.65;
    font-size: 1em;
}

.bio-tags {
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
}

.tag-row {
    display: flex;
    justify-content: center;
    gap: 8px;
    flex-wrap: wrap;
}

.bio-tags span {
    display: inline-block;
    padding: 4px 10px;
    font-size: 0.82em;
    font-weight: 600;
    color: #232D4B;
    background: #f6f7f9;
    border: 1px solid #e3e6ea;
    border-radius: 999px;
}
  
.news-container {
    width: 100%;
    max-height: 220px;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 0 12px;
    box-sizing: border-box;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    background: #fff;
    scrollbar-width: thin;
    scrollbar-color: #888 #f1f1f1;
}

.news-item {
    display: grid;
    grid-template-columns: 90px 1fr;
    column-gap: 18px;
    padding: 14px 0;
    border-bottom: 1px solid #e5e7eb;
    align-items: stretch;
}

.news-item:last-child {
    border-bottom: none;
}

.news-date {
    font-weight: 700;
    color: #232D4B;
    white-space: nowrap;
    padding-left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
}

.news-content {
    border-left: 2px solid #e5e7eb;
    padding-left: 18px;
    color: #2f3437;
    line-height: 1.55;
}

.news-content a {
    color: #E57200;
    text-decoration: none;
}

.news-content a:hover {
    color: #B84C00;
    text-decoration: underline;
}

.news-container::-webkit-scrollbar {
    width: 8px;
}

.news-container::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5px;
}

.news-container::-webkit-scrollbar-thumb:hover {
    background-color: #555;
}

@media (max-width: 600px) {
    .news-item {
        grid-template-columns: 1fr;
        row-gap: 6px;
    }

    .news-content {
        border-left: none;
        padding-left: 4px;
    }
}
</style>

<br/>
<div id="map-container" style="display: flex; justify-content: center; align-items: center;">
    <div id="map-content" style="width: 600px;">
        <script type='text/javascript' id='mapmyvisitors' src='https://mapmyvisitors.com/map.js?cl=ffffff&w=300&t=tt&d=W5zcQt09eiXCT7MSUXeRVUHqJrfT3K7tB0pDHkS34MQ&co=2d78ad&cmo=3acc3a&cmn=ff5353&ct=ffffff'></script>
    </div>
</div>

<!--
<div class="news-container">
  <p><strong>[2026.05]</strong> One first-authored paper has been accepted to IEEE/ACM ISLPED 2026 (Oral presentation)! See you in Evanston, Illinois, USA 🎉!</p>
  <p><strong>[2026.04]</strong> One first-authored paper has been accepted to ACM GLSVLSI 2026! See you in Finger Lakes, NY, USA 🎉!</p>
  <p><strong>[2025.07]</strong> Paper "Titanus: Enabling KV Cache Pruning and Quantization On-the-Fly for LLM Acceleration" wins <strong>Best Paper Award of GLSVLSI 2025</strong> 🎉!</p>
  <p><strong>[2025.04]</strong> One first-authored paper has been accepted to ACM GLSVLSI 2025! See you in New Orleans, USA 🎉!</p>
  <p><strong>[2025.04]</strong> Accepted as a DAC Young Fellow at the 62nd Design Automation Conference! See you in San Francisco, USA 🎉!</p>
  <p><strong>[2024.12]</strong> One first-authored paper has been accepted to IEEE AICAS 2025! See you in Bordeaux, France 🎉!</p>
  <p><strong>[2024.06]</strong> My dissertation, <strong>Design, logic synthesis and physical implementation of pipeline processor based on RISC-V architecture</strong>, has been selected as the excellent graduation project 🎉!</p>
  <p><strong>[2024.02]</strong> I will be a Ph.D. student at the University of Virginia in Fall 2024 and have been awarded the UVA Provost's Fellowship 🎉!</p>
</div>

.bio-card a {
    color: #E57200;
    text-decoration: none;
    font-weight: 500;
}

.bio-card a:hover {
    color: #B84C00;
    text-decoration: underline;
}

<br/><br/>
<div id="map-container" style="display: flex; justify-content: center; align-items: center;">
    <div id="map-content" style="width: 450px;">
        <script type="text/javascript" id="mapmyvisitors" src="//mapmyvisitors.com/map.js?d=W5zcQt09eiXCT7MSUXeRVUHqJrfT3K7tB0pDHkS34MQ&cl=ffffff&w=a"></script>
    </div>
</div>
<!--
<style>
.news-container {
    width: 100%;
    height: 130px;  
    overflow-y: scroll;
    overflow-x: hidden;
    padding-right: 10px;  
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: #888 #f1f1f1;
}

.news-container::-webkit-scrollbar {
    width: 8px;
}

.news-container::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5px;
}

.news-container::-webkit-scrollbar-thumb:hover {
    background-color: #555;
}

.news-container p {
    margin: 2px 0;  
    padding: 0;
}

</style>
-->






