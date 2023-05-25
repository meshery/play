# Copyright Meshery Authors
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

include install/Makefile.core.mk
include install/Makefile.show-help.mk

setup-libs: site-setup

## Install site dependencies
setup: site-setup

site-setup: 
	cd site; npm install; cd ..

## Build and run site in development environment
site-dev:
	cd site; npm run start; cd ..

## Build site; generate static site
build:
	cd site; npm run build; cd ..

## Build and run site
site:
	cd site; npm start; cd ..

#-----------------------------------------------------------------------------
# Docker-based Builds
#-----------------------------------------------------------------------------

## Build and run site in a container
docker:
	docker run --name site -d --rm -p 4000:4000 -v `pwd`:"/srv/jekyll" jekyll/jekyll:4.0.0 bash -c "bundle install; jekyll serve --drafts --livereload"

.PHONY: setup-libs site-setup build docker site setup