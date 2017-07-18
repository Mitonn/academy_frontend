<!DOCTYPE html>
<html>
    <head>
        <title>File form</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <form name="upload">
            <input type="file" name="filename">
            <input type="submit">
            <input type="button" name="clear" value="clear" disabled>
            <input type="button" name="cancel" value="cancel" disabled>
        </form>
        
        <p id="log"></p>
        
        <script src="ajax.js"></script>
    </body>
</html>