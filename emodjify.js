function emodjify (type = "title", speed = 100, status = ["💛", "💛", "💛"], emodji = ["💛", "🧡", "🖤"]) {
    const title = document.querySelector ("title");
    let i = 0, key = null;
    setInterval (function (){
        if (type ==="url") {
            window.location.hash = status.toString ().replace (/,/g, "")
        } else if (type === "title") {
            title.innerText = status.toString ().replace (/,/g, "");
        }
        key = status[i];
        for (let x = 0, m = emodji.length; x < m ; x++){
            if (key === emodji[x]){
                let num = x;
                num++;
                if (!(num < emodji.length)) num = 0;
                status[i] = emodji[num];
            }
        }
        if (i <= status.length) i++;
        else i = 0;
    }, speed);
}