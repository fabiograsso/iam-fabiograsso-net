---
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
date: {{ .Date }}
draft: true
tags: ["first", "second", "third"]
description: "A brief description."
categories: ["blog"]
translationKey: "intro-to-hugo"
#lightgallery: true
#keywords: ["first", "second", "third"]
#weight: 1
#aliases: ["/first"]
#author: "Fabio Gfasso"
#author: ["Me", "You"] # multiple authors
#toc:
#  enable: false
#hidemeta: false
#comments: false
#disableShare: true
#hideSummary: false
#ShowReadingTime: true
#ShowBreadCrumbs: true
#ShowPostNavLinks: true
#ShowWordCount: true
#ShowRssButtonInSectionTermList: true
#UseHugoToc: true
#cover:
#    image: "<image path/url>" # image path/url
#    alt: "<alt text>" # alt text
#    caption: "<text>" # display caption under cover
#    relative: false # when using page bundles set this to true
#    hidden: true # only hide on current single page
---

This is the content for my new post.

./bin/hugo new en/posts/first-post-example.md
./bin/hugo new it/posts/primo-post-esempio.md
./bin/hugo new fr/posts/premier-post-exemple.md