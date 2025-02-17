# JavaScript Loose Equality Bug
This repository demonstrates a common JavaScript bug related to loose equality (==).  Loose equality does type coercion, which can lead to unexpected behavior when comparing values of different types.

## Bug Description
The `foo` function demonstrates a potential issue.  When either `a` or `b` is `null`, the function correctly returns `null`. However,  if we were to use loose equality, unexpected results could occur due to type coercion.