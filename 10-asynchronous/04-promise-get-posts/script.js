/* becode/javascript
 *
 * /10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function displayArticles(articleTab)
    {
        for(index in articleTab)
        {
            console.log(articleTab[index]);
        }
    }
    function handleError(error)
    {
        console.error(error);
        console.error("Je suis dans la fonction handleError");
    }
    function useGetPost()
    {
        const promise1=window.lib.getPosts();
        promise1.then(displayArticles,handleError);

    }
    document.getElementById("run").addEventListener("click",useGetPost);
    
    
    const promise1 = new Promise(function(resolve, reject) {
        throw "Où est mon erreur?"; // comment this to not launch an error
        setTimeout(function() {
          resolve('foo');
        }, 300);
      });
      
      promise1.then(function(value) {
        console.log(value);
        // expected output: "foo"
      },
      function(error)
      {
          console.error(error);
          console.error("Probablement dans ma fonction");
      });
      
      console.log(promise1);
      // expected output: [object Promise]
      
})();
/*
-->In the old days, doing several asynchronous operations in a row would lead to the classic callback pyramid of doom:

doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doThirdThing(newResult, function(finalResult) {
      console.log('Got the final result: ' + finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);

-->With modern functions, we attach our callbacks to the returned promises instead, forming a promise chain:

doSomething()
.then(function(result) {
  return doSomethingElse(result);
})
.then(function(newResult) {
  return doThirdThing(newResult);
})
.then(function(finalResult) {
  console.log('Got the final result: ' + finalResult);
})
.catch(failureCallback);

-->The arguments to then are optional, and catch(failureCallback) is short for then(null, failureCallback). You might see this expressed with arrow functions instead:

doSomething()
.then(result => doSomethingElse(result))
.then(newResult => doThirdThing(newResult))
.then(finalResult => {
  console.log(`Got the final result: ${finalResult}`);
})
.catch(failureCallback);

Important: Always return results, otherwise callbacks won't catch the result of a previous promise (with arrow functions () => x is short for () => { return x; }).

-----------------------------------------------------------------------------------------------------------------------------------------


Creating a Promise around an old callback API
Section

A Promise can be created from scratch using its constructor. This should be needed only to wrap old APIs.

In an ideal world, all asynchronous functions would already return promises. Unfortunately, some APIs still expect success and/or failure callbacks to be passed in the old way. The most obvious example is the setTimeout() function:

setTimeout(() => saySomething("10 seconds passed"), 10000);

Mixing old-style callbacks and promises is problematic. If saySomething() fails or contains a programming error, nothing catches it. setTimeout is to blame for this.

Luckily we can wrap setTimeout in a promise. Best practice is to wrap problematic functions at the lowest possible level, and then never call them directly again:

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

wait(10000).then(() => saySomething("10 seconds")).catch(failureCallback);

Basically, the promise constructor takes an executor function that lets us resolve or reject a promise manually. Since setTimeout() doesn't really fail, we left out reject in this case.

-------------------------------------------------------------------------------------------------------------------------------------------------------

Example 1 (never use the promise directly)

//the sleep function from C language

function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

//could be used like this with the 2017 syntax

async function doSomething()
{
    //...
    await sleep(500);
    //...
}

-----------------------------------------------------------------------------------------------------------------------------------------------------------
Example 2 MDN example

const promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve('foo');
  }, 300);
});

promise1.then(function(value) {
  console.log(value);
  // expected output: "foo"
});

console.log(promise1);
// expected output: [object Promise]


----------------------------------------------------------------------------------------------------------------------------------------------------------
Example 3 MDN example personal upgrade

const promise1 = new Promise(function(resolve, reject) {
        throw "Où est mon erreur?"; // comment this to not launch an error
        setTimeout(function() {
          resolve('foo');
        }, 300);
      });
      
      promise1.then(function(value) {
        console.log(value);
        // expected output: "foo"
      },
      function(error)
      {
          console.error(error);
          console.error("Probablement dans ma fonction");
      });
      
      console.log(promise1);
      // expected output: [object Promise]



----------------------------------------------------------------------------------------------------------------------------------------------------------
Common mistakes

Here are some common mistakes to watch out for when composing promise chains. Several of these mistakes manifest in the following example:

// Bad example! Spot 3 mistakes!

doSomething().then(function(result) {
  doSomethingElse(result) // Forgot to return promise from inner chain + unnecessary nesting
  .then(newResult => doThirdThing(newResult));
}).then(() => doFourthThing());
// Forgot to terminate chain with a catch!

The first mistake is to not chain things together properly. This happens when we create a new promise but forget to return it. As a consequence, the chain is broken, or rather, we have two independent chains racing. This means doFourthThing() won't wait for   doSomethingElse() or doThirdThing() to finish, and will run in parallel with them, likely unintended. Separate chains also have separate error handling, leading to uncaught errors.

The second mistake is to nest unnecessarily, enabling the first mistake. Nesting also limits the scope of inner error handlers, which—if unintended—can lead to uncaught errors. A variant of this is the promise constructor anti-pattern, which combines nesting with redundant use of the promise constructor to wrap code that already uses promises.

The third mistake is forgetting to terminate chains with catch. Unterminated promise chains lead to uncaught promise rejections in most browsers.

A good rule-of-thumb is to always either return or terminate promise chains, and as soon as you get a new promise, return it immediately, to flatten things:

doSomething()
.then(function(result) {
  return doSomethingElse(result);
})
.then(newResult => doThirdThing(newResult))
.then(() => doFourthThing())
.catch(error => console.log(error));

--------------------------------------------------------------------------------------------------------------------------------------------------
Nesting
Section

Simple promise chains are best kept flat without nesting, as nesting can be a result of careless composition. See common mistakes.

Nesting is a control structure to limit the scope of catch statements. Specifically, a nested catch only catches failures in its scope and below, not errors higher up in the chain outside the nested scope. When used correctly, this gives greater precision in error recovery:

doSomethingCritical()
.then(result => doSomethingOptional()
  .then(optionalResult => doSomethingExtraNice(optionalResult))
  .catch(e => {})) // Ignore if optional stuff fails; proceed.
.then(() => moreCriticalStuff())
.catch(e => console.log("Critical failure: " + e.message));

Note that the optional steps here are nested, not from the indentation, but from the precarious placement of the outer ( and ) around them.

The inner neutralizing catch statement only catches failures from doSomethingOptional() and doSomethingExtraNice(), after which the code resumes with moreCriticalStuff(). Importantly, if doSomethingCritical() fails, its error is caught by the final (outer) catch only.

-------------------------------------------------------------------------------------------------------------------------------------------------------
Chaining after a catch
Section

It's possible to chain after a failure, i.e. a catch, which is useful to accomplish new actions even after an action failed in the chain. Read the following example:

new Promise((resolve, reject) => {
    console.log('Initial');

    resolve();
})
.then(() => {
    throw new Error('Something failed');
        
    console.log('Do this');
})
.catch(() => {
    console.log('Do that');
})
.then(() => {
    console.log('Do this, no matter what happened before');
});

This will output the following text:

Initial
Do that
Do this, no matter what happened before

Note: The text "Do this" is not displayed because the "Something failed" error caused a rejection.




*/ 