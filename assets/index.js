var selector = document.querySelector(".selector_box");
selector.addEventListener('click', () => {
    if (selector.classList.contains("selector_open")){
        selector.classList.remove("selector_open")
    }else{
        selector.classList.add("selector_open")
    }
})

document.querySelectorAll(".date_input").forEach((element) => {
    element.addEventListener('click', () => {
        document.querySelector(".date").classList.remove("error_shown")
    })
})

var sex = "m"

document.querySelectorAll(".selector_option").forEach((option) => {
    option.addEventListener('click', () => {
        sex = option.id;
        document.querySelector(".selected_text").innerHTML = option.innerHTML;
    })
})

var upload = document.querySelector(".upload");

var imageInput = document.createElement("input");
imageInput.type = "file";
imageInput.accept = "image/*";

document.querySelectorAll(".input_holder").forEach((element) => {
    var input = element.querySelector(".input");
    input.addEventListener('click', () => {
        element.classList.remove("error_shown");
    });
});

upload.addEventListener('click', () => {
    imageInput.click();
    upload.classList.remove("error_shown");
});

function failUpload() {
    upload.classList.remove("upload_loading");
    upload.classList.remove("upload_loaded");
    upload.removeAttribute("selected");
    upload.classList.add("error_shown");
}

function useImage(dataUrl) {
    try {
        localStorage.setItem("userImage", dataUrl);
    } catch (err) {
        failUpload();
        return;
    }
    upload.classList.remove("error_shown");
    upload.setAttribute("selected", "local");
    upload.classList.add("upload_loaded");
    upload.classList.remove("upload_loading");
    upload.querySelector(".upload_uploaded").src = dataUrl;
}

function compressImage(file) {
    return new Promise((resolve, reject) => {
        var reader = new FileReader();
        reader.onerror = reject;
        reader.onload = function() {
            var img = new Image();
            img.onload = function() {
                var max = 900;
                var w = img.width;
                var h = img.height;
                if (w > max || h > max) {
                    if (w > h) {
                        h = Math.round(h * max / w);
                        w = max;
                    } else {
                        w = Math.round(w * max / h);
                        h = max;
                    }
                }
                var canvas = document.createElement("canvas");
                canvas.width = w;
                canvas.height = h;
                canvas.getContext("2d").drawImage(img, 0, 0, w, h);
                resolve(canvas.toDataURL("image/jpeg", 0.72));
            };
            img.onerror = reject;
            img.src = reader.result;
        };
        reader.readAsDataURL(file);
    });
}

imageInput.addEventListener('change', (event) => {
    var file = imageInput.files[0];
    if (!file) {
        return;
    }

    upload.classList.remove("upload_loaded");
    upload.classList.add("upload_loading");
    upload.removeAttribute("selected");

    compressImage(file).then(useImage).catch(failUpload);
});

document.querySelector(".go").addEventListener('click', () => {

    var empty = [];

    var params = new URLSearchParams();

    params.set("sex", sex)
    if (!upload.hasAttribute("selected") || !localStorage.getItem("userImage")){
        empty.push(upload);
        upload.classList.add("error_shown")
    }else{
        params.set("image", "local")
    }

    var birthday = "";
    var dateEmpty = false;
    document.querySelectorAll(".date_input").forEach((element) => {
        birthday = birthday + "." + element.value
        if (isEmpty(element.value)){
            dateEmpty = true;
        }
    })

    birthday = birthday.substring(1);

    if (dateEmpty){
        var dateElement = document.querySelector(".date");
        dateElement.classList.add("error_shown");
        empty.push(dateElement);
    }else{
        params.set("birthday", birthday)
    }

    document.querySelectorAll(".input_holder").forEach((element) => {

        var input = element.querySelector(".input");

        if (isEmpty(input.value)){
            empty.push(element);
            element.classList.add("error_shown");
        }else{
            params.set(input.id, input.value)
        }

    })

    if (empty.length != 0){
        empty[0].scrollIntoView();
    }else{

        forwardToId(params);
    }

});

function isEmpty(value){

    let pattern = /^\s*$/
    return pattern.test(value);

}

function forwardToId(params){

    location.href = "id.html?" + params

}

var guide = document.querySelector(".guide_holder");
guide.addEventListener('click', () => {

    if (guide.classList.contains("unfolded")){
        guide.classList.remove("unfolded");
    }else{
        guide.classList.add("unfolded");
    }

})

document.querySelectorAll(".input").forEach((input) => {
    input.value = localStorage.getItem(input.id) || "";
    input.addEventListener("input", () => {
        localStorage.setItem(input.id, input.value);
    });
});
