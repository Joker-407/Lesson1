let modules = [];
function loadScript(src, callback){
    if (!Array.isArray(src)){
        if ( !( src.substr( src.length - 3, src.length) == '.js') && !( src.subsrt(0,4) == 'http') ){
            alert('Ошибка');
            return;
        };
        if (modules.includes(src)){
            return;
        };
        modules.push(src);
    }else {
        for (let i = 0; i < src.length; i++) {
            if ( !( src[i].substr( src[i].length - 3, src[i].length) == '.js') && !( src.subsrt(0,4) == 'http') ){
                alert('Ошибка');
                return;
            };
            if (!modules.includes(src[i])){
                modules.push(src[i]);
            };        
        }
    };
    for (let i = 0; i < modules.length; i++){
        const script = document.createElement('script');
        script.src = modules[i]; 
        if (! (callback == undefined) ){
            script.onload = callback;
        }
        document.head.insertAdjacentElement('beforeend',script);
    }
    
}

loadScript(["./scripts/common.js", "./scripts/jquery.js"],()=>{
    log();
}); 