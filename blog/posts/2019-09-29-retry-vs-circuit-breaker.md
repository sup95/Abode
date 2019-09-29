---
layout: Blog
date: Sept 29, 2019
tag:
  - Distributed Systems
---

# Retry vs Circuit Breaker
<p class="metaData"> {{ $frontmatter.date }} </p>
<br/>

The Retry pattern enables an application to retry an operation in hopes of success. <br/>
The Circuit Breaker pattern prevents an application from performing an operation that is likely to fail.

Sounds dry/vague/twisted? Consider this:

You know how we keep opening the refrigerator every five minutes hoping to find food? That's Retry! <br/>

Consider a baby proofed refrigerator. The babyproofing *prevents* you from opening it too often (i.e. making frequent retries) as it is difficult to wedge open. This is (kinda) Circuit Breaking!

<div class="twoImageGroup">
  <div class="twoImageGroupItem">
    <img src = "../assets/2019-09-29-retry-vs-circuit-breaker/fridge_meme.jpg" alt="retry_meme" class="blogImg">
  </div>
  <div class="twoImageGroupItem">
    <a href="https://www.youtube.com/watch?v=Hd_AGKfc7sk"><img src = "../assets/2019-09-29-retry-vs-circuit-breaker/babyproof.jpeg" alt="circuit_breaker_meme" class="blogImg"></a>
  </div>
</div>

I hope that gives you the intuition for retry and circuit breaker; now let's get a little more technical!

## Retry

In distributed systems, failure is inevitable.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Life lesson from distributed systems: Failures are inevitable. ✨</p>&mdash; Supriya Srivatsa (@SupriyaSrivatsa) <a href="https://twitter.com/SupriyaSrivatsa/status/1177890110798348289?ref_src=twsrc%5Etfw">September 28, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Retry pattern is useful in scenarios of **transient failures**. What does this mean? Failures that are "temperory", lasting only for a short amount of time are transient. A momentary loss of network connectivity, a brief moment when the service goes down or is unresponsive and related timeouts are examples of transient failures.

As the failure is *transient*, *retrying* after some time could possibly give us the result needed!

How do we define "some time"? What is an appropriate amount to wait before retrying? There is no one answer to this. It depends on the use case, the business logic and ultimately the end goal to decide how long one should wait before retrying.

There are different retry strategies to pick a retry interval:
- **Regular Intervals** - commonly used in interactive operations. eg: every second, or every 5 seconds.
- **Incremental Intervals** - eg: every second, then 2, then 3 seconds and so on upto a maximum.
- **Exponential back-off** - most commonly used, particularly in background operations. eg: every 1, 2, 4 seconds and so on upto a maximum.

Consider the scenario where the transient failure is occuring due to the database being under heavy load and thus throttling requests to it. So, a typical and correct approach in this case, would be to retry. Now, also consider that often in any large scale distributed system, you would have many service instances running. If each of these retry with the same retry policy, say every 2 seconds, and they fall into sync, now all the service instances are retrying at the *same* time. This just increases the load on the DB, and leads to more failures. How do we prevent this?

To prevent such cases, we often use **randomization** along with a retry policy. So instead of retrying strictly after every two seconds, the instances retry after every `2 + random_milli`. The randomization prevents clients in sync from retyring all at once.

So, what is a circuit breaker and why?

## Circuit Breaker

Circuit Breaker pattern is useful in scenarios of **long lasting faults**. Consider a loss of connectivity or the failure of a service that takes some time to repair itself. In such cases, it may not be of much use to keep retrying often if it is indeed going to take a while to hear back from the server. *The Circuit Breaker pattern wants to prevent an application from performing an operation that is likely to fail.*

The Circuit Breaker keeps a tab on the number of recent failures, and on the basis of a pre-determined threshold, determines whether the request should be sent to the server under stress or not. 

Let's look at it a little more closely.

The Circuit Breaker has three states:

- **Closed**: Like the current is allowed to flow through in an electrical circuit breaker when closed, here, the request is allowed to flow through to the server. 

    The circuit breaker maintains a count of failures. If the request that was allowed to pass through fails, the cicruit breaker increments the failure count. Once this failure count reaches a particular threshold in a given time period, the circuit breaker moves into the **open** state and starts a timer.

    The purpose of the timer is to give some time to the system to heal before it starts receiving requests again. Once this timer expires, the circuit breaker moves to the **half-open** state.

- **Open**: The request is immediately failed and exception is returned to the application.

- **Half-Open**: The purpose of the half-open state is to ensure that the server is ready to start receiving and processing requests. 

    A limited number of requests are allowed to hit the server. If these fail again, the circuit breaker resets the timer and moves back into **open** state. If these requests succeed, the timer is reset and the circuit breaker is moved to **closed** state. 

Following from our refrigerator anology and the technical details above, do you see that this is not about retry *vs* circuit breaker at all. This is about retry *and* circuit breaker. It is common and good practice to *combine* retry and cicruit breaker patterns to ensure that retries are made for transient faults, and instead of frequent bombarding, reasonable time is given for systems to repair/heal when the failures are relatively long lasting, and this is where circuit breaker comes to the rescue. : )

To conclude, from the [Azure documentation](https://docs.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker), this is quite comprehensive:

> The purpose of the Circuit Breaker pattern is different than the Retry pattern. The Retry pattern enables an application to retry an operation in the expectation that it'll succeed. The Circuit Breaker pattern prevents an application from performing an operation that is likely to fail. An application can combine these two patterns by using the Retry pattern to invoke an operation through a circuit breaker. However, the retry logic should be sensitive to any exceptions returned by the circuit breaker and abandon retry attempts if the circuit breaker indicates that a fault is not transient.
