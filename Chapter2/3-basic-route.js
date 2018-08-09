const express = require('express')
const app = express()

app
    .route('/home')
    .get((request, response, nextHandler) => {
        response.type('text/html')
        response.write('<!DOCTYPE html>')
        nextHandler()
    })
    .get((request, response, nextHandler) => {
        response.end(`
	<html lang="en">
		<head>
		<meta charset="utf-8">
		<title>WebApp powered by ExpressJS</title>
		<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
		<style>
        .jumbotron{
            background-color:#2E2D88;
            color:black;
        }
        /* Adds borders for tabs */
        .tab-content {
            border-left: 1px solid #ddd;
            border-right: 1px solid #ddd;
            border-bottom: 1px solid #ddd;
            padding: 10px;
        }
        .nav-tabs {
            margin-bottom: 0;
        }
        </style>
		</head>
		<body role="application">
		    <div class="container">
		        <div class="jumbotron">
                    <form method="post" action="/home">
                        <input type="text" />
                        <button type="submit" class="btn-primary btn-lg">Send</button>
                    </form>
                </div>
			</div>
		</body>
	</html>
	`)
    })
    .post((request, response, nextHandler) => {
        response.send('Got it!')
    })

app.listen(
    1337,
    () => console.log('Web Server running on port 1337'),
)