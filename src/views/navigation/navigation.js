function redirect(pageName) {
    var currentDirectory = window.location.pathname.split('/').slice(0, -1).join('/');
    console.log(currentDirectory);
    var aimDirectory =  currentDirectory.replace("navigation", pageName + "/" + pageName + ".html");
    console.log(aimDirectory);
    window.location.href = aimDirectory;
};