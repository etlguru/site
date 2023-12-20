---
layout: ../../layouts/Documentation.astro
title: Installation on linux (server)
description: Some code server installation on linux
date: 2023-12-20
order: 22
tags: ['Installation', 'Linux']
---

Download the software and run the following commands

```
sudo apt install ./some-code-server-amd64.deb
or
sudo dpkg -i ./some-code-server-amd64.deb
```

(This will install the software)

```
sudo systemctl enable some-code-server
```

(This will enable the server)

```
sudo systemctl start some-code-server
```

(This will start the server)

```

sudo systemctl stop some-code-server
```

(Use this command to stop the server)

## Setup

Once Some code is started open the following URL in the browser

http://localhost:3333

Follow the setup procedure

## Creating admin user

![Create Admin User](../../assets/setup-admin-server.png)

## Setting email notifications

![Setting up email notifications](../../assets/setup-smtp-server.png)

> Email notifications are used for password recovery and user invitations

If you are unable to see the screens above try changing the port or follow trouble-shooting procedure

[Settings](settings)
