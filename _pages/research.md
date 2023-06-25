---
layout: single
title: "Research Projects"
permalink: /research/
author_profile: true
---

[Feb. 2023] **Scaling-out Reconfigurable Digital CIM.**
- I designed two 28nm chips that scale out the AI capability based on Reconfigurable Digital Computing-In-Memory (CIM). TensorCIM is the first CIM processor for tensor computing in a Multi-Chip-Module system. MulTCIM is the first CIM accelerator for the emerging multimodal Transformer models, which leverages attention-token-bit hybrid sparsity to improve energy efficiency.
- [TensorCIM: A 28nm 3.7nJ/Gather and 8.3TFLOPS/W FP32 Digital-CIM Tensor Processor for MCM-CIM-based Beyond-NN Acceleration](https://ieeexplore.ieee.org/abstract/document/10067285) (**ISSCC'23**)
- [MulTCIM: A 28nm 2.24$\mu$J/Token Attention-Token-Bit Hybrid Sparse Digital CIM-based Accelerator for Multimodal Transformers](https://ieeexplore.ieee.org/abstract/document/10067842) (**ISSCC'23**)

[Feb. 2022] **Reconfigurable Digital Computing-In-Memory AI Chip.**
- I designed an innovative AI chip architecture, Reconfigurable Digital Computing-In-Memory. The architecture fuses the philosophy of reconfigurable computing and digital computing-in-memory, balancing efficiency, accuracy, and flexibility for emerging AI chips. I designed two 28nm chips based on the new architecture, Reconfigurable Digital CIM (ReDCIM) and Transformer CIM (TranCIM). ReDCIM (pronounced as "red-CIM") is the first CIM chip for cloud AI with flexible FP/INT support, which was covered by [Synced](https://mp.weixin.qq.com/s/v82Bt99l43S6Kegf83_q6A). TranCIM is the first CIM chip for Transformer models, which tackles the memory and computation challenges raised by Transformer's attention mechanism.
- ReDCIM: [A 28nm 29.2TFLOPS/W BF16 and 36.5TOPS/W INT8 Reconfigurable Digital CIM Processor with Unified FP/INT Pipeline and Bitwise in-Memory Booth Multiplication for Cloud Deep Learning Acceleration](https://ieeexplore.ieee.org/document/9731762) (**ISSCC'22**, extended to [**JSSC'23**](https://ieeexplore.ieee.org/document/9968289))
- TranCIM: [A 28nm 15.59$\mu$J/Token Full-Digital Bitline-Transpose CIM-based Sparse Transformer Accelerator with Pipeline/Parallel Reconfigurable Modes](https://ieeexplore.ieee.org/document/9731645) (**ISSCC'22**, extended to [**JSSC'23**](https://ieeexplore.ieee.org/document/9931922))

[Aug. 2020] **Evolver, Evolvable AI Chip.**

- [Evolver: A Deep Learning Processor with On-Device Quantization-Voltage-Frequency Tuning](https://ieeexplore.ieee.org/document/9209075) (**JSSC'21**)
  - I designed a 28nm evolvable AI chip (Evolver) with DNN training and reinforcement learning capabilities, to enable intelligence evolution during the chip's long lifetime. This work demonstrates a lifelong learning example of on-device quantization-voltage-frequency (QVF) tuning. Compared with conventional QVF tuning that determines policies offline, Evolver makes optimal customizations for varying local user scenarios. 
  - Evolver was nominated for [2021 Top-10 Research in China’s Semiconductors](https://mp.weixin.qq.com/s/Sad4Kc9lP8XW9vebdt7KaA).

[Jun. 2018] **RANA, Software-Hardware Co-design for AI Chip Memory Optimization.**

- [RANA: Towards Efficient Neural Acceleration with Refresh-Optimized Embedded DRAM](https://ieeexplore.ieee.org/document/8416839/) (**ISCA'18**) 
  - I designed a retention-aware neural acceleration (RANA) framework, which strengthens DNN accelerators with refresh-optimized eDRAM to save total system energy. 
  - RANA was the **only** work first-authored by a Chinese research team in ISCA'18, which was covered by [Tsinghua University News](https://www.tsinghua.edu.cn/info/1175/19449.htm) and [AI Tech Talk](https://www.leiphone.com/news/201806/wFQ2Sc52Utikcl8D.html).

[Jan. 2016] [**Neural Networks on Silicon.**](https://github.com/fengbintu/Neural-Networks-on-Silicon)

- I'm collecting works on neural network accelerators and related topics, in a GitHub project named [Neural Networks on Silicon](https://github.com/fengbintu/Neural-Networks-on-Silicon). It has attracted many researchers all around the world.

[Apr. 2017] **Thinker and DNA, Reconfigurable AI Chip.**

- DNA: [Deep Convolutional Neural Network Architecture with Reconfigurable Computation Patterns](http://ieeexplore.ieee.org/document/7898402/) (**TVLSI popular paper. No.5/2/6/8/8 Downloaded Manuscripts in 2017~2021: 6 Times Monthly No.1 since Sep. 2017.**)
  - I designed a deep convolutional neural network accelerator (DNA) targeting flexible and efficient CNN acceleration. This is the first work to assign Input/Output/Weight Reuse to different layers of a CNN, which optimizes system-level energy consumption based on different CONV parameters.
- Thinker: [A High Energy Efficient Reconfigurable Hybrid Neural Network Processor for Deep Learning Applications](http://ieeexplore.ieee.org/document/8207783/) (**JSSC'18**) 
  - A reconfigurable multi-modal neural network processor (Thinker) was fabricated based on the DNA architecture, supporting CNN, RNN, and FCN. 
  - The 65nm Thinker chip was exhibited at the [2016 National Mass Innovation and Entrepreneurship Week](https://www.tsinghua.edu.cn/info/1173/18061.htm), as a representative work from Tsinghua University. The Thinker chip was highly praised by Chinese Premier Li Keqiang, and featured by Yang Lan One on One, [AI Tech Talk](https://www.leiphone.com/news/201705/8sB0WHz6D70J7NAy.html) and [MIT Technology Review](https://www.technologyreview.com/s/609954/china-wants-to-make-the-chips-that-will-add-ai-to-any-gadget/?from=timeline&isappinstalled=0). It won the [ISLPED'17 Design Contest Award](http://islped.org/2017/index.php), which was [the first time for a China Mainland team to win the award](https://www.tsinghua.edu.cn/info/1175/19744.htm).

[Oct. 2014] **RNA, Reconfigurable Architecture for Neural Approximation.**

- RNA: [Reconfigurable Architecture for Neural Approximation in Multimedia Computing](http://ieeexplore.ieee.org/document/8307081/) (**TCSVT'19**)
    - I designed a reconfigurable neural accelerator (RNA) to process multi-layer perceptron (MLP) for neural approximation. By approximating the core kernels in a program with MLP, RNA achieves higher performance and efficiency with negligible accuracy loss.
