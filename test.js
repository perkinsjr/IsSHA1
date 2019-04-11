import test from 'ava';
import x from './';

test("SHA1", t => {
	t.true(x.test('a94a8fe5ccb19ba61c4c0873d391e987982fbbd3'));
    t.false(x.test('0c67b2c1fcfba9fb71ff6feae41abd61d591df8ecabebefdba51db4d3ct9f1cf'));

});