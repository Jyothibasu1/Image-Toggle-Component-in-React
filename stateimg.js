import { useState } from "react"

function Img1(){
    const [imgSrc, setImgSrc]=useState("https://cdn.pixabay.com/photo/2023/06/28/20/04/ai-generated-8095124_1280.png");
    const changeImg = () =>{
        if(imgSrc === "https://cdn.pixabay.com/photo/2023/06/28/20/04/ai-generated-8095124_1280.png"){
        setImgSrc("https://cdn.pixabay.com/photo/2023/09/02/18/26/ai-generated-8229399_1280.png");
        }else{
            setImgSrc("https://cdn.pixabay.com/photo/2023/06/28/20/04/ai-generated-8095124_1280.png");
        }
    }
    return(
       
        <><img src={imgSrc} style={{ width: "600px", height: "600px" }} /><br></br>
        <button onClick={changeImg}>Change Image</button>
        </>
        
    )
}
export default Img1