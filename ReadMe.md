The @function directive and @at-root directive both has completed variable block scope;
The @mixin derctive block scope is curious, it cann't access the outside variable, but will bring internal variable out infulence outside context where it been invoked;

@for, @if, @each doesn't has block scope;