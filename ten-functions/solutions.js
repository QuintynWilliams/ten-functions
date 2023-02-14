"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

const isTrue = (input) => {
    return input === true
}

const isFalse = (input) => {
    return input === false
}

const not = (input) => {
    return !input
}

const addOne = (input) => {
    return parseFloat(input) + 1
}

const isEven = (input) => {
    return parseFloat(input) % 2 === 0
}

const isIdentical = (inpFirst, inpSecond) => {
    return inpFirst === inpSecond
}

const isEqual = (inpFirst, inpSecond) => {
    return inpFirst == inpSecond
}

const or = (inpFirst, inpSecond) => {
    return inpFirst || inpSecond
}

const and = (inpFirst, inpSecond) => {
    return inpFirst && inpSecond
}

const concat = (inpFirst, inpSecond) => {
    return `${inpFirst}` + `${inpSecond}`
}