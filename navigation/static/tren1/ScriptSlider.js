    function ChangeMeaningISO() {

    /*Получение значения ползунка ввеженого пользователем*/
    ISO = document.getElementById("ISO").value;

    /*Поулчение элемента значение которого будет изменятся*/
    MeaningISO = document.getElementById("MeaningISO");
    
    /*Информирование пользователя о том что он изменяет*/
    Info= document.getElementById("InfoMeaning");
    Info.innerHTML = "ISO — это значения, изменения которых позволяет увеличить яркость картинки. При изменение данного ползунка становится ярче или темнее, при увеличение данного ползунка на изображение начнут появляться шумы.";

        
    if (ISO == 1){

        MeaningISO.innerHTML = "<b>ISO:</b> 100";
        

    }else if (ISO == 2){

        MeaningISO.innerHTML = "<b>ISO:</b> 200";

    }else if (ISO == 3){

        MeaningISO.innerHTML = "<b>ISO:</b> 400";

    }else if (ISO == 4){

        MeaningISO.innerHTML = "<b>ISO:</b> 800";

    }else if (ISO == 5){

        MeaningISO.innerHTML = "<b>ISO:</b> 1600";

    }else if (ISO == 6){

        MeaningISO.innerHTML = "<b>ISO:</b> 3200";

    }else if (ISO == 7){

        MeaningISO.innerHTML = "<b>ISO:</b> 6400";

    }else if (ISO == 8){

        MeaningISO.innerHTML = "<b>ISO:</b> 12800";

    }else if (ISO == 9){

        MeaningISO.innerHTML = "<b>ISO:</b> 25600";
    }

   }

   function ChangeMeaningShutSpeed(){

    /*Получение значения ползунка*/
    ShutSpeed = document.getElementById("ShutSpeed").value;

    /*Поулчение элемента значение которого будет изменятся*/
    MeaningShutSpeed = document.getElementById("MeaningShutSpeed");

    /*Информирование пользователя о том что он изменяет*/
    Info= document.getElementById("InfoMeaning");
    Info.innerHTML = " Выдержка — это время, на которое открываются затворы камеры для того чтобы светочувствительный материал получил свет. От того сколько света получить материал зависит насколько красочный и яркий кадр получится, а также от длины выдержки зависит как на кадре получиться движущийся объект. Соответственно при изменении данного ползунка будет изменяться красочность и яркость кадра, а также четкость движущегося объекта.";
   

    if (ShutSpeed == 1){

        MeaningShutSpeed.innerHTML = "<b>Выдержка:</b> 1 сек";

    }else if (ShutSpeed == 2){

        MeaningShutSpeed.innerHTML = "<b>Выдержка:</b>1/2 сек";

    }else if (ShutSpeed == 3){

        MeaningShutSpeed.innerHTML = "<b>Выдержка:</b> 1/4 сек";

    }else if (ShutSpeed == 4){

        MeaningShutSpeed.innerHTML = "<b>Выдержка:</b> 1/8 сек";

    }else if (ShutSpeed == 5){

        MeaningShutSpeed.innerHTML = "<b>Выдержка:</b> 1/15 сек";

    }else if (ShutSpeed == 6){

        MeaningShutSpeed.innerHTML = "<b>Выдержка:</b> 1/30сек";

    }else if (ShutSpeed == 7){

        MeaningShutSpeed.innerHTML = "<b>Выдержка:</b> 1/60 сек";

    }else if (ShutSpeed == 8){

        MeaningShutSpeed.innerHTML = "<b>Выдержка:</b> 1/125 сек";

    }else if (ShutSpeed == 9){

        MeaningShutSpeed.innerHTML = "<b>Выдержка:</b> 1/250 сек";

    }else if (ShutSpeed == 10){

        MeaningShutSpeed.innerHTML = "<b>Выдержка:</b> 1/500сек";

    }else if (ShutSpeed == 11){

        MeaningShutSpeed.innerHTML = "<b>Выдержка:</b> 1/1000 сек";

    }else if (ShutSpeed == 12){

        MeaningShutSpeed.innerHTML = "<b>Выдержка:</b> 1/2000 сек";

    }else if (ShutSpeed == 13){

        MeaningShutSpeed.innerHTML = "<b>Выдержка:</b> 1/4000 сек";
    }
}

    function ChangeMeaningAperture() {

    /*Получение значения ползунка*/
    Aperture = document.getElementById("Aperture").value;

    /*Поулчение элемента значение которого будет изменятся*/
    MeaningAperture = document.getElementById("MeaningAperture");

    /*Информирование пользователя о том что он изменяет*/
    Info= document.getElementById("InfoMeaning");
    Info.innerHTML = "От диафрагмы зависит глубина резкости изображаемого пространства (ГРИП). От изменения данного ползунка зависит четкость объектов, которые находятся в области видоискателя.";

    if (Aperture == 1){

        MeaningAperture.innerHTML = "<b>Диафрагма:</b> 2.8";

    }else if (Aperture == 2){

        MeaningAperture.innerHTML = "<b>Диафрагма:</b> 4";

    }else if (Aperture == 3){

        MeaningAperture.innerHTML = "<b>Диафрагма:</b> 5.6";

    }else if (Aperture == 4){

        MeaningAperture.innerHTML = "<b>Диафрагма:</b> 8";

    }else if (Aperture == 5){

        MeaningAperture.innerHTML = "<b>Диафрагма:</b> 11";

    }else if (Aperture == 6){

        MeaningAperture.innerHTML = "<b>Диафрагма:</b> 16";

    }else if (Aperture == 7){

        MeaningAperture.innerHTML = "<b>Диафрагма:</b> 22";

    }

   }