---
title: '{{ replace .File.ContentBaseName "-" " " | title }}'
date: {{ .Date }}
draft: true
tags: ["first", "second", "third"]
description: "A brief description."
#author: "Fabio Grasso"
#author: ["Me", "You"] # multiple authors
ShowToc: false


---

This is the content for my new post.

./bin/hugo new en/posts/first-post-example.md
./bin/hugo new it/posts/primo-post-esempio.md
./bin/hugo new fr/posts/premier-post-exemple.md