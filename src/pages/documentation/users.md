---
layout: ../../layouts/Documentation.astro
author: Mike Rewnick
title: Users
description: Some code Users
draft: false
tags: ['Some code', 'Event Loggers']
order: 13
date: 2023-07-19
---

## Users grid

{{< image class="mx-auto d-block"  src="/images/event-loggers/shared/users-grid.png" title="Users Grid" >}}

## User form

{{< image class="mx-auto d-block"  src="/images/event-loggers/shared/user-edit.png" title="Users Form" >}}

## Changing User password

{{< image class="mx-auto d-block"  src="/images/event-loggers/shared/change-user-password.png" title="Changing User password" >}}

## Changing Current User password

{{< image class="mx-auto d-block"  src="/images/event-loggers/shared/change-my-password.png" title="Changing Current User password" >}}

## Changing Current User details

{{< image class="mx-auto d-block"  src="/images/event-loggers/shared/my-details.png" title="Changing Current User details" >}}
\
**Note**

It is possible to delete all users or disable them by accident. In this case, it might not be possible to login into Some code

Follow these steps to recover

- Set ENABLE_SECURITY=0
- Restart Some code
- Recreate/Enable users
- Set ENABLE_SECURITY=1
- Restart Some code
