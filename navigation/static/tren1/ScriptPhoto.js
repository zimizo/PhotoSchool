   function Sbros(){

    ResultSlider = document.getElementById("InfoMResult");
    ImgPhoto = document.getElementById("VidCamera");
    ImgPhoto.width = "656";
    ImgPhoto.height = "446";

    ImgPhoto.src = "/static/tren1/Image/VidCamera.gif";
    ResultSlider.innerHTML =" ";

   }

   function Snapshot(){

    /*Получение значения ползунка ввеженого пользователем*/
    ResultSlider = document.getElementById("InfoMResult")
    ISO = document.getElementById("ISO").value;
    ShutSpeed = document.getElementById("ShutSpeed").value;
    Aperture = document.getElementById("Aperture").value;
    ImgPhoto = document.getElementById("VidCamera");
    ImgPhoto.width = "656";
    ImgPhoto.height = "446";


    MeaningISO = document.getElementById("MeaningISO");

     if (ISO == 1){

        ResultISO = "<b>ISO:</b> 100";
        

    }else if (ISO == 2){

        ResultISO = "<b>ISO:</b> 200";

    }else if (ISO == 3){

        ResultISO = "<b>ISO:</b> 400";

    }else if (ISO == 4){

        ResultISO = "<b>ISO:</b> 800";

    }else if (ISO == 5){

        ResultISO = "<b>ISO:</b> 1600";

    }else if (ISO == 6){

        ResultISO = "<b>ISO:</b> 3200";

    }else if (ISO == 7){

        ResultISO = "<b>ISO:</b> 6400";

    }else if (ISO == 8){

        ResultISO = "<b>ISO:</b> 12800";

    }else if (ISO == 9){

        ResultISO = "<b>ISO:</b> 25600";
    }

    if (ShutSpeed == 1){

       ResultShutSpeed = "<b>Выдержка:</b> 1 сек";

    }else if (ShutSpeed == 2){

        ResultShutSpeed = "<b>Выдержка:</b>1/2 сек";

    }else if (ShutSpeed == 3){

        ResultShutSpeed = "<b>Выдержка:</b> 1/4 сек";

    }else if (ShutSpeed == 4){

        ResultShutSpeed = "<b>Выдержка:</b> 1/8 сек";

    }else if (ShutSpeed == 5){

        ResultShutSpeed = "<b>Выдержка:</b> 1/15 сек";

    }else if (ShutSpeed == 6){

        ResultShutSpeed = "<b>Выдержка:</b> 1/30сек";

    }else if (ShutSpeed == 7){

        ResultShutSpeed = "<b>Выдержка:</b> 1/60 сек";

    }else if (ShutSpeed == 8){

        ResultShutSpeed = "<b>Выдержка:</b> 1/125 сек";

    }else if (ShutSpeed == 9){

        ResultShutSpeed = "<b>Выдержка:</b> 1/250 сек";

    }else if (ShutSpeed == 10){

        ResultShutSpeed = "<b>Выдержка:</b> 1/500сек";

    }else if (ShutSpeed == 11){

        ResultShutSpeed = "<b>Выдержка:</b> 1/1000 сек";

    }else if (ShutSpeed == 12){

        ResultShutSpeed = "<b>Выдержка:</b> 1/2000 сек";

    }else if (ShutSpeed == 13){

        ResultShutSpeed = "<b>Выдержка:</b> 1/4000 сек";
    }

    if (Aperture == 1){

        ResultAperture = "<b>Диафрагма:</b> 2.8";

    }else if (Aperture == 2){

        ResultAperture = "<b>Диафрагма:</b> 4";

    }else if (Aperture == 3){

        ResultAperture = "<b>Диафрагма:</b> 5.6";

    }else if (Aperture == 4){

        ResultAperture = "<b>Диафрагма:</b> 8";

    }else if (Aperture == 5){

        ResultAperture = "<b>Диафрагма:</b> 11";

    }else if (Aperture == 6){

        ResultAperture = "<b>Диафрагма:</b> 16";

    }else if (Aperture == 7){

        ResultAperture = "<b>Диафрагма:</b> 22";

    }

    ResultSlider.innerHTML = ResultISO + ";" + "  " + ResultShutSpeed + ";" + "  " + ResultAperture + ";";

    /*Блок изменения Aperture*/
    if ((ISO == 1)&&(ShutSpeed == 1)&&(Aperture == 1)){

		ImgPhoto.src = "/static/tren1/Результат/Apeture/Apeture_2_8.jpg";
       
    }else if ((ISO == 1)&&(ShutSpeed == 1)&&(Aperture == 2)){

		ImgPhoto.src = "/static/tren1/Результат/Apeture/Apeture_4.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 1)&&(Aperture == 3)){

		ImgPhoto.src = "/static/tren1/Результат/Apeture/Apeture_5_6.jpg";

    }else if ((ISO ==1)&&(ShutSpeed == 1)&&(Aperture == 4)){

		ImgPhoto.src = "/static/tren1/Результат/Apeture/Apeture_8.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 1)&&(Aperture == 5)){

		ImgPhoto.src = "/static/tren1/Результат/Apeture/Apeture_11.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 1)&&(Aperture == 6)){

		ImgPhoto.src = "/static/tren1/Результат/Apeture/Apeture_16.jpg";
    
    }else if ((ISO == 1)&&(ShutSpeed == 1)&&(Aperture == 7)){

    /*Блок изменения ShutSpeed & Apetue*/
        ImgPhoto.src = "/static/tren1/Результат/Apeture/Apeture_22.jpg";
    
    }else if ((ISO == 1)&&(ShutSpeed == 2)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_2/Apeture_4.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 2)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_2/Apeture_5_6.jpg";

    }else if ((ISO ==1)&&(ShutSpeed == 2)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_2/Apeture_8.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 2)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_2/Apeture_11.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 2)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_2/Apeture_16.jpg";
    
    }else if ((ISO == 1)&&(ShutSpeed == 2)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_2/Apeture_22.jpg";
    }else if ((ISO == 1)&&(ShutSpeed == 3)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_4/Apeture_4.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 3)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_4/Apeture_5_6.jpg";

    }else if ((ISO ==1)&&(ShutSpeed == 3)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_4/Apeture_8.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 3)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_4/Apeture_11.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 3)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_4/Apeture_16.jpg";
    
    }else if ((ISO == 1)&&(ShutSpeed == 3)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_4/Apeture_22.jpg";
    }else if ((ISO == 1)&&(ShutSpeed == 4)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_8/Apeture_4.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 4)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_8/Apeture_5_6.jpg";

    }else if ((ISO ==1)&&(ShutSpeed == 4)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_8/Apeture_8.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 4)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_8/Apeture_11.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 4)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_8/Apeture_16.jpg";
    
    }else if ((ISO == 1)&&(ShutSpeed == 4)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_8/Apeture_22.jpg";
    }else if ((ISO == 1)&&(ShutSpeed == 5)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_15/Apeture_4.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 5)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_15/Apeture_5_6.jpg";

    }else if ((ISO ==1)&&(ShutSpeed == 5)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_15/Apeture_8.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 5)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_15/Apeture_11.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 5)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_15/Apeture_16.jpg";
    
    }else if ((ISO == 1)&&(ShutSpeed == 5)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_15/Apeture_22.jpg";
    }else if ((ISO == 1)&&(ShutSpeed == 6)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_30/Apeture_4.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 6)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_30/Apeture_5_6.jpg";

    }else if ((ISO ==1)&&(ShutSpeed == 6)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_30/Apeture_8.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 6)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_30/Apeture_11.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 6)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_30/Apeture_16.jpg";
    
    }else if ((ISO == 1)&&(ShutSpeed == 6)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_30/Apeture_22.jpg";
    }else if ((ISO == 1)&&(ShutSpeed == 7)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_60/Apeture_4.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 7)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_60/Apeture_5_6.jpg";

    }else if ((ISO ==1)&&(ShutSpeed == 7)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_60/Apeture_8.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 7)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_60/Apeture_11.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 7)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_60/Apeture_16.jpg";
    
    }else if ((ISO == 1)&&(ShutSpeed == 7)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_60/Apeture_22.jpg";
    }else if ((ISO == 1)&&(ShutSpeed == 8)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_125/Apeture_4.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 8)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_125/Apeture_5_6.jpg";

    }else if ((ISO ==1)&&(ShutSpeed == 8)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_125/Apeture_8.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 8)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_125/Apeture_11.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 8)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_125/Apeture_16.jpg";
    
    }else if ((ISO == 1)&&(ShutSpeed == 8)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_125/Apeture_22.jpg";
    }else if ((ISO == 1)&&(ShutSpeed == 9)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_250/Apeture_4.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 9)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_250/Apeture_5_6.jpg";

    }else if ((ISO ==1)&&(ShutSpeed == 9)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_250/Apeture_8.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 9)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_250/Apeture_11.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 9)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_250/Apeture_16.jpg";
    
    }else if ((ISO == 1)&&(ShutSpeed == 9)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_250/Apeture_22.jpg";
    }else if ((ISO == 1)&&(ShutSpeed == 10)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_500/Apeture_4.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 10)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_500/Apeture_5_6.jpg";

    }else if ((ISO ==1)&&(ShutSpeed == 10)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_500/Apeture_8.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 10)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_500/Apeture_11.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 10)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_500/Apeture_16.jpg";
    
    }else if ((ISO == 1)&&(ShutSpeed == 10)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_500/Apeture_22.jpg";
    }else if ((ISO == 1)&&(ShutSpeed == 11)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_1000/Apeture_4.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 11)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_1000/Apeture_5_6.jpg";

    }else if ((ISO ==1)&&(ShutSpeed == 11)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_1000/Apeture_8.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 11)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_1000/Apeture_11.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 11)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_1000/Apeture_16.jpg";
    
    }else if ((ISO == 1)&&(ShutSpeed == 11)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_1000/Apeture_22.jpg";
    }else if ((ISO == 1)&&(ShutSpeed == 12)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_2000/Apeture_4.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 12)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_2000/Apeture_5_6.jpg";

    }else if ((ISO ==1)&&(ShutSpeed == 12)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_2000/Apeture_8.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 12)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_2000/Apeture_11.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 12)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_2000/Apeture_16.jpg";
    
    }else if ((ISO == 1)&&(ShutSpeed == 12)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_2000/Apeture_22.jpg";
    }else if ((ISO == 1)&&(ShutSpeed == 13)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_4000/Apeture_4.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 13)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_4000/Apeture_5_6.jpg";

    }else if ((ISO ==1)&&(ShutSpeed == 13)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_4000/Apeture_5_6.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 13)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_4000/Apeture_5_6.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 13)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_4000/Apeture_5_6.jpg";
    
    }else if ((ISO == 1)&&(ShutSpeed == 13)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_4000/Apeture_5_6.jpg";
    }
    /*Изменение ISO*/else if ((ISO == 2)&&(ShutSpeed == 1)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_200/Apeture_4.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 1)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_200/Apeture_5_6.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 1)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_200/Apeture_8.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 1)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_200/Apeture_11.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 1)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_200/Apeture_16.jpg";
    
    }else if ((ISO == 2)&&(ShutSpeed == 1)&&(Aperture == 7)){

    
        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_200/Apeture_22.jpg";
    
    }else if ((ISO == 3)&&(ShutSpeed == 1)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_400/Apeture_4.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 1)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_400/Apeture_5_6.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 1)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_400/Apeture_8.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 1)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_400/Apeture_11.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 1)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_400/Apeture_16.jpg";
    
    }else if ((ISO == 3)&&(ShutSpeed == 1)&&(Aperture == 7)){

    
        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_400/Apeture_22.jpg";
    
    }else if ((ISO == 4)&&(ShutSpeed == 1)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_800/Apeture_4.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 1)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_800/Apeture_5_6.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 1)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_800/Apeture_8.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 1)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_800/Apeture_11.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 1)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_800/Apeture_16.jpg";
    
    }else if ((ISO == 4)&&(ShutSpeed == 1)&&(Aperture == 7)){

    
        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_800/Apeture_22.jpg";
    
    }else if ((ISO == 5)&&(ShutSpeed == 1)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_1600/Apeture_4.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 1)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_1600/Apeture_5_6.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 1)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_1600/Apeture_8.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 1)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_1600/Apeture_11.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 1)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_1600/Apeture_16.jpg";
    
    }else if ((ISO == 5)&&(ShutSpeed == 1)&&(Aperture == 7)){

    
        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_1600/Apeture_22.jpg";
    
    }else if ((ISO == 6)&&(ShutSpeed == 1)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_3200/Apeture_4.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 1)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_3200/Apeture_5_6.jpg";

    }else if ((ISO ==1)&&(ShutSpeed == 1)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_3200/Apeture_8.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 1)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_3200/Apeture_11.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 1)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_3200/Apeture_16.jpg";
    
    }else if ((ISO == 6)&&(ShutSpeed == 1)&&(Aperture == 7)){

    
        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_3200/Apeture_22.jpg";
    
    }else if ((ISO == 7)&&(ShutSpeed == 1)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_6400/Apeture_4.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 1)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_6400/Apeture_5_6.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 1)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_6400/Apeture_8.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 1)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_6400/Apeture_11.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 1)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_6400/Apeture_16.jpg";
    
    }else if ((ISO == 7)&&(ShutSpeed == 1)&&(Aperture == 7)){

    
        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_6400/Apeture_22.jpg";
    
    }else if ((ISO == 8)&&(ShutSpeed == 1)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_12800/Apeture_4.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 1)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_12800/Apeture_4.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 1)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_12800/Apeture_8.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 1)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_12800/Apeture_11.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 1)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_12800/Apeture_16.jpg";
    
    }else if ((ISO == 8)&&(ShutSpeed == 1)&&(Aperture == 7)){

    
        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_12800/Apeture_22.jpg";
    
    }else if ((ISO == 9)&&(ShutSpeed == 1)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_24600/Apeture_11.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 1)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_24600/Apeture_11.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 1)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_24600/Apeture_1.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 1)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_24600/Apeture_11.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 1)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_24600/Apeture_16.jpg";
    
    }else if ((ISO == 9)&&(ShutSpeed == 1)&&(Aperture == 7)){

    
        ImgPhoto.src = "/static/tren1/Результат/Apeture/ISO_24600/Apeture_22.jpg";
    
    }   /*Изменение выдержки*/
    else if ((ISO == 1)&&(ShutSpeed == 2)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ShuterSpeed_1.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 3)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ShuterSpeed_2.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 4)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ShuterSpeed_4.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 5)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ShuterSpeed_8.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 6)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ShuterSpeed_30.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 7)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ShuterSpeed_60.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 8)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ShuterSpeed_125.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 9)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ShuterSpeed_250.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 10)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ShuterSpeed_500.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 11)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ShuterSpeed_1000.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 12)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ShuterSpeed_2000.jpg";

    }else if ((ISO == 1)&&(ShutSpeed == 13)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ShuterSpeed_4000.jpg";

    }
    /*Изенение iso*/
    /*200*/
    else if ((ISO == 2)&&(ShutSpeed == 2)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_200/ShuterSpeed_1.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 3)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_200/ShuterSpeed_2.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 4)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_200/ShuterSpeed_4.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 5)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_200/ShuterSpeed_8.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 6)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_200/ShuterSpeed_30.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 7)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_200/ShuterSpeed_60.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 8)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_200/ShuterSpeed_125.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 9)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_200/ShuterSpeed_250.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 10)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_200/ShuterSpeed_500.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 11)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_200/ShuterSpeed_1000.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 12)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_200/ShuterSpeed_2000.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 13)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_200/ShuterSpeed_4000.jpg";

    }
    /*400*/
    else if ((ISO == 3)&&(ShutSpeed == 2)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_400/ShuterSpeed_1.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 3)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_400/ShuterSpeed_2.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 4)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_400/ShuterSpeed_4.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 5)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_400/ShuterSpeed_8.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 6)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_400/ShuterSpeed_30.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 7)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_400/ShuterSpeed_60.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 8)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_400/ShuterSpeed_125.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 9)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_400/ShuterSpeed_250.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 10)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_400/ShuterSpeed_500.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 11)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_400/ShuterSpeed_1000.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 12)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_400/ShuterSpeed_2000.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 13)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_400/ShuterSpeed_4000.jpg";

    }
    /*800*/
    else if ((ISO == 4)&&(ShutSpeed == 2)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_800/ShuterSpeed_1.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 3)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_800/ShuterSpeed_2.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 4)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_800/ShuterSpeed_4.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 5)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_800/ShuterSpeed_8.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 6)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_800/ShuterSpeed_30.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 7)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_800/ShuterSpeed_60.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 8)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_800/ShuterSpeed_125.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 9)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_800/ShuterSpeed_250.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 10)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_800/ShuterSpeed_500.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 11)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_800/ShuterSpeed_1000.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 12)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_800/ShuterSpeed_2000.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 13)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_800/ShuterSpeed_4000.jpg";

    }
    /*1600*/
    else if ((ISO == 5)&&(ShutSpeed == 2)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_1600/ShuterSpeed_1.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 3)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_1600/ShuterSpeed_2.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 4)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_1600/ShuterSpeed_4.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 5)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_1600/ShuterSpeed_8.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 6)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_1600/ShuterSpeed_30.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 7)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_1600/ShuterSpeed_60.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 8)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_1600/ShuterSpeed_125.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 9)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_1600/ShuterSpeed_250.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 10)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_1600/ShuterSpeed_500.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 11)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_1600/ShuterSpeed_1000.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 12)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_1600/ShuterSpeed_2000.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 13)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_1600/ShuterSpeed_4000.jpg";

    }
    /*3200*/
    else if ((ISO == 6)&&(ShutSpeed == 2)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_3200/ShuterSpeed_1.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 3)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_3200/ShuterSpeed_2.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 4)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_3200/ShuterSpeed_4.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 5)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_3200/ShuterSpeed_8.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 6)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_3200/ShuterSpeed_30.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 7)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_3200/ShuterSpeed_60.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 8)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_3200/ShuterSpeed_125.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 9)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_3200/ShuterSpeed_250.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 10)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_3200/ShuterSpeed_500.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 11)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_3200/ShuterSpeed_1000.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 12)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_3200/ShuterSpeed_2000.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 13)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_3200/ShuterSpeed_4000.jpg";

    }
    /*6400*/
    else if ((ISO == 7)&&(ShutSpeed == 2)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_6400/ShuterSpeed_1.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 3)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_6400/ShuterSpeed_2.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 4)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_6400/ShuterSpeed_4.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 5)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_6400/ShuterSpeed_8.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 6)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_6400/ShuterSpeed_30.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 7)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_6400/ShuterSpeed_60.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 8)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_6400/ShuterSpeed_125.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 9)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_6400/ShuterSpeed_250.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 10)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_6400/ShuterSpeed_500.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 11)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_6400/ShuterSpeed_1000.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 12)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_6400/ShuterSpeed_2000.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 13)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_6400/ShuterSpeed_4000.jpg";

    }
    /*12800*/
    else if ((ISO == 8)&&(ShutSpeed == 2)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_12800/ShuterSpeed_1.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 3)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_12800/ShuterSpeed_2.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 4)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_12800/ShuterSpeed_4.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 5)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_12800/ShuterSpeed_8.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 6)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_12800/ShuterSpeed_30.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 7)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_12800/ShuterSpeed_60.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 8)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_12800/ShuterSpeed_125.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 9)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_12800/ShuterSpeed_250.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 10)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_12800/ShuterSpeed_500.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 11)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_12800/ShuterSpeed_1000.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 12)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_12800/ShuterSpeed_2000.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 13)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_12800/ShuterSpeed_4000.jpg";

    }
    /*24600*/
    else if ((ISO == 9)&&(ShutSpeed == 2)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_24600/ShuterSpeed_1.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 3)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_24600/ShuterSpeed_2.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 4)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_24600/ShuterSpeed_4.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 5)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_24600/ShuterSpeed_8.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 6)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_24600/ShuterSpeed_30.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 7)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_24600/ShuterSpeed_60.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 8)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_24600/ShuterSpeed_125.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 9)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_24600/ShuterSpeed_250.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 10)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_24600/ShuterSpeed_500.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 11)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_24600/ShuterSpeed_1000.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 12)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_24600/ShuterSpeed_2000.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 13)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/ISO_24600/ShuterSpeed_4000.jpg";

    }/*4*/
    else if ((ISO == 2)&&(ShutSpeed == 2)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_200/ShuterSpeed_1.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 3)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_200/ShuterSpeed_2.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 4)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_200/ShuterSpeed_4.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 5)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_200/ShuterSpeed_8.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 6)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_200/ShuterSpeed_30.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 7)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_200/ShuterSpeed_60.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 8)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_200/ShuterSpeed_125.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 9)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_200/ShuterSpeed_250.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 10)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_200/ShuterSpeed_500.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 11)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_200/ShuterSpeed_1000.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 12)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_200/ShuterSpeed_2000.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 13)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_200/ShuterSpeed_4000.jpg";

    }
    /*400*/
    else if ((ISO == 3)&&(ShutSpeed == 2)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_400/ShuterSpeed_1.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 3)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_400/ShuterSpeed_2.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 4)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_400/ShuterSpeed_4.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 5)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_400/ShuterSpeed_8.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 6)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_400/ShuterSpeed_30.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 7)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_400/ShuterSpeed_60.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 8)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_400/ShuterSpeed_125.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 9)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_400/ShuterSpeed_250.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 10)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_400/ShuterSpeed_500.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 11)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_400/ShuterSpeed_1000.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 12)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_400/ShuterSpeed_2000.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 13)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_400/ShuterSpeed_4000.jpg";

    }
    /*800*/
    else if ((ISO == 4)&&(ShutSpeed == 2)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_800/ShuterSpeed_1.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 3)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_800/ShuterSpeed_2.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 4)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_800/ShuterSpeed_4.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 5)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_800/ShuterSpeed_8.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 6)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_800/ShuterSpeed_30.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 7)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_800/ShuterSpeed_60.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 8)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_800/ShuterSpeed_125.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 9)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_800/ShuterSpeed_250.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 10)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_800/ShuterSpeed_500.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 11)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_800/ShuterSpeed_1000.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 12)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_800/ShuterSpeed_2000.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 13)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_800/ShuterSpeed_4000.jpg";

    }
    /*1600*/
    else if ((ISO == 5)&&(ShutSpeed == 2)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_1600/ShuterSpeed_1.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 3)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_1600/ShuterSpeed_2.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 4)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_1600/ShuterSpeed_4.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 5)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_1600/ShuterSpeed_8.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 6)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_1600/ShuterSpeed_30.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 7)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_1600/ShuterSpeed_60.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 8)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_1600/ShuterSpeed_125.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 9)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_1600/ShuterSpeed_250.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 10)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_1600/ShuterSpeed_500.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 11)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_1600/ShuterSpeed_1000.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 12)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_1600/ShuterSpeed_2000.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 13)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_1600/ShuterSpeed_4000.jpg";

    }
    /*3200*/
    else if ((ISO == 6)&&(ShutSpeed == 2)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_3200/ShuterSpeed_1.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 3)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_3200/ShuterSpeed_2.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 4)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_3200/ShuterSpeed_4.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 5)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_3200/ShuterSpeed_8.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 6)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_3200/ShuterSpeed_30.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 7)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_3200/ShuterSpeed_60.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 8)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_3200/ShuterSpeed_125.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 9)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_3200/ShuterSpeed_250.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 10)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_3200/ShuterSpeed_500.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 11)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_3200/ShuterSpeed_1000.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 12)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_3200/ShuterSpeed_2000.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 13)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_3200/ShuterSpeed_4000.jpg";

    }
    /*6400*/
    else if ((ISO == 7)&&(ShutSpeed == 2)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_6400/ShuterSpeed_1.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 3)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_6400/ShuterSpeed_2.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 4)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_6400/ShuterSpeed_4.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 5)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_6400/ShuterSpeed_8.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 6)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_6400/ShuterSpeed_30.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 7)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_6400/ShuterSpeed_60.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 8)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_6400/ShuterSpeed_125.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 9)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_6400/ShuterSpeed_250.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 10)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_6400/ShuterSpeed_500.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 11)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_6400/ShuterSpeed_1000.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 12)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_6400/ShuterSpeed_2000.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 13)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_6400/ShuterSpeed_4000.jpg";

    }
    /*12800*/
    else if ((ISO == 8)&&(ShutSpeed == 2)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_12800/ShuterSpeed_1.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 3)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_12800/ShuterSpeed_2.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 4)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_12800/ShuterSpeed_4.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 5)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_12800/ShuterSpeed_8.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 6)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_12800/ShuterSpeed_30.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 7)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_12800/ShuterSpeed_60.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 8)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_12800/ShuterSpeed_125.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 9)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_12800/ShuterSpeed_250.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 10)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_12800/ShuterSpeed_500.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 11)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_12800/ShuterSpeed_1000.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 12)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_12800/ShuterSpeed_2000.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 13)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_12800/ShuterSpeed_4000.jpg";

    }
    /*24600*/
    else if ((ISO == 9)&&(ShutSpeed == 2)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_24600/ShuterSpeed_1.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 3)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_24600/ShuterSpeed_2.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 4)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_24600/ShuterSpeed_4.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 5)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_24600/ShuterSpeed_8.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 6)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_24600/ShuterSpeed_30.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 7)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_24600/ShuterSpeed_60.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 8)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_24600/ShuterSpeed_125.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 9)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_24600/ShuterSpeed_250.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 10)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_24600/ShuterSpeed_500.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 11)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_24600/ShuterSpeed_1000.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 12)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_24600/ShuterSpeed_2000.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 13)&&(Aperture == 2)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_4/ISO_24600/ShuterSpeed_4000.jpg";

    }/*5_6*/
    else if ((ISO == 2)&&(ShutSpeed == 2)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_200/ShuterSpeed_1.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 3)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_200/ShuterSpeed_2.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 4)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_200/ShuterSpeed_4.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 5)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_200/ShuterSpeed_8.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 6)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_200/ShuterSpeed_30.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 7)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_200/ShuterSpeed_60.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 8)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_200/ShuterSpeed_125.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 9)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_200/ShuterSpeed_250.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 10)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_200/ShuterSpeed_500.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 11)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_200/ShuterSpeed_1000.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 12)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_200/ShuterSpeed_2000.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 13)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_200/ShuterSpeed_4000.jpg";

    }
    /*400*/
    else if ((ISO == 3)&&(ShutSpeed == 2)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_400/ShuterSpeed_1.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 3)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_400/ShuterSpeed_2.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 4)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_400/ShuterSpeed_4.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 5)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_400/ShuterSpeed_8.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 6)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_400/ShuterSpeed_30.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 7)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_400/ShuterSpeed_60.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 8)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_400/ShuterSpeed_125.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 9)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_400/ShuterSpeed_250.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 10)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_400/ShuterSpeed_500.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 11)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_400/ShuterSpeed_1000.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 12)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_400/ShuterSpeed_2000.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 13)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_400/ShuterSpeed_4000.jpg";

    }
    /*800*/
    else if ((ISO == 4)&&(ShutSpeed == 2)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_800/ShuterSpeed_1.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 3)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_800/ShuterSpeed_2.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 4)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_800/ShuterSpeed_4.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 5)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_800/ShuterSpeed_8.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 6)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_800/ShuterSpeed_30.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 7)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_800/ShuterSpeed_60.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 8)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_800/ShuterSpeed_125.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 9)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_800/ShuterSpeed_250.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 10)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_800/ShuterSpeed_500.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 11)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_800/ShuterSpeed_1000.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 12)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_800/ShuterSpeed_2000.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 13)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_800/ShuterSpeed_4000.jpg";

    }
    /*1600*/
    else if ((ISO == 5)&&(ShutSpeed == 2)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_1600/ShuterSpeed_1.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 3)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_1600/ShuterSpeed_2.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 4)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_1600/ShuterSpeed_4.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 5)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_1600/ShuterSpeed_8.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 6)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_1600/ShuterSpeed_30.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 7)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_1600/ShuterSpeed_60.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 8)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_1600/ShuterSpeed_125.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 9)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_1600/ShuterSpeed_250.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 10)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_1600/ShuterSpeed_500.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 11)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_1600/ShuterSpeed_1000.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 12)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_1600/ShuterSpeed_2000.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 13)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_1600/ShuterSpeed_4000.jpg";

    }
    /*3200*/
    else if ((ISO == 6)&&(ShutSpeed == 2)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_3200/ShuterSpeed_1.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 3)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_3200/ShuterSpeed_2.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 4)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_3200/ShuterSpeed_4.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 5)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_3200/ShuterSpeed_8.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 6)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_3200/ShuterSpeed_30.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 7)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_3200/ShuterSpeed_60.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 8)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_3200/ShuterSpeed_125.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 9)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_3200/ShuterSpeed_250.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 10)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_3200/ShuterSpeed_500.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 11)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_3200/ShuterSpeed_1000.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 12)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_3200/ShuterSpeed_2000.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 13)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_3200/ShuterSpeed_4000.jpg";

    }
    /*6400*/
    else if ((ISO == 7)&&(ShutSpeed == 2)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_6400/ShuterSpeed_1.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 3)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_6400/ShuterSpeed_2.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 4)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_6400/ShuterSpeed_4.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 5)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_6400/ShuterSpeed_8.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 6)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_6400/ShuterSpeed_30.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 7)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_6400/ShuterSpeed_60.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 8)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_6400/ShuterSpeed_125.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 9)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_6400/ShuterSpeed_250.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 10)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_6400/ShuterSpeed_500.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 11)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_6400/ShuterSpeed_1000.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 12)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_6400/ShuterSpeed_2000.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 13)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_6400/ShuterSpeed_4000.jpg";

    }
    /*12800*/
    else if ((ISO == 8)&&(ShutSpeed == 2)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_12800/ShuterSpeed_1.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 3)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_12800/ShuterSpeed_2.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 4)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_12800/ShuterSpeed_4.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 5)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_12800/ShuterSpeed_8.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 6)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_12800/ShuterSpeed_30.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 7)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_12800/ShuterSpeed_60.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 8)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_12800/ShuterSpeed_125.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 9)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_12800/ShuterSpeed_250.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 10)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_12800/ShuterSpeed_500.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 11)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_12800/ShuterSpeed_1000.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 12)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_12800/ShuterSpeed_2000.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 13)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_12800/ShuterSpeed_4000.jpg";

    }
    /*24600*/
    else if ((ISO == 9)&&(ShutSpeed == 2)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_24600/ShuterSpeed_1.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 3)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_24600/ShuterSpeed_2.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 4)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_24600/ShuterSpeed_4.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 5)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_24600/ShuterSpeed_8.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 6)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_24600/ShuterSpeed_30.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 7)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_24600/ShuterSpeed_60.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 8)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_24600/ShuterSpeed_125.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 9)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_24600/ShuterSpeed_250.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 10)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_24600/ShuterSpeed_500.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 11)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_24600/ShuterSpeed_1000.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 12)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_24600/ShuterSpeed_2000.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 13)&&(Aperture == 3)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_5_6/ISO_24600/ShuterSpeed_4000.jpg";

    }/*8*/
    else if ((ISO == 2)&&(ShutSpeed == 2)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_200/ShuterSpeed_1.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 3)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_200/ShuterSpeed_2.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 4)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_200/ShuterSpeed_4.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 5)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_200/ShuterSpeed_8.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 6)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_200/ShuterSpeed_30.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 7)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_200/ShuterSpeed_60.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 8)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_200/ShuterSpeed_125.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 9)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_200/ShuterSpeed_250.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 10)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_200/ShuterSpeed_500.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 11)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_200/ShuterSpeed_1000.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 12)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_200/ShuterSpeed_2000.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 13)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_200/ShuterSpeed_4000.jpg";

    }
    /*400*/
    else if ((ISO == 3)&&(ShutSpeed == 2)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_400/ShuterSpeed_1.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 3)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_400/ShuterSpeed_2.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 4)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_400/ShuterSpeed_4.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 5)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_400/ShuterSpeed_8.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 6)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_400/ShuterSpeed_30.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 7)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_400/ShuterSpeed_60.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 8)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_400/ShuterSpeed_125.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 9)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_400/ShuterSpeed_250.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 10)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_400/ShuterSpeed_500.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 11)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_400/ShuterSpeed_1000.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 12)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_400/ShuterSpeed_2000.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 13)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_400/ShuterSpeed_4000.jpg";

    }
    /*800*/
    else if ((ISO == 4)&&(ShutSpeed == 2)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_800/ShuterSpeed_1.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 3)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_800/ShuterSpeed_2.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 4)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_800/ShuterSpeed_4.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 5)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_800/ShuterSpeed_8.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 6)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_800/ShuterSpeed_30.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 7)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_800/ShuterSpeed_60.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 8)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_800/ShuterSpeed_125.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 9)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_800/ShuterSpeed_250.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 10)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_800/ShuterSpeed_500.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 11)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_800/ShuterSpeed_1000.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 12)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_800/ShuterSpeed_2000.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 13)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_800/ShuterSpeed_4000.jpg";

    }
    /*1600*/
    else if ((ISO == 5)&&(ShutSpeed == 2)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_1600/ShuterSpeed_1.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 3)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_1600/ShuterSpeed_2.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 4)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_1600/ShuterSpeed_4.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 5)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_1600/ShuterSpeed_8.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 6)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_1600/ShuterSpeed_30.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 7)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_1600/ShuterSpeed_60.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 8)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_1600/ShuterSpeed_125.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 9)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_1600/ShuterSpeed_250.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 10)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_1600/ShuterSpeed_500.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 11)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_1600/ShuterSpeed_1000.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 12)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_1600/ShuterSpeed_2000.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 13)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_1600/ShuterSpeed_4000.jpg";

    }
    /*3200*/
    else if ((ISO == 6)&&(ShutSpeed == 2)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_3200/ShuterSpeed_1.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 3)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_3200/ShuterSpeed_2.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 4)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_3200/ShuterSpeed_4.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 5)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_3200/ShuterSpeed_8.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 6)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_3200/ShuterSpeed_30.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 7)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_3200/ShuterSpeed_60.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 8)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_3200/ShuterSpeed_125.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 9)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_3200/ShuterSpeed_250.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 10)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_3200/ShuterSpeed_500.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 11)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_3200/ShuterSpeed_1000.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 12)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_3200/ShuterSpeed_2000.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 13)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_3200/ShuterSpeed_4000.jpg";

    }
    /*6400*/
    else if ((ISO == 7)&&(ShutSpeed == 2)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_6400/ShuterSpeed_1.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 3)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_6400/ShuterSpeed_2.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 4)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_6400/ShuterSpeed_4.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 5)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_6400/ShuterSpeed_8.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 6)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_6400/ShuterSpeed_30.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 7)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_6400/ShuterSpeed_60.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 8)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_6400/ShuterSpeed_125.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 9)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_6400/ShuterSpeed_250.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 10)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_6400/ShuterSpeed_500.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 11)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_6400/ShuterSpeed_1000.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 12)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_6400/ShuterSpeed_2000.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 13)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_6400/ShuterSpeed_4000.jpg";

    }
    /*12800*/
    else if ((ISO == 8)&&(ShutSpeed == 2)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_12800/ShuterSpeed_1.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 3)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_12800/ShuterSpeed_2.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 4)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_12800/ShuterSpeed_4.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 5)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_12800/ShuterSpeed_8.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 6)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_12800/ShuterSpeed_30.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 7)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_12800/ShuterSpeed_60.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 8)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_12800/ShuterSpeed_125.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 9)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_12800/ShuterSpeed_250.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 10)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_12800/ShuterSpeed_500.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 11)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_12800/ShuterSpeed_1000.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 12)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_12800/ShuterSpeed_2000.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 13)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_12800/ShuterSpeed_4000.jpg";

    }
    /*24600*/
    else if ((ISO == 9)&&(ShutSpeed == 2)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_24600/ShuterSpeed_1.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 3)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_24600/ShuterSpeed_2.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 4)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_24600/ShuterSpeed_4.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 5)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_24600/ShuterSpeed_8.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 6)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_24600/ShuterSpeed_30.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 7)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_24600/ShuterSpeed_60.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 8)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_24600/ShuterSpeed_125.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 9)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_24600/ShuterSpeed_250.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 10)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_24600/ShuterSpeed_500.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 11)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_24600/ShuterSpeed_1000.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 12)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_24600/ShuterSpeed_2000.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 13)&&(Aperture == 4)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_8/ISO_24600/ShuterSpeed_4000.jpg";

    }/*11*/
    else if ((ISO == 2)&&(ShutSpeed == 2)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_200/ShuterSpeed_1.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 3)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_200/ShuterSpeed_2.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 4)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_200/ShuterSpeed_4.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 5)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_200/ShuterSpeed_8.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 6)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_200/ShuterSpeed_30.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 7)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_200/ShuterSpeed_60.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 8)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_200/ShuterSpeed_125.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 9)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_200/ShuterSpeed_250.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 10)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_200/ShuterSpeed_500.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 11)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_200/ShuterSpeed_1000.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 12)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_200/ShuterSpeed_2000.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 13)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_200/ShuterSpeed_4000.jpg";

    }
    /*400*/
    else if ((ISO == 3)&&(ShutSpeed == 2)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_400/ShuterSpeed_1.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 3)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_400/ShuterSpeed_2.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 4)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_400/ShuterSpeed_4.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 5)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_400/ShuterSpeed_8.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 6)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_400/ShuterSpeed_30.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 7)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_400/ShuterSpeed_60.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 8)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_400/ShuterSpeed_125.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 9)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_400/ShuterSpeed_250.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 10)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_400/ShuterSpeed_500.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 11)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_400/ShuterSpeed_1000.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 12)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_400/ShuterSpeed_2000.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 13)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_400/ShuterSpeed_4000.jpg";

    }
    /*800*/
    else if ((ISO == 4)&&(ShutSpeed == 2)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_800/ShuterSpeed_1.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 3)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_800/ShuterSpeed_2.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 4)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_800/ShuterSpeed_4.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 5)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_800/ShuterSpeed_8.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 6)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_800/ShuterSpeed_30.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 7)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_800/ShuterSpeed_60.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 8)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_800/ShuterSpeed_125.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 9)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_800/ShuterSpeed_250.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 10)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_800/ShuterSpeed_500.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 11)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_800/ShuterSpeed_1000.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 12)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_800/ShuterSpeed_2000.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 13)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_800/ShuterSpeed_4000.jpg";

    }
    /*1600*/
    else if ((ISO == 5)&&(ShutSpeed == 2)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_1600/ShuterSpeed_1.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 3)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_1600/ShuterSpeed_2.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 4)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_1600/ShuterSpeed_4.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 5)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_1600/ShuterSpeed_8.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 6)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_1600/ShuterSpeed_30.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 7)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_1600/ShuterSpeed_60.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 8)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_1600/ShuterSpeed_125.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 9)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_1600/ShuterSpeed_250.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 10)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_1600/ShuterSpeed_500.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 11)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_1600/ShuterSpeed_1000.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 12)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_1600/ShuterSpeed_2000.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 13)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_1600/ShuterSpeed_4000.jpg";

    }
    /*3200*/
    else if ((ISO == 6)&&(ShutSpeed == 2)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_3200/ShuterSpeed_1.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 3)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_3200/ShuterSpeed_2.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 4)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_3200/ShuterSpeed_4.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 5)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_3200/ShuterSpeed_8.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 6)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_3200/ShuterSpeed_30.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 7)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_3200/ShuterSpeed_60.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 8)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_3200/ShuterSpeed_125.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 9)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_3200/ShuterSpeed_250.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 10)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_3200/ShuterSpeed_500.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 11)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_3200/ShuterSpeed_1000.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 12)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_3200/ShuterSpeed_2000.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 13)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_3200/ShuterSpeed_4000.jpg";

    }
    /*6400*/
    else if ((ISO == 7)&&(ShutSpeed == 2)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_6400/ShuterSpeed_1.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 3)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_6400/ShuterSpeed_2.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 4)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_6400/ShuterSpeed_4.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 5)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_6400/ShuterSpeed_8.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 6)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_6400/ShuterSpeed_30.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 7)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_6400/ShuterSpeed_60.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 8)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_6400/ShuterSpeed_125.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 9)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_6400/ShuterSpeed_250.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 10)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_6400/ShuterSpeed_500.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 11)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_6400/ShuterSpeed_1000.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 12)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_6400/ShuterSpeed_2000.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 13)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_6400/ShuterSpeed_4000.jpg";

    }
    /*12800*/
    else if ((ISO == 8)&&(ShutSpeed == 2)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_12800/ShuterSpeed_1.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 3)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_12800/ShuterSpeed_2.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 4)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_12800/ShuterSpeed_4.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 5)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_12800/ShuterSpeed_8.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 6)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_12800/ShuterSpeed_30.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 7)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_12800/ShuterSpeed_60.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 8)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_12800/ShuterSpeed_125.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 9)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_12800/ShuterSpeed_250.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 10)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_12800/ShuterSpeed_500.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 11)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_12800/ShuterSpeed_1000.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 12)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_12800/ShuterSpeed_2000.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 13)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_12800/ShuterSpeed_4000.jpg";

    }
    /*24600*/
    else if ((ISO == 9)&&(ShutSpeed == 2)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_24600/ShuterSpeed_1.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 3)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_24600/ShuterSpeed_2.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 4)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_24600/ShuterSpeed_4.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 5)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_24600/ShuterSpeed_8.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 6)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_24600/ShuterSpeed_30.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 7)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_24600/ShuterSpeed_60.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 8)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_24600/ShuterSpeed_125.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 9)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_24600/ShuterSpeed_250.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 10)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_24600/ShuterSpeed_500.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 11)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_24600/ShuterSpeed_1000.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 12)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_24600/ShuterSpeed_2000.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 13)&&(Aperture == 5)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_11/ISO_24600/ShuterSpeed_4000.jpg";

    }/*16*/
    else if ((ISO == 2)&&(ShutSpeed == 2)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_200/ShuterSpeed_1.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 3)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_200/ShuterSpeed_2.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 4)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_200/ShuterSpeed_4.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 5)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_200/ShuterSpeed_8.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 6)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_200/ShuterSpeed_30.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 7)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_200/ShuterSpeed_60.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 8)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_200/ShuterSpeed_125.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 9)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_200/ShuterSpeed_250.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 10)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_200/ShuterSpeed_500.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 11)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_200/ShuterSpeed_1000.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 12)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_200/ShuterSpeed_2000.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 13)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_200/ShuterSpeed_4000.jpg";

    }
    /*400*/
    else if ((ISO == 3)&&(ShutSpeed == 2)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_400/ShuterSpeed_1.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 3)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_400/ShuterSpeed_2.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 4)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_400/ShuterSpeed_4.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 5)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_400/ShuterSpeed_8.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 6)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_400/ShuterSpeed_30.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 7)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_400/ShuterSpeed_60.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 8)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_400/ShuterSpeed_125.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 9)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_400/ShuterSpeed_250.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 10)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_400/ShuterSpeed_500.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 11)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_400/ShuterSpeed_1000.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 12)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_400/ShuterSpeed_2000.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 13)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_400/ShuterSpeed_4000.jpg";

    }
    /*800*/
    else if ((ISO == 4)&&(ShutSpeed == 2)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_800/ShuterSpeed_1.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 3)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_800/ShuterSpeed_2.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 4)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_800/ShuterSpeed_4.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 5)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_800/ShuterSpeed_8.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 6)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_800/ShuterSpeed_30.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 7)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_800/ShuterSpeed_60.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 8)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_800/ShuterSpeed_125.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 9)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_800/ShuterSpeed_250.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 10)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_800/ShuterSpeed_500.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 11)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_800/ShuterSpeed_1000.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 12)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_800/ShuterSpeed_2000.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 13)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_800/ShuterSpeed_4000.jpg";

    }
    /*1600*/
    else if ((ISO == 5)&&(ShutSpeed == 2)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_1600/ShuterSpeed_1.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 3)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_1600/ShuterSpeed_2.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 4)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_1600/ShuterSpeed_4.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 5)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_1600/ShuterSpeed_8.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 6)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_1600/ShuterSpeed_30.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 7)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_1600/ShuterSpeed_60.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 8)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_1600/ShuterSpeed_125.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 9)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_1600/ShuterSpeed_250.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 10)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_1600/ShuterSpeed_500.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 11)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_1600/ShuterSpeed_1000.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 12)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_1600/ShuterSpeed_2000.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 13)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_1600/ShuterSpeed_4000.jpg";

    }
    /*3200*/
    else if ((ISO == 6)&&(ShutSpeed == 2)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_3200/ShuterSpeed_1.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 3)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_3200/ShuterSpeed_2.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 4)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_3200/ShuterSpeed_4.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 5)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_3200/ShuterSpeed_8.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 6)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_3200/ShuterSpeed_30.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 7)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_3200/ShuterSpeed_60.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 8)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_3200/ShuterSpeed_125.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 9)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_3200/ShuterSpeed_250.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 10)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_3200/ShuterSpeed_500.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 11)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_3200/ShuterSpeed_1000.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 12)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_3200/ShuterSpeed_2000.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 13)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_3200/ShuterSpeed_4000.jpg";

    }
    /*6400*/
    else if ((ISO == 7)&&(ShutSpeed == 2)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_6400/ShuterSpeed_1.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 3)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_6400/ShuterSpeed_2.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 4)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_6400/ShuterSpeed_4.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 5)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_6400/ShuterSpeed_8.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 6)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_6400/ShuterSpeed_30.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 7)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_6400/ShuterSpeed_60.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 8)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_6400/ShuterSpeed_125.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 9)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_6400/ShuterSpeed_250.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 10)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_6400/ShuterSpeed_500.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 11)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_6400/ShuterSpeed_1000.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 12)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_6400/ShuterSpeed_2000.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 13)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_6400/ShuterSpeed_4000.jpg";

    }
    /*12800*/
    else if ((ISO == 8)&&(ShutSpeed == 2)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_12800/ShuterSpeed_1.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 3)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_12800/ShuterSpeed_2.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 4)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_12800/ShuterSpeed_4.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 5)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_12800/ShuterSpeed_8.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 6)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_12800/ShuterSpeed_30.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 7)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_12800/ShuterSpeed_60.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 8)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_12800/ShuterSpeed_125.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 9)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_12800/ShuterSpeed_250.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 10)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_12800/ShuterSpeed_500.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 11)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_12800/ShuterSpeed_1000.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 12)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_12800/ShuterSpeed_2000.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 13)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_12800/ShuterSpeed_4000.jpg";

    }
    /*24600*/
    else if ((ISO == 9)&&(ShutSpeed == 2)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_24600/ShuterSpeed_1.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 3)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_24600/ShuterSpeed_2.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 4)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_24600/ShuterSpeed_4.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 5)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_24600/ShuterSpeed_8.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 6)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_24600/ShuterSpeed_30.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 7)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_24600/ShuterSpeed_60.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 8)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_24600/ShuterSpeed_125.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 9)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_24600/ShuterSpeed_250.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 10)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_24600/ShuterSpeed_500.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 11)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_24600/ShuterSpeed_1000.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 12)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_24600/ShuterSpeed_2000.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 13)&&(Aperture == 6)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_16/ISO_24600/ShuterSpeed_4000.jpg";

    }/*22*/
    else if ((ISO == 2)&&(ShutSpeed == 2)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_200/ShuterSpeed_1.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 3)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_200/ShuterSpeed_2.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 4)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_200/ShuterSpeed_4.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 5)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_200/ShuterSpeed_8.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 6)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_200/ShuterSpeed_30.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 7)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_200/ShuterSpeed_60.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 8)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_200/ShuterSpeed_125.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 9)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_200/ShuterSpeed_250.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 10)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_200/ShuterSpeed_500.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 11)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_200/ShuterSpeed_1000.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 12)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_200/ShuterSpeed_2000.jpg";

    }else if ((ISO == 2)&&(ShutSpeed == 13)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_200/ShuterSpeed_4000.jpg";

    }
    /*400*/
    else if ((ISO == 3)&&(ShutSpeed == 2)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_400/ShuterSpeed_1.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 3)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_400/ShuterSpeed_2.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 4)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_400/ShuterSpeed_4.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 5)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_400/ShuterSpeed_8.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 6)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_400/ShuterSpeed_30.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 7)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_400/ShuterSpeed_60.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 8)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_400/ShuterSpeed_125.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 9)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_400/ShuterSpeed_250.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 10)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_400/ShuterSpeed_500.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 11)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_400/ShuterSpeed_1000.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 12)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_400/ShuterSpeed_2000.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 13)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_400/ShuterSpeed_4000.jpg";

    }
    /*800*/
    else if ((ISO == 4)&&(ShutSpeed == 2)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_800/ShuterSpeed_1.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 3)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_800/ShuterSpeed_2.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 4)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_800/ShuterSpeed_4.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 5)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_800/ShuterSpeed_8.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 6)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_800/ShuterSpeed_30.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 7)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_800/ShuterSpeed_60.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 8)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_800/ShuterSpeed_125.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 9)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_800/ShuterSpeed_250.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 10)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_800/ShuterSpeed_500.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 11)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_800/ShuterSpeed_1000.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 12)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_800/ShuterSpeed_2000.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 13)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/Apeture/ShuterSpeed_4000/Apeture_5_6.jpg";

    }
    /*1600*/
    else if ((ISO == 5)&&(ShutSpeed == 2)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_1600/ShuterSpeed_1.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 3)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_1600/ShuterSpeed_2.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 4)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_1600/ShuterSpeed_4.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 5)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_1600/ShuterSpeed_8.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 6)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_1600/ShuterSpeed_30.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 7)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_1600/ShuterSpeed_60.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 8)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_1600/ShuterSpeed_125.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 9)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_1600/ShuterSpeed_250.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 10)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_1600/ShuterSpeed_500.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 11)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_1600/ShuterSpeed_1000.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 12)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_1600/ShuterSpeed_2000.jpg";

    }else if ((ISO == 5)&&(ShutSpeed == 13)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_1600/ShuterSpeed_4000.jpg";

    }
    /*3200*/
    else if ((ISO == 6)&&(ShutSpeed == 2)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_3200/ShuterSpeed_1.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 3)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_3200/ShuterSpeed_2.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 4)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_3200/ShuterSpeed_4.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 5)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_3200/ShuterSpeed_8.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 6)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_3200/ShuterSpeed_30.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 7)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_3200/ShuterSpeed_60.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 8)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_3200/ShuterSpeed_125.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 9)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_3200/ShuterSpeed_250.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 10)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_3200/ShuterSpeed_500.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 11)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_3200/ShuterSpeed_1000.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 12)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_3200/ShuterSpeed_2000.jpg";

    }else if ((ISO == 6)&&(ShutSpeed == 13)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_3200/ShuterSpeed_4000.jpg";

    }
    /*6400*/
    else if ((ISO == 7)&&(ShutSpeed == 2)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_6400/ShuterSpeed_1.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 3)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_6400/ShuterSpeed_2.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 4)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_6400/ShuterSpeed_4.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 5)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_6400/ShuterSpeed_8.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 6)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_6400/ShuterSpeed_30.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 7)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_6400/ShuterSpeed_60.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 8)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_6400/ShuterSpeed_125.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 9)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_6400/ShuterSpeed_250.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 10)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_6400/ShuterSpeed_500.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 11)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_6400/ShuterSpeed_1000.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 12)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_6400/ShuterSpeed_2000.jpg";

    }else if ((ISO == 7)&&(ShutSpeed == 13)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_6400/ShuterSpeed_4000.jpg";

    }
    /*12800*/
    else if ((ISO == 8)&&(ShutSpeed == 2)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_12800/ShuterSpeed_1.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 3)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_12800/ShuterSpeed_2.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 4)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_12800/ShuterSpeed_4.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 5)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_12800/ShuterSpeed_8.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 6)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_12800/ShuterSpeed_30.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 7)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_12800/ShuterSpeed_60.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 8)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_12800/ShuterSpeed_125.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 9)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_12800/ShuterSpeed_250.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 10)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_12800/ShuterSpeed_500.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 11)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_12800/ShuterSpeed_1000.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 12)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_12800/ShuterSpeed_2000.jpg";

    }else if ((ISO == 8)&&(ShutSpeed == 13)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_12800/ShuterSpeed_4000.jpg";

    }
    /*24600*/
    else if ((ISO == 9)&&(ShutSpeed == 2)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_24600/ShuterSpeed_1.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 3)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_24600/ShuterSpeed_2.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 4)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_24600/ShuterSpeed_4.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 5)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_24600/ShuterSpeed_8.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 6)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_24600/ShuterSpeed_30.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 7)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_24600/ShuterSpeed_60.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 8)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_24600/ShuterSpeed_125.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 9)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_24600/ShuterSpeed_250.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 10)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_24600/ShuterSpeed_500.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 11)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_24600/ShuterSpeed_1000.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 12)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_24600/ShuterSpeed_2000.jpg";

    }else if ((ISO == 9)&&(ShutSpeed == 13)&&(Aperture == 7)){

        ImgPhoto.src = "/static/tren1/Результат/ShuterSpeed/Apeture_22/ISO_24600/ShuterSpeed_4000.jpg";

    } else if ((ISO == 2)&&(ShutSpeed == 1)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ISO/ISO_200.jpg";

    }else if ((ISO == 3)&&(ShutSpeed == 1)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ISO/ISO_400.jpg";

    }else if ((ISO == 4)&&(ShutSpeed == 1)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ISO/ISO_800.jpg";

    }else if ((ISO >= 5)&&(ShutSpeed == 1)&&(Aperture == 1)){

        ImgPhoto.src = "/static/tren1/Результат/ISO/ISO_1600.jpg";

    }
}