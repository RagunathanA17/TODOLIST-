var mainStart = document.getElementById("main-start")
        var content = document.getElementById("content")
        var ui = document.querySelector(".main")
        var inputbox = document.getElementById("btn")
        var click = document.querySelector(".plus");
        var show = document.getElementById("show")

        mainStart.addEventListener("click", ()=>{
            ui.style.display = "block";
            mainStart.style.display = "none";
            content.style.display = "block"

        })

        function del(event){
            var boxvalue = inputbox.value;
            var h1 = document.createElement("h1")

            h1.textContent = boxvalue;
            h1.style.cursor = "pointer"

            show.append(h1);
            
            // console.log(event.target.textContent)

        }

        function rem(event){
            event.target.textContent = " "
        }
