# Take A `Step` With Kotlin

```kotlin
for(i in 1..10 step 2 step 3) print("$i ")
```

So, what would this output?

Let's dissect, `step` by `step`. 🤭

What if we only did `for(i in 1..10 step 2) print("$i “)`? 

The output is `1 3 5 7 9`. 

Great! So, `step` increments the “sequence”(or progression, technically) by the specified step count. 

So what happens when we have step 3 followed by step 2? Let's just run it and see.

The output is `1 4 7`. Okayy, how did that happen?

I urge you to pause here and think how.

With a little bit of analysis we can hypothesize that `step 2` returns `1 3 5 7 9`, and `step 3` builds *on that range* of 1 to 9 and increments with steps of 3, therefore `1 4 7`.


To understand this clearly, we need to look at what actually happens under the hood with `step`.

Try running 

```println(1..10 step 2)```

This returns `1..9 step 2`. Where did this come from?

Let's use Intellij to navigate to `step`. This is how it looks like: 

```kotlin
public infix fun IntProgression.step(step: Int): IntProgression {
    checkStepIsPositive(step > 0, step)
    return IntProgression.fromClosedRange(first, last, if (this.step > 0) step else -step)
}
```

Glaring from this code snippet at us is `IntProgression`. What's that? Navigating to IntProgression, we see that this is a class `start`, `endInclusive` and `step`. Scrolling down a bit, we see its `toString()` function. *This* method gives us what was printed when we ran ```println(1..10) step 2``` - string representation of `IntProgression`.

So, now we know that `1..10 step 2` returns an `IntProgression` containing *start* 1, *endInclusive* 9 with a *step* of 2. Where in code does the `9` get computed?

We see that a `first` and `last` are passed to `fromClosedRange`. With some quick navigation in Intellij, we can see that while `first` is the same as `start`, `last` is computed in `getProgressionLastElement` where `end - differenceModulo(end, start, step)` is used to find the `endInclusive` which can be achieved if we keep taking steps.

<details>
<summary>A byte of experimentation</summary>

Here are some things that make me wonder if I'm right.

Looking once again at the `step` method from `IntProgression`, while there is an ssertion for `checkStepIsPositive`, we still do an `else -step` on the next line? Smells weird to me, and so says --speaker-- at --mins-- of the Koltin Puzzlers talk.

Further, looking at `getProgressionLastElement` method which computes `last` too, we see a branch for negative step.

Next, while 1..10 prints 1.....

once assertion is removed, everything seems to work just as it should, even downward range!

--old link to why downward range was not chosen-- -> https://blog.jetbrains.com/kotlin/2013/02/ranges-reloaded/

</details>


