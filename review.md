# Code Review: Refund Calculation

## Finding

`calcRefund` applies the 90% refund rate to both the ticket price and the service fee. The code comment says the service fee is not refundable, so the calculation should apply the rate to the ticket price only. As written, one ticket returns 325.8 instead of 315, and two tickets return 651.6 instead of 630.

## Test results

`node tests/run.js` fails both refund tests because of this calculation. The two formatting tests also fail on this branch because it is based on the older `origin/main`, where the known `formatPrice` regression is still present.

## Recommendation

Calculate the refund from the ticket price only, excluding `SERVICE_FEE`, and rerun the tests. Do not merge this branch until the refund calculation is corrected.