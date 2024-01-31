---
layout: ../../layouts/Documentation.astro
author: Some Developer
title: Users
description: Users
draft: false
tags: ["Some code", "Event Loggers"]
order: 18
date: 2023-07-19
---

## Users list

![Users list](../../assets/users-list.png)

## User form

![Users form](../../assets/user-form.png)

## Changing User password

![Changing User password](../../assets/change-user-password.png)

## Changing Current User password

![Changing Current User password](../../assets/change-my-password.png)

## Changing Current User details

![Changing Current User details](../../assets/change-my-details.png)

**Note**

It is possible to delete all users or disable them by accident. In this case, it might not be possible to login into Some code

Follow these steps to recover

- Set ENABLE_SECURITY=0
- Restart Some code
- Recreate/Enable users
- Set ENABLE_SECURITY=1
- Restart Some code
