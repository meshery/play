setup-libs: site-setup
site-setup: 
	cd site; npm install; cd ..

site-dev:
	cd site; npm run start; cd ..

build:
	cd site; npm run build; cd ..

site:
	cd site; npm start; cd..

docker:
	docker run --name site -d --rm -p 4000:4000 -v `pwd`:"/srv/jekyll" jekyll/jekyll:4.0.0 bash -c "bundle install; jekyll serve --drafts --livereload"

.PHONY: setup-libs site-setup build docker site