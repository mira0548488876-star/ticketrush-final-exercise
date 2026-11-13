const { calcTotal, maxTickets } = require('../js/pricing');

test('two tickets cost 724', function () { assertEq(calcTotal(2), 724); });
test('one ticket costs 362', function () { assertEq(calcTotal(1), 362); });
test('regular customers may buy up to 8', function () { assertEq(maxTickets(), 8); });
test('member tickets are discounted but service fees are not', function () { assertEq(calcTotal(2, true), 584); });
test('members may buy up to 6 tickets', function () { assertEq(maxTickets(true), 6); });
test('members cannot exceed their ticket limit', function () { assertEq(calcTotal(7, true), null); });
test('members may buy exactly 6 tickets', function () { assertEq(calcTotal(6, true), 1752); });
test('regular customers cannot exceed their ticket limit', function () { assertEq(calcTotal(9, false), null); });
test('zero tickets are invalid', function () { assertEq(calcTotal(0, false), null); });
test('fractional ticket quantities are invalid', function () { assertEq(calcTotal(1.5, false), null); });
