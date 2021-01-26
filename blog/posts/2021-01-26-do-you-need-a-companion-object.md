---
layout: Blog
date: Jan 26, 2021
tag:
  - Kotlin
---
# Do you need a companion (object)?
<p class="metaData"> {{ $frontmatter.date }} </p>

<img src="https://images.unsplash.com/photo-1502888959209-5ac0c5319f94?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800" class="blogImg"/>

## What is a companion object?

Companion object is an object *accompanying* the class, independent of the class instances. Thus, companion objects are used to bring in the static essence - to enable accessing properties and functions of a class that are common across instances.

While `companion object` brings in the static essence, we don't need to use a companion object everywhere where we would have used a static variable. Kotlin's `companion object` is **not** a two word replacement for Java's `static` .

Consider two most common use cases of `static` - creating constants, and for "util" classes. 

If we use a companion object for these, like - 

```kotlin
class DummyUtils {
    companion object {
        const val YAY = "yayie!"
        fun doDummyOperation() {
            println("ta da!")
        }
    }
}
```

Let's decompile this and see what it looks like - 

```java
public final class DummyUtils {
   @NotNull
   public static final String YAY = "yayie!";
   @NotNull
   public static final DummyUtils.Companion Companion = new DummyUtils.Companion((DefaultConstructorMarker)null);

   @Metadata(...)
   public static final class Companion {
      public final void doDummyOperation() {
         String var1 = "ta da!";
         boolean var2 = false;
         System.out.println(var1);
      }

      private Companion() {
      }

      // $FF: synthetic method
      public Companion(DefaultConstructorMarker $constructor_marker) {
         this();
      }
   }
}
```

We see that the use of `companion object` decompiles to using an inner class called `Companion`. Is this what you were really going for? Do you want to create a nested class with all the hullabaloo, only to create static constants and functions?

Kotlin's `companion object` brings in the static essence, no doubt. But, it is not the only way to do so.

## Top-level properties

Consider this alternate approach of using top-level properties/functions - 

```kotlin
package do_you_need_a_companion_object

const val YAY = "yayie!"

fun doDummyOperation() {
    println("ta da!")
}
```

Decompiling this, we see - 

```kotlin
@Metadata(...)
public final class TopLevelKt {
   @NotNull
   public static final String YAY = "yayie!";

   public static final void doDummyOperation() {
      String var0 = "ta da!";
      boolean var1 = false;
      System.out.println(var0);
   }
}
```

We see that using top-level construct here decompiles to far simpler code, without the overhead of creating inner classes, yet retaining the static essence.

## Objects

If you want to group a bunch of constants together, you can also use a singleton `object` , like - 

```kotlin
object Celebrations {
    const val TADA = "ta da!"
    const val YAY  = "yayie!"
}
```

This depends on what you are trying to achieve. It may be good to use objects to group constants like error strings, etc; on the other hand, when constants are used heavily in a single file, it's good to declare these as top-level properties in the file, followed by other code, keeping it easier to reason about code.

## So...?

Most often when we think we need a companion object, actually, we may not. Reiterating what we looked at in the beginning of this article - 

> Companion object is an object accompanying the class.

Thus, use a companion object *only* when it's contents are whole only with the rest of the class. Otherwise, the overhead is largely unwarranted, and the code is unidiomatic. For the most common static usecases like creating constants, or functions in "util" files that operate referentially transperantly on the input, it is best to create top-level constructs, grouping them in files (or objects, if reasonable) by content relevancy and project code structure.

<br/>

_Also published on [Kotlin Turf](https://medium.com/kotlin-turf)_