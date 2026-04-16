---
layout: post
title: "Python nrarfcn module now supports LTE EARFCN"
date: 2026-04-16
categories: [Python, LTE, 5G]
permalink: /python-nrarfcn-module-now-supports-lte-earfcn/
summary: >-
  The nrarfcn Python module is now at version 2.6.0, with LTE EARFCN support and a 3GPP release refactor that had been sitting in my backlog for a while.
---
Vibecoding came to exterminate old tickets once again.

For a while now, I had wanted to add the 3GPP release as an optional argument in my very simple but sometimes very useful Python module that converts frequencies to NR-ARFCN and NR-ARFCN to frequencies, besides some other useful NR band calculations, the **[nrarfcn](https://github.com/blevic/nrarfcn){: rel="noopener" target="_blank" }** module. It was one of those things that just would stay forever in the backlog because it is useful, but also annoying enough to keep postponing.

This time, vibecoding helped me move much faster. In a few hours I managed to do the 3GPP release refactor, clean up a few things around it, and also add support for **LTE EARFCN**. All of that is on the new release v2.6.0.

The latest release is available here (you can also just "pip install nrarfcn"): **[github.com/blevic/nrarfcn](https://github.com/blevic/nrarfcn){: rel="noopener" target="_blank" }**

Version **2.6.0** is the one with LTE support.

Some of the new LTE EARFCN APIs look like this (by the way, I am importing the module as `nr` here for consistency, but you may import it as `lte` or as `eutra`, if it sounds better to you):

```python
>>> import nrarfcn as nr

>>> nr.get_frequency_by_lte_earfcn(300)
2140.0

>>> nr.get_lte_earfcn_by_frequency(2140.0)
[300, 2250, 4450, 65836, 66736]

>>> nr.get_lte_bands_by_frequency(1850.0)
['B2', 'B3', 'B9', 'B25', 'B35']

>>> nr.get_band_by_lte_earfcn(300)
'B1'

>>> nr.get_lte_earfcn_range('B25', direction='ul')
(26040, 26689)

>>> nr.get_duplex_mode('B66')
'FDD'

>>> nr.get_frequency_range('B66', direction='dl')
(2110, 2200)
```

Soon I also want to make **Release 19** the default release instead of Release 17. That would technically break backwards compatibility, even if only in some edge cases, so I will probably need to bump the module to **3.0.0** when I do it.

For now, the release can already be passed as an optional parameter:

```python
>>> nr.get_frequency_range('n110', release_3gpp=19)
(1432, 1435)
```

Anyway, the next step is to try to turn this into a JavaScript library for a web page (yes, this blog!). I don't have a lot of experience with JavaScript, but vibecoding will help me do it.
