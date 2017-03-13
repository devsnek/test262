// This file was procedurally generated from the following sources:
// - src/spread/obj-mult-spread.case
// - src/spread/default/array.template
/*---
description: Multiple Object Spread operation (Array initializer)
esid: sec-runtime-semantics-arrayaccumulation
es6id: 12.2.5.2
flags: [generated]
info: |
    SpreadElement : ...AssignmentExpression

    1. Let spreadRef be the result of evaluating AssignmentExpression.
    2. Let spreadObj be ? GetValue(spreadRef).
    3. Let iterator be ? GetIterator(spreadObj).
    4. Repeat
       a. Let next be ? IteratorStep(iterator).
       b. If next is false, return nextIndex.
       c. Let nextValue be ? IteratorValue(next).
       d. Let status be CreateDataProperty(array, ToString(ToUint32(nextIndex)),
          nextValue).
       e. Assert: status is true.
       f. Let nextIndex be nextIndex + 1.

    Pending Runtime Semantics: PropertyDefinitionEvaluation

    PropertyDefinition:...AssignmentExpression

    1. Let exprValue be the result of evaluating AssignmentExpression.
    2. Let fromValue be GetValue(exprValue).
    3. ReturnIfAbrupt(fromValue).
    4. Let excludedNames be a new empty List.
    5. Return CopyDataProperties(object, fromValue, excludedNames).

---*/

let o = {a: 2, b: 3};
let o2 = {c: 4, d: 5};


var callCount = 0;

(function(obj) {
  assert.sameValue(obj.a, 2);
  assert.sameValue(obj.b, 3);
  assert.sameValue(obj.c, 4);
  assert.sameValue(obj.d, 5);
  assert.sameValue(Object.keys(obj).length, 4);
  callCount += 1;
}.apply(null, [{...o, ...o2}]));

assert.sameValue(callCount, 1);
