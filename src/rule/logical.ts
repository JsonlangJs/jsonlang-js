import { IJsonLangParams, RuleInput, Rules, RulesImplementation, Runner } from '../core';

export class LogicalRules implements RulesImplementation {

  private rules: Rules;

  constructor() {
    this.rules = new Map();
    this.register();
  }

  getRules(): Rules {
    return this.rules;
  }

  private register = () => {
    this.rules.set({ name: 'And', shortcut: '&&', group: 'Logical' }, this.and);
    this.rules.set({ name: 'Or', shortcut: '||', group: 'Logical' }, this.or);
    this.rules.set({ name: 'Equal', shortcut: '==', group: 'Logical' }, this.equal);
    this.rules.set({ name: 'NotEqual', shortcut: '!=', group: 'Logical' }, this.notEqual);
    this.rules.set({ name: 'Not', shortcut: '!', group: 'Logical' }, this.not);
    this.rules.set({ name: 'GreaterThan', shortcut: '>', group: 'Logical' }, this.greaterThan);
    this.rules.set({ name: 'LessThan', shortcut: '<', group: 'Logical' }, this.lessThan);
    this.rules.set({ name: 'GreaterThanOrEqual', shortcut: '>=', group: 'Logical' }, this.greaterThanOrEqual);
    this.rules.set({ name: 'LessThanOrEqual', shortcut: '<=', group: 'Logical' }, this.lessThanOrEqual);
    this.rules.set({ name: 'If', group: 'Logical' }, this.if);
  }

  private areSameType = (...inputs: RuleInput) => {
    return [...inputs].slice(1).every(i => typeof i === typeof inputs[0]);
  }

  private hasObjects = (...inputs: RuleInput[]) => {
    return [...inputs].some(i => typeof i === 'object');
  }

  private castToString = (...inputs: RuleInput[]) => {
    return [...inputs].map(i => typeof i === 'string' ? i : JSON.stringify(i));
  }

  private jsonParse = (...inputs: RuleInput[]) => {
    return [...inputs].map(i => {
      if(typeof i === 'string') {
        try {
          const result = JSON.parse(i);

          return result;
        } catch {
          return undefined;
        }
      }
      else {
        return i;
      }
    });
  }

  private and = (...inputs: RuleInput[]) => {
    return [...inputs].every(input => input);
  }

  private or = (...inputs: RuleInput[]) => {
    return [...inputs].some(input => input)
  }

  private equal = (lhs: RuleInput, rhs: RuleInput) => {

    if (!this.areSameType(lhs, rhs) || this.hasObjects(lhs, rhs)) {
      const [stringLHS, stringRHS] = this.castToString(lhs, rhs);

      return stringLHS === stringRHS;
    }
    else {
      return lhs === rhs;
    }
  }

  private notEqual = (lhs: RuleInput, rhs: RuleInput) => {

    if (!this.areSameType(lhs, rhs) || this.hasObjects(lhs, rhs)) {
      const [stringLHS, stringRHS] = this.castToString(lhs, rhs);

      return stringLHS !== stringRHS;
    }
    else {
      return lhs !== rhs;
    }
  }

  private not = (value: RuleInput) => {
    return !value;
  }

  private greaterThan = (lhs: RuleInput, rhs: RuleInput) => {
    if (this.hasObjects(lhs, rhs)) return false;
    const [parsedLHS, parsedRHS] =  this.jsonParse(lhs, rhs);
    return this.areSameType(parsedLHS, parsedRHS) ? parsedLHS > parsedRHS : false;
  }

  private lessThan = (lhs: RuleInput, rhs: RuleInput) => {
    if (this.hasObjects(lhs, rhs)) return false;
    const [parsedLHS, parsedRHS] =  this.jsonParse(lhs, rhs);
    return this.areSameType(parsedLHS, parsedRHS) ? parsedLHS < parsedRHS : false;
  }

  private greaterThanOrEqual = (lhs: RuleInput, rhs: RuleInput) => {
    if (this.hasObjects(lhs, rhs)) return false;
    const [parsedLHS, parsedRHS] =  this.jsonParse(lhs, rhs);
    return this.areSameType(parsedLHS, parsedRHS) ? parsedLHS >= parsedRHS : false;
  }

  private lessThanOrEqual = (lhs: RuleInput, rhs: RuleInput) => {
    if (this.hasObjects(lhs, rhs)) return false;
    const [parsedLHS, parsedRHS] =  this.jsonParse(lhs, rhs);
    return this.areSameType(parsedLHS, parsedRHS) ? parsedLHS <= parsedRHS : false;
  }

  private if = (
    $rule_condition: IJsonLangParams,
    $rule_then: IJsonLangParams,
    $rule_else: IJsonLangParams,
    $runner: Runner
  ) => {
    if (!$runner) return false;
    return $runner()($rule_condition) ? $runner()($rule_then) : $runner()($rule_else);
  }
}