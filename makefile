default: document
	R -e "devtools::check()"

document: bundle
	R -e "devtools::document()"

bundle: sass
	R -e "packer::bundle_prod()"

sass:
	Rscript dev/sass.R

bundle-dev: 
	R -e "packer::bundle_dev()"

run: bundle-dev
	Rscript test.R
