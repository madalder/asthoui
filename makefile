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

install: default
	R -e "devtools::install()"

run: sass bundle-dev
	Rscript test.R
