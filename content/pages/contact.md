---
title: "Contact Form"
date: 2025-08-04
translationKey: "contact"
layout: "simple"
share: false
sharingLinks: false
comments: false
showComments: false
showTableOfContents: true
hidemeta: true
disableShare: true
ShowReadingTime: false
ShowBreadCrumbs: false
showPagination: false
ShowPostNavLinks: false
ShowWordCount: false
searchHidden: true
hiddenFromHomePage: true
showAuthor: false
showDate: false
url: "/contact/"
aliases: ["/en/contact", "/en/pages/contact/", "/it/contact", "/it/pages/contact/", "/fr/contact/", "/fr/pages/contact/"]
---
Use the following form to send me a message. I will respond as soon as possible.

---

<form method="POST" 
      action="https://kwesforms.com/api/f/974r2oaasFZumh6vHsvg"
      class="kf-form max-w-full mx-auto p-6 py-6 bg-neutral-50 dark:bg-neutral-800 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700"
      mode="test" >
  
  <div class="mb-4">
    <label for="name" class="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
      Nome *
    </label>
    <input type="text" 
           name="name" 
           id="name" 
           rules="required|max:255"
           placeholder="Il tuo nome"
           class="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-100">
  </div>
  
  <div class="mb-4">
    <label for="email" class="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
      Email *
    </label>
    <input type="email" 
           name="email" 
           id="email" 
           rules="required|email|max:255"
           placeholder="tua@email.com"
           class="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-100">
  </div>
  
  <div class="mb-6">
    <label for="message" class="block text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
      Messaggio *
    </label>
    <textarea name="message" 
              id="message" 
              rules="required|min:10"
              placeholder="Scrivi qui il tuo messaggio..."
              rows="5"
              class="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-600 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-neutral-50 dark:bg-neutral-700 dark:text-neutral-100 resize-y"></textarea>
  </div>
  
  <button type="submit" 
          class="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200 active:transform active:translate-y-px">
    Invia Messaggio
  </button>
</form>


<script src="https://kwesforms.com/v2/kf-script.js" defer></script>

