---
layout: Blog
date: Jan 21, 2020
tag:
  - Kotlin
---
# Take A `Step` With Kotlin
<p class="metaData"> {{ $frontmatter.date }} </p>
<br/>

> This blog post is inspired by Anton Keks's amazing Kotlin Puzzlers [talk](https://www.youtube.com/watch?v=_AM5VbPTKeg&list=PLQ176FUIyIUY6SKGl3Cj9yeYibBuRr3Hl&index=52) from KotlinConf '19. The blog post outlines the steps in my thought process while exploring and demystifying the Puzzlers.

<br/>

So, what would this code snippet output?
```kotlin
fun main() {
    for(i in 1..10 step 2 step 3) print("$i ")
}
```

Let's understand this, `step` by `step`. 🤭

---

What would the output be if we did only a `step 2` in the loop, like this:

```kotlin
for(i in 1..10 step 2) print("$i ")
```

Unsurprisingly, this would output `1 3 5 7 9` - in the range `1..10`, we increment by *steps* of 2.

---

So now coming back to our original question, what happens when we do `step 2 step 3`?

To understand this, we first need to clearly understand what exactly happens behind the scenes when we do `1..10 step 2`. Let's just print this out - 

```kotlin 
fun main() {
    println(1..10 step 2) //Output: 1..9 step 2
}
```

Okay, that's a funny output, where did that come from? Let's dive deeper.

Let's navigate to Koltin source codes to inspect behavior.

Navigating to `step` implementation (Cmd+B in IntelliJ), we see this is how it looks:

```kotlin
public infix fun IntProgression.step(step: Int): IntProgression {
    checkStepIsPositive(step > 0, step)
    return IntProgression.fromClosedRange(first, last, if (this.step > 0) step else -step)
}
```

Glaring at us from this code snippet is `IntProgression`. 

Navigating to `IntProgression` implementation (Cmd+B in IntelliJ), we see that this is a class with `start`, `endInclusive` and `step` -

```kotlin
public open class IntProgression
    internal constructor
        (
                start: Int,
                endInclusive: Int,
                step: Int
        )
    ...
```


Scrolling down a bit, we see its `toString()` function:

```kotlin
override fun toString(): String = if (step > 0) "$first..$last step $step" else "$first downTo $last step ${-step}"
```
*There we go!* *This* method is what leads to printing the not-so-funny-anymore `1..9 step 2` as output - string representation of `IntProgression` with values `start` -> 1, `endInclusive` -> 9 (computed in `fromClosedRange` -> `getProgressionLastElement`) and `step` 2.

Thus, to summarize `1..10 step 2` returns an `IntProgression`!

---

Now that we've understood what happens behind the scenes of `step`, we are right on track to reason out the solution for the original question:

```kotlin
for(i in 1..10 step 2 step 3) print("$i ")
```

`1..10 step 2` returns an `IntProgression` in the range `1..9`.

Thus, we now actually boil down to a no puzzler and basically evaluate - 

```kotlin
for(i in 1..9 step 3) print("$i ")
```

And the output is surely,

```
1 4 7
```

Tada! 🎉


