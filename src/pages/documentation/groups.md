---
layout: ../../layouts/Documentation.astro
author: Mike Rewnick
title: Groups
description: Some code Groups
draft: false
order: 13
tags: ['Some code', 'Event Loggers']
date: 2023-07-19
---

## Groups grid

{{< image class="mx-auto d-block"  src="/images/event-loggers/shared/groups-grid.png" title="Groups Grid" >}}

## Group form

{{< image class="mx-auto d-block"  src="/images/event-loggers/shared/group-edit.png" title="Groups Form" >}}
\
**Note**

It is possible to delete all groups or disable them by accident. In this case, it might not be possible to login into Some code

Follow these steps to recover

- Set ENABLE_SECURITY=0
- Restart Some code
- Recreate/Enable groups
- Set ENABLE_SECURITY=1
- Restart Some code
