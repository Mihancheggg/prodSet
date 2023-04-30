import { classNames } from './classNames';

describe('classNames', () => {
    test('adding mainClass only', () => {
        expect(classNames('testClass')).toBe('testClass');
    });

    test('adding mainClass and additional classes', () => {
        expect(classNames('testClass', {}, ['class1', 'class2']))
            .toBe('testClass class1 class2');
    });

    test('adding all params(mods are true)', () => {
        expect(classNames('testClass', { test: true, test2: true }, ['cls1']))
            .toBe('testClass cls1 test test2');
    });

    test('adding all params(one mode false)', () => {
        expect(classNames('testClass', { test: false, test2: true }, ['cls1']))
            .toBe('testClass cls1 test2');
    });
});
