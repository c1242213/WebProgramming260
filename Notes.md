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

## External Media:
### SVG render images

## 9/24
## CSS rules: Selector applies rule to something (rule ex; color: green) 
### style 1
<body>
<p style = "color:red">CSS</p>
</body>

### style 2
<head> <style>
    p{
        color: green
    }
</style>

### putting it in the head applies style to lots of things
## or use a link to another file:

### style 3
<head>

<link rel="stylesheet" href="df">

### best way: contains all the rules in another file

## Precedance:the first style takes precedence. span takes priority over rule, and rule takes priority over body (just like a tree)

## Selectors: 
### elements like dev, 
### ID like #root which will attribute to id = 'root'
### class like .highlight any element with the attribute class= highlight
### lists

## 9/26
## Media queries: ask the display about itself to make rules about it

@ media (oreintation: portrait)
div {
    transform: rotate(270deg);
}

### maybe use for positioning with my project for a picture that may have details

## floating: allows stuff to be rapped around it:

aside {
    float: right;
    padding: 3em;
    margin: .5em;
    border: black solid thin;
}

### padding is the space between the border of the object and the object inside. Margin is the space between the words outside of the border and the border itself

## Grid: display and use for scrolling: might want to use for the gallery
## Flex: move vertically or diagonally

body{
    display: flex;
    flex-direction: column;
    margin: 0;
    heigh: 100vh
}
### move in direction of column 

header{
    flex: 0 80 px;
    background: hsl(223, 57%, 38%)
}
### one of the childer (header) clarifying that it isn't going to flex from the 0. 

footer{
    flex: 0 30px
    background: hsl(180, 10%, 10%)
}

main{
    flex: 1;
    display: flex;
    flex-direction: row;
}
### maining the main flex: 1 without the level of flex, it will take priority of the flex and do all of the changing. Display: mains children will change in relation to eachother rather than main. 

## frameworks: ie packages like bootstrap, tailwind, etc we are going to use BOOTSTAP
<head>
    <link
    rel = "stylesheet"
    href= "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3">
    <head>

### use link

