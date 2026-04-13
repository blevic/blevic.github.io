---
layout: post
title: "Visions of 6G: Highlights from the 3GPP 6G Workshop"
date: 2025-04-20
categories: [6G]
permalink: /visions-of-6g-highlights-from-the-3gpp-6g-workshop/
summary: >-
  In our previous post, we explored the evolution from 4G to 5G and how the telecom industry is now gearing up for the next leap: 6G. And at the recent 3GPP 6G Workshop in Korea (Incheon, March 10-11), key industry...
---
In our [previous post]({{ '/the-road-to-6g-how-we-got-here-and-what-comes-next/' | relative_url }}){: rel="noopener" }, we explored the evolution from 4G to 5G and how the telecom industry is now gearing up for the next leap: 6G.

And at the recent 3GPP 6G Workshop in Korea (Incheon, March 10-11), key industry players gathered to share their early visions of what 6G might become.

Below, I’ve pulled together some highlights from their perspectives.

<figure class="post-image">
  <img src="{{ '/assets/images/Le-Faux-Miroir-1024x671.jpg' | relative_url }}" alt="Le Faux Miroir by René Magritte">
  <figcaption><strong>"Le Faux Miroir", by René Magritte (1928)</strong>. Visions of the future are forming, but are still uncertain. 6G emerges, <em>rené</em> from 5G’s experience.</figcaption>
</figure>

### 6G Perspectives

In this first post we'll cover the visions of some of the main players in the 6G ecosystem: the MNOs, the infra vendors and the chipset makers. The perspectives from other stakeholders, along with a summary of the 3GPP workshop, will be shared in a second post.

#### Network operators

- AT&T:
  - Focus: Reducing Total Cost of Ownership (TCO) and improving customer experience; exploring new services and revenue opportunities; enhancing existing services.
  - ATT 6G Priorities: software driven network, scalable design, new paradigm for testing and certification, integrated native AI/ML, sensing-as-a-service (ISAC).
- TMO US:
  - Strategic Drivers for 6G: traffic growth, AI, customer experience, 5G to 6G transition, network monetization, sustainability.
  - Suggested Priorities for 6G: voice and regulatory services from day 1, DSS in 7 GHz band and improved unlicensed 6G in 6 GHz, FWA optmizations for reduced payload and better SE, SA based on 5G, intent based programmable architecture.
- Verizon:
  - Goals: increased NW performance, simplification of NW operations with automation, reduce NW slice complexity.
  - Security: quantum-safe cryptography.
  - Data collection framework: 6G system will be rich in data / stats, so minimum data set should be identified and collected in standardized way.
- DTAG:
  - Aims for > 10% spectrum and energy efficiency gain, on an apples-to-apples comparison.
  - Too early to exclude any architecture (still considering NSA 6G).
  - Do not need interworking with: 2G, 3G, and 4G.
  - No need for MBMS, IAB, mobile relay, sidelink with little to no commercial implementations. No need for Home-NodeB/CSG and RAN level aggregation of non-3GPP technologies à la LWA/LWIP.
  - Unrealistic technology drivers should be removed (10x lower latency, 10x higher peak data rate, 10x more accurate positioning, etc.)
  - One solution for one problem: no migration fof each and every legacy function.
- Vodafone:
  - No revolution: Significant changes to the system must be justified from the global business point of view.
- China Mobile:
  - New services: immersive communication for people, LLM as new applications, AI agent as new users, sensing as new capability.
  - Semantic communications will bring a new paradigm shift in wireless communications.
- Orange:
  - IMT-2020 created false expectations on 5G; IMT-2030 should remain realistic.
  - No intention to deploy brand new core network.
- Bouygues:
  - Small data transmission is considerable part of real traffic patterns and is not correctly handled in NR; should be treated by 6G.
  - Network slicing has rigidities that are unacceptable (such as TAC-list of slices link), 6G should make this flexible.
  - TDD frame structure is very rigid and forces operators to synchronize with each other. Issues at country borders. 6G needs to address that.
  - URLLC family target reliability does not make any sense: how to have 99.999% reliability if the availability of the radio system is not even close to that? For example: HW used in base stations have random accidental failures and restarts.

#### Infra Vendors

- Nokia:
  - Spectrum considered for 6G: Upper 6 GHz; 7.125-8.4 GHz; and 3.1-3.45 GHz in the US. 14 GHz not seen as very attractive.
  - Values of 6G will be: single architecture, no multiple optionsm first release as baseline and end user visibility.
  - 6G specification modernization: GIT as version control tool, and no more Word (is this the best contribution so far?)
- Ericsson:
  - "Minimize Complexity, Maximize Performance"
  - Initial releases for mass-market products; later releases for use cases that gained market traction.
  - Called the 6G Base Station "xNB" in one slide (might be the chosen name for the eNB/gNB equivalent).
- Huawei:
  - Mentions a "NetGPT" as an LLM in an Agentic AI-Framework for 6G core network.
  - Claims 6G will potentially bring 2x spectrum efficiency gain.
- ZTE:
  - Consumer market is still key for 6G.
  - Rising devices: IC/XR, Wearables, CPE/FWA, service robots
  - Discusses NW Architecture for AI (as most of the others do)

#### Chipset Providers

- Qualcomm:
  - User experience improvement by: better cell-edge data rates, fast access to broadband, optimized UE power consumption.
  - Potential new services: integrated sensing and communication (ISAC)m native high-accuracy positioning, immersive communications.
  - Lean specs: reduce number of options, granularity of UE features and configurability.
  - 4G/5G lessons learnt: separate networks for wide area IoT lead to high costs, for 6G single network for eMBB and IoT is better; long life-cycles of IoT was not considered, for 6G virtualized cores to support legacy systems.
  - Admits most MNOs prefer to reuse 5GC with minimal changes.
- Mediatek:
  - 6G design ought to be *realistically* ambitious, with practical improvements for users, and with meaningful technology.
  - Critical drivers: Energy efficiency, Robust UL coverage, Ubiquitous AI, Create new business/service opportunities
  - Convergence: communication and computing, terrestrial and non-terrestrial networks, communication and sensing.
- Apple / Apple Silicon:
  - (Yes, they're [making modems now](https://www.theverge.com/news/615314/apple-iphone-16e-c1-cell-modem-in-house-5g){: rel="noopener" target="_blank" }.)
  - 6G is needed to bring: clean and lean design, deprioritizing features not commercially deployed; native support of important use cases without the restriction of backwards compatibility; native support of opportunities of new spectrum.
  - Important to have 5G-6G MRSS (Multi-RAT Spectrum Sharing) from day one.
  - Unified designed with NTN is expected.
  - PHY aspects:
    - Scalable numerology consistent with 5G (SCS = 15*2^n kHz)
    - No need for mixed numerology in the same carrier.
    - 7 GHz support with max channel BW at 200 MHz, and mMIMO.
    - 4k QAM modulation introduction to be studied.
    - Larger SSB periodicity may be considered.
  - User Consent Framework: Privacy and user consent highlighted for 6G.
- Samsung / LSI:
  - (Yes, they're still [making Exynos modems](https://semiconductor.samsung.com/news-events/tech-blog/exynos-modem-5400-1-worlds-first-11-2gbps-5g-speeds-with-only-fr1/){: rel="noopener" target="_blank" })
  - 5G in the eyes of consumers: enhancement of peak performance alone is not enough anymore.
  - AI-native design from 1st release.
  - No support of 5G-6G dual connectivity and no direct interface between 5G and 6G RAN.
  - Radio: Green Network (G-Net), AI-RAN, Network energy-efficient X-MIMO (NeX-MIMO), enhanced subband full duplex (eSBFD), N-carrier single-cell (NSC), enhanced basic elements (eBE), new verticals (NV).

### Hold on - There's Still more from the Workshop

We'll continue with a summary of the 3GPP workshop and with the views from device manufacturers, industry alliances and other non-telco members in a second post. Meet you there!

