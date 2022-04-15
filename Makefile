check:
	golangci-lint run

check-clean-cache:
	golangci-lint cache clean

protoc-setup:
	wget -P meshes https://raw.githubusercontent.com/layer5io/meshery/master/meshes/meshops.proto

proto:
	protoc -I meshes/ meshes/meshops.proto --go_out=plugins=grpc:./meshes/




setup-libs:
	cd site; npm install; cd ..

site-dev:
	cd site; npm run start; cd ..

build:
	cd site; npm run build; cd ..

docker:
	docker run --name site -d --rm -p 4000:4000 -v `pwd`:"/srv/jekyll" jekyll/jekyll:4.0.0 bash -c "bundle install; jekyll serve --drafts --livereload"
