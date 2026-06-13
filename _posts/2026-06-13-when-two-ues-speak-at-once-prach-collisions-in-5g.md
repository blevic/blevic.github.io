---
layout: post
title: "When Two UEs Speak at Once: PRACH Collisions in 5G"
date: 2026-06-13
categories: [5G, NR, RAN]
permalink: /when-two-ues-speak-at-once-prach-collisions-in-5g/
summary: >-
  A short note on 5G random access, PRACH preambles, and what happens when two devices try to be heard at the same time.
---
Every conversation has a first word that goes out blind.

In 5G, that first uplink word is often a PRACH preamble: a tiny <i>"Hello, I'm here!"</i> sent toward the gNB before the UE has normal uplink resources, before it has timing alignment, and before the network can talk to it individually.

This is especially important during initial access, for example when a device is trying to register to the 5G network. The UE detects an SSB, reads the system information, finds the random access configuration, and sends a preamble on PRACH.

But PRACH is shared. More than one device may try to speak at the same time. If two UEs choose the same preamble in the same PRACH occasion, we have a collision.

Small precision before going further: **PRACH** (Physical Random Access Channel) is the channel used to transmit the random access preamble. The **procedure** is the Random Access procedure. In the 4-step version, the PRACH preamble is called **Msg1**.

<figure class="post-image">
  <img src="{{ '/assets/images/Pieter_Bruegel-The_Tower_of_Babel.jpg' | relative_url }}" alt="The Tower of Babel by Pieter Bruegel the Elder">
  <figcaption>Pieter Bruegel's <em>The Tower of Babel</em>: everyone talking at once. Random access is what keeps our 5G tower from going full Babylon.</figcaption>
</figure>

The gNB first announces itself through synchronization and broadcast information: SSB, MIB, then SIB1. The PRACH/RACH configuration is in the common uplink configuration, notably `rach-ConfigCommon` and `RACH-ConfigGeneric`, with fields such as `prach-ConfigurationIndex`, `msg1-FDM`, `msg1-FrequencyStart`, `ssb-perRACH-OccasionAndCB-PreamblesPerSSB`, and so on.

In simpler words: SIB1 tells the UE where and how random access is possible.

### The preamble

In each time-frequency PRACH occasion, NR defines **64 preambles**.

A preamble is not user data, and it is not a modulation scheme like QPSK or 16QAM. It is a known physical-layer signal: a sequence with a specific signature, transmitted on PRACH so the gNB can detect that "someone is trying random access here" and estimate the uplink timing. In NR, those preambles are generated from root Zadoff-Chu sequences and their cyclic shifts. Zadoff-Chu sequences are useful because they have very friendly correlation properties, so the receiver can detect the chosen preamble and timing offset, and because their constant-amplitude nature helps uplink transmission. The UE is not yet sending its identity in Msg1. It is basically choosing one of the configured signatures and sending it in one configured PRACH occasion.

That does not always mean all 64 are available for contention-based random access. The network can split them between contention-based and contention-free access, between SSBs, groups A/B, feature-specific RACH resources, SI request, RedCap, slicing, etc. But at the physical layer, the useful mental model is: a PRACH occasion has a set of preamble signatures, and the UE picks one from the configured contention-based set.

The important part:

If two UEs transmit **different preambles** in the same PRACH occasion, the gNB can normally distinguish them.

If two UEs transmit the **same preamble** in the **same PRACH occasion**, then we have the collision we usually mean when we talk about PRACH collision.

Two people can speak at the same time in the same room and still be separable if they speak different enough "languages". Same room, same words, same instant? That's Babylon. I mean, collision!

### The four steps

For the classic contention-based 4-step Random Access procedure:

**Msg1:** the UE sends a random access preamble on PRACH.

**Msg2:** the gNB sends the Random Access Response, or RAR. It is addressed using the RA-RNTI associated with that PRACH occasion, and it includes the detected preamble identifier, Timing Advance, an uplink grant for Msg3, and a Temporary C-RNTI. At this point, it is not really addressed to a unique UE yet. It is addressed to "whoever transmitted this preamble in this PRACH occasion". If more than one UE did exactly that, both may believe the answer is for them.

**Msg3:** the UE uses the UL grant from Msg2. If this is initial access, Msg3 normally carries a CCCH SDU such as `RRCSetupRequest`. In terms of identity, Msg3 carries different content depending on context: for initial access without a 5G-S-TMSI, the UE includes a 39-bit `randomValue` as `InitialUE-Identity`; if the UE already has a C-RNTI, it may include a C-RNTI MAC CE instead, allowing the network to recognize it from an existing RRC_CONNECTED context.

**Msg4:** contention resolution. For initial access, the gNB sends a message addressed to the Temporary C-RNTI and includes the UE Contention Resolution Identity. The UE checks whether that identity matches what it sent in Msg3. If yes, it wins the contention and sets its C-RNTI from the Temporary C-RNTI. If not, it backs off and tries again.

### So what happens in a collision?

Suppose two UEs pick the same preamble in the same PRACH occasion.

From the gNB perspective, this may look like one preamble. The gNB sends one Msg2. Both UEs receive it. Both now have the same Timing Advance command, the same UL grant for Msg3, and the same Temporary C-RNTI.

Then both transmit Msg3 on the same resources.

Two common outcomes are possible now. First: the gNB may fail to decode Msg3. If that happens, no useful Msg4 arrives, the contention resolution timer expires, and the UEs retry after backoff.

Second: because radio is radio, the gNB may decode one of the two Msg3 transmissions and not the other. Maybe one UE is stronger. Maybe one arrives cleaner. In that case, the gNB sends Msg4 for the UE it decoded. That UE sees its own contention resolution identity and continues. The other UE does not receive a matching Msg4, or times out, and retries.

How does the UE know Msg4 was intended for it and not someone else? It monitors the PDCCH for a DCI addressed to its Temporary C-RNTI. When it receives Msg4, it checks the UE Contention Resolution Identity MAC CE. If it matches the CCCH SDU it sent in Msg3, the contention is resolved in its favor. If it does not match, or if the contention resolution timer expires without any matching Msg4, the UE considers itself to have lost and enters backoff.

This is the normal collision resolution mechanism.

### An extremely rare collision

We said that Msg4 echoes the identity sent by the UE in Msg3. For initial access, that identity may be random. That means an extremely rare second collision can be imagined here.

For an `RRCSetupRequest`, if upper layers do not provide a 5G-S-TMSI, the UE draws a **39-bit `randomValue`** and puts it in `InitialUE-Identity`. That value is there to help contention resolution.

So the extremely rare collision is:

Two UEs collide on the same PRACH occasion, choose the same preamble, both receive the same Msg2, both transmit Msg3, and their contention-resolution identity is also the same because the `randomValue` is the same.

The `randomValue` has a size of 39 bits, so two UEs independently choosing the same value has a probability of **1 in 2^39**, about **1 in 550 billion**.

For this to happen, they already had to collide on PRACH first, and the network would still have to get into a strange enough state that both UEs believe the same Msg4 belongs to them via `randomValue` collision.

But if you want the absurd edge case: yes, if both UEs somehow pass contention resolution with the same temporary identity, the confusion would move later. Once they start sending different RRC/NAS content under what the network believes is one UE context, the network cannot authenticate two different subscribers as one clean UE. The failure would show up later, for example during NAS authentication/security or in subsequent RRC/NAS message handling.

Of course, this second collision is mostly a thought experiment. PRACH collisions are real. But `randomValue` collisions are astronomically unlikely.

But we still have the image: many devices, same tower, same sky, trying to be heard by the same gNB.

Most of the time, the network understands enough to pick one voice and ask the others to try again.

Sometimes even Babel manages to speak in unison.

<small>For more technical info on RACH procedure: refer to 3GPP TS 38.300, TS 38.211, TS 38.321, and TS 38.331.</small>
