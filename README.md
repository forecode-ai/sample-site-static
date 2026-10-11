# sample-site-static

Part of the ForeCode test estate. Not a real product.

A static help-centre site, published to an S3 bucket behind CloudFront. There is no staging: every change to `main`
is checked, and publishing to `production` runs manually and needs an approval.

Deploys are simulated: `.github/simulate.sh` makes the deploy tools print what they would do.
