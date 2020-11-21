(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{425:function(t,e,a){"use strict";a.r(e);var n=a(13),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"java-fork-join-框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-fork-join-框架"}},[t._v("#")]),t._v(" Java Fork Join 框架")]),t._v(" "),a("p",[a("strong",[t._v("对于简单的并行任务，你可以通过“线程池 +Future”的方案来解决；如果任务之间有聚合关系，无论是 AND 聚合还是 OR 聚合，都可以通过 CompletableFuture 来解决；而批量的并行任务，则可以通过 CompletionService 来解决。")])]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#1-completablefuture"}},[t._v("1. CompletableFuture")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#11-runasync-%E5%92%8C-supplyasync%E6%96%B9%E6%B3%95"}},[t._v("1.1. runAsync 和 supplyAsync 方法")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#2-completionstage"}},[t._v("2. CompletionStage")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#21-%E4%B8%B2%E8%A1%8C%E5%85%B3%E7%B3%BB"}},[t._v("2.1. 串行关系")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#22-%E6%8F%8F%E8%BF%B0-and-%E6%B1%87%E8%81%9A%E5%85%B3%E7%B3%BB"}},[t._v("2.2. 描述 AND 汇聚关系")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#23-%E6%8F%8F%E8%BF%B0-or-%E6%B1%87%E8%81%9A%E5%85%B3%E7%B3%BB"}},[t._v("2.3. 描述 OR 汇聚关系")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#24-%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86"}},[t._v("2.4. 异常处理")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#3-forkjoin"}},[t._v("3. Fork/Join")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#31-forkjoinpool-%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86"}},[t._v("3.1. ForkJoinPool 工作原理")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#4-%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99"}},[t._v("4. 参考资料")])])]),t._v(" "),a("h2",{attrs:{id:"_1-completablefuture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-completablefuture"}},[t._v("#")]),t._v(" 1. CompletableFuture")]),t._v(" "),a("h3",{attrs:{id:"_1-1-runasync-和-supplyasync-方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-runasync-和-supplyasync-方法"}},[t._v("#")]),t._v(" 1.1. runAsync 和 supplyAsync 方法")]),t._v(" "),a("p",[t._v("CompletableFuture 提供了四个静态方法来创建一个异步操作。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CompletableFuture")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("runAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runnable")]),t._v(" runnable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CompletableFuture")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("runAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runnable")]),t._v(" runnable"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Executor")]),t._v(" executor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("U")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CompletableFuture")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("U")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("supplyAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Supplier")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("U")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" supplier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("U")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CompletableFuture")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("U")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("supplyAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Supplier")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("U")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" supplier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Executor")]),t._v(" executor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("没有指定 Executor 的方法会使用 ForkJoinPool.commonPool() 作为它的线程池执行异步代码。如果指定线程池，则使用指定的线程池运行。以下所有的方法都类同。")]),t._v(" "),a("ul",[a("li",[t._v("runAsync 方法不支持返回值。")]),t._v(" "),a("li",[t._v("supplyAsync 可以支持返回值。")])]),t._v(" "),a("h2",{attrs:{id:"_2-completionstage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-completionstage"}},[t._v("#")]),t._v(" 2. CompletionStage")]),t._v(" "),a("p",[t._v("CompletionStage 接口可以清晰地描述任务之间的时序关系，如"),a("strong",[t._v("串行关系、并行关系、汇聚关系")]),t._v("等。")]),t._v(" "),a("h3",{attrs:{id:"_2-1-串行关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-串行关系"}},[t._v("#")]),t._v(" 2.1. 串行关系")]),t._v(" "),a("p",[t._v("CompletionStage 接口里面描述串行关系，主要是 thenApply、thenAccept、thenRun 和 thenCompose 这四个系列的接口。")]),t._v(" "),a("p",[t._v("thenApply 系列函数里参数 fn 的类型是接口 "),a("code",[t._v("Function<T, R>")]),t._v("，这个接口里与 CompletionStage 相关的方法是 "),a("code",[t._v("R apply(T t)")]),t._v("，这个方法既能接收参数也支持返回值，所以 thenApply 系列方法返回的是"),a("code",[t._v("CompletionStage")]),t._v("。")]),t._v(" "),a("p",[t._v("而 thenAccept 系列方法里参数 consumer 的类型是接口 "),a("code",[t._v("Consumer<T>")]),t._v("，这个接口里与 CompletionStage 相关的方法是 "),a("code",[t._v("void accept(T t)")]),t._v("，这个方法虽然支持参数，但却不支持回值，所以 thenAccept 系列方法返回的是"),a("code",[t._v("CompletionStage<Void>")]),t._v("。")]),t._v(" "),a("p",[t._v("thenRun 系列方法里 action 的参数是 Runnable，所以 action 既不能接收参数也不支持返回值，所以 thenRun 系列方法返回的也是"),a("code",[t._v("CompletionStage<Void>")]),t._v("。")]),t._v(" "),a("p",[t._v("这些方法里面 Async 代表的是异步执行 fn、consumer 或者 action。其中，需要你注意的是 thenCompose 系列方法，这个系列的方法会新创建出一个子流程，最终结果和 thenApply 系列是相同的。")]),t._v(" "),a("h3",{attrs:{id:"_2-2-描述-and-汇聚关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-描述-and-汇聚关系"}},[t._v("#")]),t._v(" 2.2. 描述 AND 汇聚关系")]),t._v(" "),a("p",[t._v("CompletionStage 接口里面描述 AND 汇聚关系，主要是 thenCombine、thenAcceptBoth 和 runAfterBoth 系列的接口，这些接口的区别也是源自 fn、consumer、action 这三个核心参数不同。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("CompletionStage<R> thenCombine(other, fn);\nCompletionStage<R> thenCombineAsync(other, fn);\nCompletionStage<Void> thenAcceptBoth(other, consumer);\nCompletionStage<Void> thenAcceptBothAsync(other, consumer);\nCompletionStage<Void> runAfterBoth(other, action);\nCompletionStage<Void> runAfterBothAsync(other, action);\n")])])]),a("h3",{attrs:{id:"_2-3-描述-or-汇聚关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-描述-or-汇聚关系"}},[t._v("#")]),t._v(" 2.3. 描述 OR 汇聚关系")]),t._v(" "),a("p",[t._v("CompletionStage 接口里面描述 OR 汇聚关系，主要是 applyToEither、acceptEither 和 runAfterEither 系列的接口，这些接口的区别也是源自 fn、consumer、action 这三个核心参数不同。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("CompletionStage applyToEither(other, fn);\nCompletionStage applyToEitherAsync(other, fn);\nCompletionStage acceptEither(other, consumer);\nCompletionStage acceptEitherAsync(other, consumer);\nCompletionStage runAfterEither(other, action);\nCompletionStage runAfterEitherAsync(other, action);\n")])])]),a("p",[t._v("下面的示例代码展示了如何使用 applyToEither() 方法来描述一个 OR 汇聚关系。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("CompletableFuture<String> f1 =\n  CompletableFuture.supplyAsync(()->{\n    int t = getRandom(5, 10);\n    sleep(t, TimeUnit.SECONDS);\n    return String.valueOf(t);\n});\n\nCompletableFuture<String> f2 =\n  CompletableFuture.supplyAsync(()->{\n    int t = getRandom(5, 10);\n    sleep(t, TimeUnit.SECONDS);\n    return String.valueOf(t);\n});\n\nCompletableFuture<String> f3 =\n  f1.applyToEither(f2,s -> s);\n\nSystem.out.println(f3.join());\n")])])]),a("h3",{attrs:{id:"_2-4-异常处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-异常处理"}},[t._v("#")]),t._v(" 2.4. 异常处理")]),t._v(" "),a("p",[t._v("虽然上面我们提到的 fn、consumer、action 它们的核心方法都"),a("strong",[t._v("不允许抛出可检查异常，但是却无法限制它们抛出运行时异常")]),t._v("，例如下面的代码，执行 "),a("code",[t._v("7/0")]),t._v(" 就会出现除零错误这个运行时异常。非异步编程里面，我们可以使用 try{}catch{} 来捕获并处理异常，那在异步编程里面，异常该如何处理呢？")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("CompletableFuture<Integer>\n  f0 = CompletableFuture.\n    .supplyAsync(()->(7/0))\n    .thenApply(r->r*10);\nSystem.out.println(f0.join());\n")])])]),a("p",[t._v("CompletionStage 接口给我们提供的方案非常简单，比 try{}catch{}还要简单，下面是相关的方法，使用这些方法进行异常处理和串行操作是一样的，都支持链式编程方式。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("CompletionStage exceptionally(fn);\nCompletionStage<R> whenComplete(consumer);\nCompletionStage<R> whenCompleteAsync(consumer);\nCompletionStage<R> handle(fn);\nCompletionStage<R> handleAsync(fn);\n")])])]),a("p",[t._v("下面的示例代码展示了如何使用 exceptionally() 方法来处理异常，exceptionally() 的使用非常类似于 try{}catch{}中的 catch{}，但是由于支持链式编程方式，所以相对更简单。既然有 try{}catch{}，那就一定还有 try{}finally{}，whenComplete() 和 handle() 系列方法就类似于 try{}finally{}中的 finally{}，无论是否发生异常都会执行 whenComplete() 中的回调函数 consumer 和 handle() 中的回调函数 fn。whenComplete() 和 handle() 的区别在于 whenComplete() 不支持返回结果，而 handle() 是支持返回结果的。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("CompletableFuture<Integer>\n  f0 = CompletableFuture\n    .supplyAsync(()->7/0))\n    .thenApply(r->r*10)\n    .exceptionally(e->0);\nSystem.out.println(f0.join());\n")])])]),a("h2",{attrs:{id:"_3-fork-join"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-fork-join"}},[t._v("#")]),t._v(" 3. Fork/Join")]),t._v(" "),a("p",[t._v("Fork/Join 是一个并行计算的框架，主要就是用来支持分治任务模型的，这个计算框架里的"),a("strong",[t._v("Fork 对应的是分治任务模型里的任务分解，Join 对应的是结果合并")]),t._v("。Fork/Join 计算框架主要包含两部分，一部分是"),a("strong",[t._v("分治任务的线程池 ForkJoinPool")]),t._v("，另一部分是"),a("strong",[t._v("分治任务 ForkJoinTask")]),t._v("。这两部分的关系类似于 ThreadPoolExecutor 和 Runnable 的关系，都可以理解为提交任务到线程池，只不过分治任务有自己独特类型 ForkJoinTask。")]),t._v(" "),a("p",[t._v("ForkJoinTask 是一个抽象类，它的方法有很多，最核心的是 fork() 方法和 join() 方法，其中 fork() 方法会异步地执行一个子任务，而 join() 方法则会阻塞当前线程来等待子任务的执行结果。ForkJoinTask 有两个子类——RecursiveAction 和 RecursiveTask，通过名字你就应该能知道，它们都是用递归的方式来处理分治任务的。这两个子类都定义了抽象方法 compute()，不过区别是 RecursiveAction 定义的 compute() 没有返回值，而 RecursiveTask 定义的 compute() 方法是有返回值的。这两个子类也是抽象类，在使用的时候，需要你定义子类去扩展。")]),t._v(" "),a("h3",{attrs:{id:"_3-1-forkjoinpool-工作原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-forkjoinpool-工作原理"}},[t._v("#")]),t._v(" 3.1. ForkJoinPool 工作原理")]),t._v(" "),a("p",[t._v("Fork/Join 并行计算的核心组件是 ForkJoinPool，所以下面我们就来简单介绍一下 ForkJoinPool 的工作原理。")]),t._v(" "),a("p",[t._v("通过专栏前面文章的学习，你应该已经知道 ThreadPoolExecutor 本质上是一个生产者 - 消费者模式的实现，内部有一个任务队列，这个任务队列是生产者和消费者通信的媒介；ThreadPoolExecutor 可以有多个工作线程，但是这些工作线程都共享一个任务队列。")]),t._v(" "),a("p",[t._v("ForkJoinPool 本质上也是一个生产者 - 消费者的实现，但是更加智能，你可以参考下面的 ForkJoinPool 工作原理图来理解其原理。ThreadPoolExecutor 内部只有一个任务队列，而 ForkJoinPool 内部有多个任务队列，当我们通过 ForkJoinPool 的 invoke() 或者 submit() 方法提交任务时，ForkJoinPool 根据一定的路由规则把任务提交到一个任务队列中，如果任务在执行过程中会创建出子任务，那么子任务会提交到工作线程对应的任务队列中。")]),t._v(" "),a("p",[t._v("如果工作线程对应的任务队列空了，是不是就没活儿干了呢？不是的，ForkJoinPool 支持一种叫做“"),a("strong",[t._v("任务窃取")]),t._v("”的机制，如果工作线程空闲了，那它可以“窃取”其他工作任务队列里的任务，例如下图中，线程 T2 对应的任务队列已经空了，它可以“窃取”线程 T1 对应的任务队列的任务。如此一来，所有的工作线程都不会闲下来了。")]),t._v(" "),a("p",[t._v("ForkJoinPool 中的任务队列采用的是双端队列，工作线程正常获取任务和“窃取任务”分别是从任务队列不同的端消费，这样能避免很多不必要的数据竞争。我们这里介绍的仅仅是简化后的原理，ForkJoinPool 的实现远比我们这里介绍的复杂，如果你感兴趣，建议去看它的源码。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/snap/20200703141326.png",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"_4-参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-参考资料"}},[t._v("#")]),t._v(" 4. 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://item.jd.com/10922250.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Java 并发编程实战》"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://item.jd.com/11740734.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Java 并发编程的艺术》"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://time.geekbang.org/column/intro/100023901",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 并发编程实战"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/6bac52527ca4",target:"_blank",rel:"noopener noreferrer"}},[t._v("CompletableFuture 使用详解"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=s.exports}}]);