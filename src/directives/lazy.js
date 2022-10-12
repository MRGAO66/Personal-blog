import eventBus from "@/eventBus";
import { debounce } from "@/utils"
import defaultGif from "@/assets/person.gif"

let imgs = [];

function setImage(img) {
    //先用默认图片
    img.dom.src = defaultGif;
    //处理图片
    //该图片是否再视口范围内
    const clientHeight = document.documentElement.clientHeight;
    const rect = img.dom.getBoundingClientRect();
    const height = rect.height || 150;
    if (rect.top >= -height && rect.top <= clientHeight) {
        //在视口范围内
        img.dom.src = img.src;
        // const tempImg = new Image();
        // tempImg.onload = function() {
        //     img.dom.src = img.src
        // }
        imgs = imgs.filter((i) => i !== img );
    }
}

//调用函数， 就可以知道设置那些图片加载
function setImages() {
    for (const img of imgs) {
        //处理该图片
        setImage(img);
    }
}
function handleScroll() {
    setImages();
}


eventBus.$on("mainScroll", debounce(handleScroll, 50));

export default {
    inserted(el, bindings) {
        imgs.push({
            dom: el,
            src: bindings.value,
        })
    },
    unbind(el) {
        imgs = imgs.filter( (img) => img.dom !== el );
    }
}