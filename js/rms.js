        let gnbMenu = document.querySelectorAll(".gnb > li");
        let depth2 = document.querySelectorAll(".subSet");
        for(let i=0; i < depth2.length; i++){
            gnbMenu[i].addEventListener("mouseenter",function(){
                depth2[i].style.display = "block";
            });
            gnbMenu[i].addEventListener("mouseleave",function(){
                depth2[i].style.display = "none";
            });
        }
        
        let slider = document.querySelector(".slider .view");
        let prevBtn = document.querySelector(".slider .prevBtn");
        let nextBtn = document.querySelector(".slider .nextBtn");
        let circleBtn = document.querySelectorAll(".slider .circleBtn li");
        // 슬라이드 번호 순서값
        let sNumber = 0;

        // 이후 버튼 클릭시 화면 한개씩 넘어감
        nextBtn.addEventListener("click",function(){
            if(sNumber == circleBtn.length-1){
                sNumber = 0;
            }
            else{
                sNumber++;
            }
            // 반복문을 이용한 동그라미 버튼 전원 비활성화
            for(let i = 0; i < circleBtn.length; i++){
                circleBtn[i].style.border = "none"
                circleBtn[i].style.backgroundColor = "#d5d4d3";
            }
            // 다음순서의 동그라미만 활성화
            circleBtn[sNumber].style.border = "2px solid #fff"
            circleBtn[sNumber].style.backgroundColor = "transparent";

            slider.style.marginLeft = -100 * sNumber + "%";
        });

        // 이전 버튼 클릭시 화면 한개씩 넘어감
        prevBtn.addEventListener("click",function(){
            if(sNumber == 0){
                sNumber = circleBtn.length - 1;
            }
            else{
                sNumber--;               
            }
            for(let i = 0; i < circleBtn.length; i++){
                circleBtn[i].style.border = "none"
                circleBtn[i].style.backgroundColor = "#d5d4d3";
            }
            circleBtn[sNumber].style.border = "2px solid #fff"
            circleBtn[sNumber].style.backgroundColor = "transparent";

            slider.style.marginLeft = -100 * sNumber + "%";
        });

        // 동그라미 버튼들 각각 클릭시 해당 슬라이드 화면으로 넘어감
        for(let j = 0; j < circleBtn.length; j++){
            circleBtn[j].addEventListener("click",function(){
                // 동그라미 버튼전원 비활성화
                for(let k = 0; k < circleBtn.length; k++){
                    circleBtn[k].style.border = "none"
                    circleBtn[k].style.backgroundColor = "#d5d4d3";
                }
                circleBtn[j].style.border = "2px solid #fff"
                circleBtn[j].style.backgroundColor = "transparent";
                // 화면 넘어가게 처리
                sNumber = j; // 클릭한 동그라미 순서값 sNumber에 대입!
                slider.style.marginLeft = -100 * sNumber + "%";
            });
        }