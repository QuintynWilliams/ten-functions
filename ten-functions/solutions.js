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

//EX 01
const isTrue = (input) => {
    return input === true
}

//EX 02
const isFalse = (input) => {
    return input === false
}

//EX 03
const not = (input) => {
    return !input
}

//EX 04
const addOne = (input) => {
    return parseFloat(input) + 1
}

//EX 05
const isEven = (input) => {
    return parseFloat(input) % 2 === 0
}

//EX 06
const isIdentical = (inpFirst, inpSecond) => {
    return inpFirst === inpSecond
}

//EX 07
const isEqual = (inpFirst, inpSecond) => {
    return inpFirst == inpSecond
}

//EX 08
const or = (inpFirst, inpSecond) => {
    return inpFirst || inpSecond
}

//EX 09
const and = (inpFirst, inpSecond) => {
    return inpFirst && inpSecond
}

//EX 10
const concat = (inpFirst, inpSecond) => {
    return `${inpFirst}` + `${inpSecond}`
}