# 9/10 
## write development, testing, etc in local host then deploy.sh to production 

# 9/12
## The web communicates with the cloud (production environment) using HTTP runs on AWS
###  -> node.js runs the code in the cloud. 
## Atlas allows our application to store information in the production code

## caddy handles web authentication, routes to other services that are run, 

## Ports, port 443: use https connect site to web server
## AMI: binary file, snapshot, launch an instance of everything we need. 

# 9/17
## visit route 53 dashboard and copy ip address on console for my instance
## two records: one with a star and one without- the one without put in a new ip address on the value
## star record is the subdomain

## HTML is building a tree, DOM
### html object, has two children a head and body. the head has a title which has first html, the body has a child hello world.
## DOM is a data structure that contains all the data of the app defined with HTMl, CSS writes more into the tree
## javascript lets you modify tree structure that effects what in the browser

# 9/19
## index.html: 

<head>
    <meta cahrset='UTF-8'>
<head>

## give different nodes names like a class to locate in a tree
class = "text-reset"

## anchor tag to the url repo where the code lives

## about.html
## same as index but a different main. the picture is going to change every time. 

## scores.html
## same but has a table: 

## push on server to play live: 
## deployFiles.sh: run deploy script ./d* -k ../../Desktop.pem -h service.click -s simon

## HTML structure includesbody, header, footer main, section, aside, p, table, ol/ul and span. Body is where it starts and has three hildren, a header, main and footer. 
### The header contains a p (paragraph) with a span and a nav (navigation) containing multiple div (divisions)  of sub content
### The main includes multiple sections  that contain either an unordered list (ul) or a table. Main also contains an aside for content tahat doesn't fit the flow of the sections
### the footer has a content division with a single span