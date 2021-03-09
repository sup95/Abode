---
layout: Blog
date: March 9, 2021
tag:
  - Kotlin
---
# What's in a type name?
# Understanding Kotlin typealias and named imports
<p class="metaData"> {{ $frontmatter.date }} </p>

When we begin reading code, we start forming a mental picture of the code. In our minds, we connect the dots to form a hazy picture of how the code is structured, how the code "flows", and what needs to be tweaked to fix a pestering bug. Names aid significantly in building this understanding, in forming this mental picture. Names are undervalued, names are important. Variable names are important, function names are important, and so are type names.

In this article, we talk about types. Sometimes, types are complex enough to hinder readability, but not enough to warrant their own data class.

Consider this example from the (awesome!) Kotlin docs - `MutableMap<K, MutableList<File>>`, or even something without generics like say - `MutableMap<String, Set<CupcakeReview>>` . Types like these are complex to read and hinder the forming of a mind map. Everytime you encounter the type, it makes you pause for a second, reassure yourself of everything the type represents, and then move on reading code. 

For cases just like this, we have Kotlin's `typealias` 🎉

`typealias`, as the name suggests, is an *alias* *-* *an alternate name* for a type. For type names that are too laborious **to read, `typealias` aids in fluent code understanding, without slowing us down. A typealias is an alternate name for a complex type, that helps us read and understand the code easily.

For the examples above, consider - 

`typealias FileTable<K> = MutableMap<K, MutableList<File>>` and 

`typealias CupcakeReviewsByFlavour = MutableMap<String, Set<CupcakeReview>>`   

We substitute these complex types with their easy-to-read type aliases, making things clearer.

```kotlin
fun analyseReviews(reviews: Set<CupcakeReview>): MutableMap<String, Set<CupcakeReview>> {
	...
}

fun pickACupcake(cupcakeReviews: MutableMap<String, Set<CupcakeReview>>) {
    ...
}
```

versus 

```kotlin
typealias CupcakeReviewsByFlavour = MutableMap<String, Set<CupcakeReview>>

fun analyseReviews(reviews: Set<CupcakeReview>): CupcakeReviewsByFlavour {
	...
}

fun pickACupcake(cupcakeReviews: CupcakeReviewsByFlavour) {
    ...
}
```
<br/>

## So, how does typealias work?

Under the hood, typealias substitutes the type name with the actual type.

Consider code like - 

```kotlin
typealias CupcakeReviewsByFlavour = MutableMap<String, Set<CupcakeReview>>   

fun pickACupcake(cupcakeReviews: CupcakeReviewsByFlavour) {
    ...
}
```

This decompiles to a function with a signature like - 

```kotlin
public final void pickACupcake(@NotNull Map cupcakeReviews)
```

This is how the compiler makes type aliases work! Under the hood, It substitues the type alias by  the actual type (here, `Map`).

<br/>

## When should you not use typealias?

### In attempt to create a new type

Like we saw above, `typealias` works by substituting the actual type for the alias. This also means - 

> *typealias does **not** create a new type.*

Let's look at an example. If you create a typealias like -  

```kotlin
typealias UserId = String
```

Let's try using this now - 

```kotlin
data class User(
    val userId: UserId
)
val user = User("id")

fun func(id: UserId) {
    println(id)
}

func(user.userId)   //works
func("anyString")   //also works!
```

As you can see, creating a typealias `UserId` for a `String` does **not** create a new type called `UserId` - we get **no type safety** for `UserId`. It is just as possible to pass any string to a function accepting a `UserId`.

Moral: Don't do this. Don't create a typealias in attempt to create a new type. Type aliases provide no type safety benefits, and is purely for improving readability and code expressiveness.

<br/>

### Trading off readability

The very reason to use `typealias` is for improved readability. Yet, on the flip side, it's possible to "overuse" `typealias` such that the readability could go for a toss. Paradoxical? Let's look at an example - 

```kotlin
typealias ReportError = (error: ErrorType) -> Unit
fun validate(error: ReportError) {
	//it is not immediately apparent what `ReportError` does
	//it's a level of abstraction that does not help readability.
}
```

What we need to look for is - 

> Does the alias *add* enough to readability by being more expressive, o*r take away* from readability by using too much abstraction?

The key is the right level of abstraction, a balance difficult to strike and subjective to comment upon.

<br/>

### As a substitute for long imports

Often with our project structure, we may notice several long and conflicting imports in a file. For instance, in the codebase I work with, we use a layered architecture, and it's very common for files to be named the same across layers - in the api, domain, database, etc layers. 

```kotlin
fun mapCupcakeType(cupcakeType: com.company.example.x.y.domain.cupcake.CupcakeType): CupcakeType {
	...
	//notice the long import for `CupcakeType`(from the domain layer) as parameter
	//necessitated by `CupcakeType` (from the api layer) as return type.
	//this would be a very common occurence in such db/domain or domain/api mapper files.  
}
```

This looks ugly and affects readability. One may be tempted to use `typealias` to mitigate this problem - 

```kotlin
typealias DomainCupcakeType = com.company.example.x.y.domain.cupcake.CupcakeType

fun mapCupcakeType(cupcakeType: DomainCupcakeType): CupcakeType {
	...	
}
```

and it works. But there's something better we can do here - named imports.

<br/>

## Named Imports

We can use named imports to resolve long and/or conflicting imports. 

```kotlin
import com.company.example.x.y.domain.cupcake.CupcakeType as DomainCupcakeType

fun mapCupcakeType(cupcakeType: DomainCupcakeType): CupcakeType {
	...	
}
```

Both typealias and named imports aid in readability. A key difference to remember between these is - a typealiased type can have its own scopes - it can be private/public/protected/internal. But a named import does not have scoping of its own, it is always file scoped.

<br/>

---

<br/>

Readability is important. Seemingly small language features like `typealias` and named imports can be huge blessings in a large or growing codebase. Understanding associated nuances helps us write elegant, expressive code we enjoy working with. :)