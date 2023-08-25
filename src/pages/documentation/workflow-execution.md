---
layout: ../../layouts/Documentation.astro
author: Mike Rewnick
title: Workflow Execution
description: Workflow Execution
draft: false
tags: ['Some code', 'Workflow']
order: 3
date: 2023-07-19
---

Workflow can be executed manually by clicking green arrow.

![Working execution toolbar](../../assets/workflow-execution-toolbar.png)

It is also possible to execute individual actions by using context menu.

![Action context menu](../../assets/action-context-menu.png)

## Workflow Automation.

There are three ways to automate workflow executions:

1. Using Integrated Scheduler
1. Constantly running workflow
1. Using hooks

Integrated scheduler can be used to execute workflow every five minutes but what about if it takes more than five minutes?\
This can be easily addressed by using constantly running packages

### Basic constantly running workflow

![Constantly Running Workflow](../../assets/constantly-running-workflow.png)

### Deploying workflow

Deploy workflow dialogue is used for constantly running workflows.

![Deploy workflow dialogue](../../assets/deploy-workflow.png)

It allows to control level of logging

Once deployed the workflow execution can be stopped using the **"Currently Running Workflows"** dialogue

![Currently running workflows](../../assets/currently-running-workflows.png)
