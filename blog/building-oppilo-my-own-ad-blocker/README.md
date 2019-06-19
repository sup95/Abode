---
layout: Blog
---

# Building Oppilo - My Own Ad Blocker
<p class="metaData"> June 20th, 2019 </p>
<br/>

Ad-blockers work in two ways.

One, by blocking requests to ad-servers (like google ad services, doubleclick, etc.)

Two, by hiding content that looks like an advertisment, so that you never see it! Consider Facebook or Twitter where most ads you see are actually *sponsored* or *promoted* content.

*Oppilo* is a chrome extension that blocks all network calls that try to seep through to reach an ad server.

It is incredibly easy to code this up, and is just a few lines of javascript, look!

```js
chrome.webRequest.onBeforeRequest.addListener(
    function() {
      return {cancel: true};
    },
    { urls: [
      "*://*.googleadservices.com/*",
      "*://*.googlesyndication.com/*",
      "*://*.doubleclick.net/*"
    ]},
    ["blocking"]
  );
```

From the [documentation](https://developer.chrome.com/extensions/webRequest) - 
> The ```onBeforeRequest``` is fired when a request is about to occur. This event is sent before any TCP connection is made and can be used to cancel or redirect requests.

And that is exactly what we do to block ads! We intercept outgoing network connections that lead to ad-servers, and *cancel* them.

In the code above, the ```onBeforeRequest``` takes three parameters - a callback, a filter that can filter requests based on URLs, image requests, etc, and an optional array that specifies how the callback function is to be handled. <br/>
For instance, our optional array in the code above contains ```blocking```, which indicates that the callback function should be handled synchronously. This is crucial for *cancelling* the request as the request is *blocked* until the callback returns, which eventually returns ```cancel: true```.

That's it! That is the crux of this simple ad blocker! 🙂

Add a manifest to it, and the chrome extension named *Oppilo* (because Latin words make for fancy names. 😛) is ready! Be sure to add permissions, and link your javascript file to run in the background. ([Code here](https://github.com/sup95/Oppilo/blob/master/manifest.json))

I've added only three URLs for filtering. You can expand your list to block away ads from more providers. [Here](https://easylist.to/easylist/easylist.txt) is an exhaustive list. <br/>
Also, [AdblockPlus](https://adblockplus.org/) is open source and you can look at all of its code [here](https://github.com/adblockplus/adblockpluschrome).

To checkout the code for Oppilo or give it a try - [Oppilo](https://github.com/sup95/Oppilo)